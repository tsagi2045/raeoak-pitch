import { supabase } from "./supabase";
import type { Answer, Answers } from "./questions";

const LOCAL_KEY = "raeoak-qa-answers";
const MIGRATED_KEY = "raeoak-qa-migrated";

function serialize(answer: Answer): string {
  return JSON.stringify(answer);
}

function deserialize(raw: string): Answer {
  try {
    return JSON.parse(raw);
  } catch {
    return { text: raw };
  }
}

export async function loadAnswers(): Promise<Answers> {
  try {
    const { data, error } = await supabase
      .from("answers")
      .select("question_id, answer");
    if (error) throw error;
    const answers: Answers = {};
    for (const row of data || []) {
      if (row.answer) answers[row.question_id] = deserialize(row.answer);
    }
    return answers;
  } catch {
    return loadLocal();
  }
}

export async function saveAnswer(id: string, value: Answer): Promise<void> {
  saveLocal(id, value);
  try {
    await supabase.from("answers").upsert(
      {
        question_id: id,
        answer: serialize(value),
        updated_at: new Date().toISOString(),
      },
      { onConflict: "question_id" }
    );
  } catch {}
}

export async function clearAllAnswers(): Promise<void> {
  if (typeof window !== "undefined") {
    localStorage.removeItem(LOCAL_KEY);
  }
  try {
    await supabase.from("answers").delete().neq("question_id", "");
  } catch {}
}

export async function migrateLocalToSupabase(): Promise<void> {
  if (typeof window === "undefined") return;
  if (localStorage.getItem(MIGRATED_KEY)) return;

  const local = loadLocal();
  const entries = Object.entries(local).filter(([, v]) => {
    if (v.radio) return true;
    if (v.checkboxes && v.checkboxes.length > 0) return true;
    if (v.text && v.text.trim()) return true;
    return false;
  });

  if (entries.length === 0) {
    localStorage.setItem(MIGRATED_KEY, "true");
    return;
  }

  const { data } = await supabase
    .from("answers")
    .select("question_id")
    .limit(1);

  if (data && data.length > 0) {
    localStorage.setItem(MIGRATED_KEY, "true");
    return;
  }

  const rows = entries.map(([question_id, answer]) => ({
    question_id,
    answer: serialize(answer),
    updated_at: new Date().toISOString(),
  }));
  await supabase.from("answers").upsert(rows, { onConflict: "question_id" });
  localStorage.setItem(MIGRATED_KEY, "true");
}

function loadLocal(): Answers {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveLocal(id: string, value: Answer): void {
  if (typeof window === "undefined") return;
  const current = loadLocal();
  current[id] = value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(current));
}

// File upload — Korean filename safe
export interface UploadedFile {
  path: string;
  originalName: string;
  url: string;
}

export async function uploadFile(file: File): Promise<UploadedFile | null> {
  const ext = file.name.split(".").pop() || "bin";
  const safePath = `${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${ext}`;

  const { error } = await supabase.storage
    .from("attachments")
    .upload(safePath, file);

  if (error) return null;

  const {
    data: { publicUrl },
  } = supabase.storage.from("attachments").getPublicUrl(safePath);

  return { path: safePath, originalName: file.name, url: publicUrl };
}

export async function deleteFile(path: string): Promise<void> {
  await supabase.storage.from("attachments").remove([path]);
}

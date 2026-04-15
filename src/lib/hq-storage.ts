import { supabase } from "./supabase";
import { uploadFile, deleteFile, type UploadedFile } from "./storage";

export interface HqAnswer {
  text?: string;
  files?: UploadedFile[];
}

export type HqAnswers = Record<string, HqAnswer>;

export async function loadHqAnswers(): Promise<HqAnswers> {
  try {
    const { data, error } = await supabase
      .from("answers")
      .select("question_id, answer")
      .like("question_id", "hq-%");
    if (error) throw error;
    const answers: HqAnswers = {};
    for (const row of data || []) {
      if (row.answer) {
        try {
          answers[row.question_id] = JSON.parse(row.answer);
        } catch {
          answers[row.question_id] = { text: row.answer };
        }
      }
    }
    return answers;
  } catch {
    return {};
  }
}

export async function saveHqAnswer(id: string, value: HqAnswer): Promise<void> {
  try {
    await supabase.from("answers").upsert(
      {
        question_id: id,
        answer: JSON.stringify(value),
        updated_at: new Date().toISOString(),
      },
      { onConflict: "question_id" }
    );
  } catch {}
}

export { uploadFile, deleteFile, type UploadedFile };

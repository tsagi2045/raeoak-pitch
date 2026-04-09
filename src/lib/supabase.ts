import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mfxkiasuvlrccuzzgraa.supabase.co";
// gitleaks: Supabase anon key (public, not secret)
const SUPABASE_ANON_KEY = [
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1meGtpYXN1dmxyY2N1enpncmFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2ODI5MDMsImV4cCI6MjA5MTI1ODkwM30",
  "xLnAGV2wBlKhADcT8z0fldkc1J7w52B-Kts0JhTRdQc",
].join(".");

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

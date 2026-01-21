export type Role = "student" | "teacher" | "parent" | "admin";

export interface SessionUser {
  id: string;
  role: Role;
  schoolId: string;
}

export function getSession(): SessionUser | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem("session");
  return raw ? JSON.parse(raw) : null;
}

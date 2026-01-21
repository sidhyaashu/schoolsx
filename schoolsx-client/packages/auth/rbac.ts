import { Role } from "./session";

export const ROLE_ROUTES: Record<Role, string> = {
  student: "/student/dashboard",
  teacher: "/teacher/dashboard",
  parent: "/parent/dashboard",
  admin: "/admin/dashboard",
};

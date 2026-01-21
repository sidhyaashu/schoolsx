"use client";

import { useQuery } from "@tanstack/react-query";
import { teacherService } from "../../services/teacher.service";

export const useTeacherClasses = () => {
    return useQuery({
        queryKey: ["teacher", "classes"],
        queryFn: () => teacherService.getMyClasses(),
    });
};

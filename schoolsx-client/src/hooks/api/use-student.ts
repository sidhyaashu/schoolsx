import { useQuery } from "@tanstack/react-query";
import { studentService } from "../../services/student.service";

export const useStudentDashboard = () => {
    return useQuery({
        queryKey: ["student", "dashboard"],
        queryFn: () => studentService.getDashboardData(),
    });
};

export const useStudentSubjects = () => {
    return useQuery({
        queryKey: ["student", "subjects"],
        queryFn: () => studentService.getMySubjects(),
    });
};

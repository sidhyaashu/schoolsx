"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { assignmentService } from "../../services/assignment.service";

export const useAssignments = () => {
    return useQuery({
        queryKey: ["assignments"],
        queryFn: () => assignmentService.getMyAssignments(),
    });
};

export const useSubmitAssignment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: { assignmentId: number; fileUrl: string }) =>
            assignmentService.submitAssignment(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["assignments"] });
        }
    });
};

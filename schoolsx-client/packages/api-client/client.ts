import { ApiResponse, ApiError, API_CONFIG } from "./index";

export class ApiClient {
    private static instance: ApiClient;
    private baseUrl: string = API_CONFIG.baseUrl;

    private constructor() { }

    public static getInstance(): ApiClient {
        if (!ApiClient.instance) {
            ApiClient.instance = new ApiClient();
        }
        return ApiClient.instance;
    }

    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            "Content-Type": "application/json",
            ...options.headers,
        };

        try {
            const response = await fetch(url, { ...options, headers });
            const result: ApiResponse<T> = await response.json();

            if (!response.ok || result.error) {
                throw new ApiError(
                    result.error?.code || "UNKNOWN_ERROR",
                    result.error?.message || "An unexpected error occurred",
                    result.error?.details
                );
            }

            return result.data as T;
        } catch (error) {
            if (error instanceof ApiError) throw error;
            throw new ApiError("NETWORK_ERROR", "Failed to connect to the server");
        }
    }

    public get<T>(endpoint: string, options?: RequestInit): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: "GET" });
    }

    public post<T>(endpoint: string, data: any, options?: RequestInit): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: "POST",
            body: JSON.stringify(data),
        });
    }

    public put<T>(endpoint: string, data: any, options?: RequestInit): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: "PUT",
            body: JSON.stringify(data),
        });
    }

    public delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: "DELETE" });
    }
}

export const api = ApiClient.getInstance();

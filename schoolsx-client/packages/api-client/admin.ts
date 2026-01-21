import { api as client } from "./client";
import { Inquiry, Application, Invoice, LiveSession } from "../../src/domain/types";

export class AdminApi {
    async getInquiries(): Promise<Inquiry[]> {
        return client.get<Inquiry[]>("/api/admin/admissions/inquiries");
    }

    async getApplications(): Promise<Application[]> {
        return client.get<Application[]>("/api/admin/admissions/applications");
    }

    async getInvoices(): Promise<Invoice[]> {
        return client.get<Invoice[]>("/api/admin/billing/invoices");
    }

    async getLiveSessions(): Promise<LiveSession[]> {
        return client.get<LiveSession[]>("/api/admin/live-classes");
    }
}

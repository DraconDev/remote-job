import { Database } from "./supabase";

export type JobPostWithCompanies =
    Database["public"]["Tables"]["job_post"]["Row"] & {
        companies: Database["public"]["Tables"]["companies"]["Row"];
    };
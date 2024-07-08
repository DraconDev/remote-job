"use server";

import { Database } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function createJobPost(
    job_post: Database["public"]["Tables"]["job_post"]["Insert"]
) {
    const cookieStore = cookies();

    const supabase = createClient(cookieStore);

    return supabase.from("job_post").insert(job_post);
}

export async function getJobs() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data: jobPost } = await supabase.from("job_post").select();
    console.log(jobPost);

    return jobPost as Database["public"]["Tables"]["job_post"]["Row"][];
}

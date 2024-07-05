import { Database } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function createJobPost(
    job_post: Database["public"]["Tables"]["job_post"]["Insert"]
) {
    "use server";
    const cookieStore = cookies();

    const supabase = createClient(cookieStore);

    return supabase.from("job_post").insert(job_post);
}

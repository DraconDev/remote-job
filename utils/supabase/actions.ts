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
    console.log(jobPost, "jobPost");

    return jobPost as Database["public"]["Tables"]["job_post"]["Row"][];
}

// export async function createInvoice(formData: FormData) {
//     "use server";

//     const tag1 = JSON.parse(formData.get("tag1") as string) || "";
//     const tag2 = JSON.parse(formData.get("tag2") as string) || "";
//     const tag3 = JSON.parse(formData.get("tag3") as string) || "";
//     const tag4 = JSON.parse(formData.get("tag4") as string) || "";
//     const tag5 = JSON.parse(formData.get("tag5") as string) || "";

//     const rawFormData: Database["public"]["Tables"]["job_post"]["Insert"] = {
//         salary_min: formData.get("salary_min")
//             ? parseInt(formData.get("salary_min") as string)
//             : null,
//         salary_max: formData.get("salary_max")
//             ? parseInt(formData.get("salary_max") as string)
//             : null,
//         tags:
//             [
//                 tag1 && tag1,
//                 tag2 && tag2,
//                 tag3 && tag3,
//                 tag4 && tag4,
//                 tag5 && tag5,
//             ] || [],
//         description: (formData.get("description") as string) || "",
//         location: (formData.get("location") as string) || "",
//         company_name: (formData.get("company_name") as string) || "",
//         job_title: (formData.get("job_title") as string) || "",
//         apply_link: (formData.get("apply_link") as string) || "",
//     };
//     createJobPost(rawFormData);
// }

// export async function createInvoice(
//     data: Database["public"]["Tables"]["job_post"]["Insert"]
// ) {
//     createJobPost(data);
// }

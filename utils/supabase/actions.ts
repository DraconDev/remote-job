"use server";
import { v4 as uuidv4 } from "uuid";

import { Database } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function createJobPost(formData: FormData) {
    console.log(formData);
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const tags = [
        formData.get("tag1")?.toString() ?? "",
        formData.get("tag2")?.toString() ?? "",
        formData.get("tag3")?.toString() ?? "",
        formData.get("tag4")?.toString() ?? "",
        formData.get("tag5")?.toString() ?? "",
    ].filter((tag) => tag !== "");

    const logo_url = await uploadLogo(formData.get("logo") as File);

    const job_post = {
        job_title: formData.get("job_title") as string,
        description: formData.get("description") as string,
        company_name: formData.get("company_name") as string,
        apply_link: formData.get("apply_link") as string,
        location: formData.get("location") as string,
        salary_min: formData.get("salary_min") as string,
        salary_max: formData.get("salary_max") as string,
        tags: tags,
        logo_path: logo_url,
    };
    supabase.from("job_post").insert(job_post);
}

export async function getJobs() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data: jobPost } = await supabase.from("job_post").select();
    console.log(jobPost, "jobPost");

    return jobPost as Database["public"]["Tables"]["job_post"]["Row"][];
}

export async function uploadLogo(logo: File) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const uniqueId = uuidv4();

    const { data, error } = await supabase.storage
        .from("remoteworknexus")
        .upload("logos/" + uniqueId + ".png", logo);

    if (error) {
        console.log(error);
        return error;
    }

    return data.path;
}

export async function getJobById(id: string) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data: jobPost } = await supabase
        .from("job_post")
        .select()
        .eq("id", id)
        .single();
    return jobPost as Database["public"]["Tables"]["job_post"]["Row"];
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

"use server";
import { v4 as uuidv4 } from "uuid";

import { Database } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { searchType } from "@/types/custom";
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

    const company_id = await createCompany(formData);

    const job_post: Partial<
        Database["public"]["Tables"]["job_post"]["Insert"]
    > = {};
    if (formData.get("job_title"))
        job_post.job_title = formData.get("job_title") as string;
    if (formData.get("description"))
        job_post.description = formData.get("description") as string;
    if (formData.get("location"))
        job_post.location = formData.get("location") as string;
    if (formData.get("salary_min")) {
        const salaryMin = formData.get("salary_min");
        if (salaryMin !== null) {
            job_post.salary_min = Number(salaryMin);
        }
    }
    if (formData.get("salary_max")) {
        const salaryMax = formData.get("salary_max");
        if (salaryMax !== null) {
            job_post.salary_max = Number(salaryMax);
        }
    }
    if (tags.length > 0) job_post.tags = tags;

    job_post.company_id = company_id;

    const { data, error } = await supabase.from("job_post").insert(job_post);

    if (error) {
        console.log(error);
        return error;
    }
    // revalidate root page
    revalidatePath("/");

    return data;
}

// add company info
export async function createCompany(formData: FormData) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const logo_url = await uploadLogo(formData.get("logo") as File);

    const company = {
        company_name: (formData.get("company_name") as string) ?? undefined,
        company_email: (formData.get("company_email") as string) ?? undefined,
        company_website:
            (formData.get("company_website") as string) ?? undefined,
        company_description:
            (formData.get("company_description") as string) ?? undefined,
        company_billing_email:
            (formData.get("company_billing_email") as string) ?? undefined,
        company_logo_url: logo_url,
    };

    const { data, error } = await supabase
        .from("companies")
        .insert(company)
        .select("id");
    if (error) {
        console.log(error);
        return error;
    }
    return data[0].id;
}

export async function getJobs(companyId?: string) {
    console.log("Fetching all jobs...");
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data: jobPost, error } = await supabase
        .from("job_post")
        .select(
            `*
            ,companies: company_id(*)`
        )
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching all job posts:", error);
        return null;
    }

    console.log("Successfully fetched all jobs:", jobPost);
    return jobPost;
}

// get public url of image
export async function getPublicUrl(path: string) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data } = await supabase.storage
        .from("remoteworknexus")
        .getPublicUrl(path);
    return data.publicUrl;
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

export async function searchJobs(search: searchType) {
    console.log("Searching jobs with parameters:", search);
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    let query = supabase
        .from("job_post")
        .select(
            `*
            ,companies: company_id(*)`
        )
        .ilike("job_title", `%${search.searchField}%`);

    if (search.location) {
        query = query.ilike("location", `%${search.location}%`);
    }
    if (search.jobType) {
        query = query.ilike("job_type", `%${search.jobType}%`);
    }
    if (search.experience) {
        query = query.ilike("experience", `%${search.experience}%`);
    }
    if (search.salary) {
        query = query.gte("salary_min", search.salary);
    }

    query = query.order("created_at", { ascending: false });

    const { data: jobPost, error } = await query;

    if (error) {
        console.error("Error fetching job posts:", error);
        return null;
    }

    console.log("Successfully fetched job posts:", jobPost);
    return jobPost as any; // TODO: Define a proper return type for searchJobs
}

// save email address to db
export async function saveEmail(formdata: FormData) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const email = formdata.get("email") as string;
    const { data, error } = await supabase
        .from("subscribers")
        .insert({ email: email })
        .select();
    if (error) {
        console.log(error);
        return error;
    }
    return data;
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

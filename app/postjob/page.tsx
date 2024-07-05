import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

type Props = {};

const page = (props: Props) => {
    // supabase cookieStore
    const cookieStore = cookies();

    // add job_post to supabase

    const supabase = createClient(cookieStore);

    // create job_post in supabase
    function createJobPost(jobPost: any) {
        return supabase.from("jobPost").insert(jobPost);
        // const { data: jobPost } = supabase.from("jobPost").insert({
        //     created_at: new Date(),
        //     salary_min: 10000,
        //     salary_max: 20000,
        //     tags: ["tag1", "tag2"],
        //     description: "description",
        //     location: "location",
        //     company_name: "company_name",
        //     job_title: "job_title",
    }

    return <div>page</div>;
};

export default page;

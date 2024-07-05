"use client";

import { Button } from "@/components/ui/button";
import { Database } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

type Props = {};

const page = (props: Props) => {
    // supabase cookieStore
    const cookieStore = cookies();

    // add job_post to supabase

    const supabase = createClient(cookieStore);

    // create job_post in supabase
    function createJobPost(
        job_post: Database["public"]["Tables"]["job_post"]["Insert"]
    ) {
        return supabase.from("job_post").insert(job_post);
    }

    return (
        <div>
            <Button onClick={() => createJobPost({ job_title: "job_title" })}>
                Post
            </Button>
        </div>
    );
};

export default page;

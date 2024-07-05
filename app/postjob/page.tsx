"use client";

import { Button } from "@/components/ui/button";
import { createJobPost } from "@/utils/supabase/actions";

type Props = {};

const page = (props: Props) => {
    return (
        <div>
            <Button onClick={() => createJobPost({ job_title: "job_title" })}>
                Post
            </Button>
        </div>
    );
};

export default page;

"use client";
import { getJobs } from "@/utils/supabase/actions";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { Database } from "@/types/supabase";

type Props = {};

const JobCards = (props: Props) => {
    const [data, setData] = useState<
        Database["public"]["Tables"]["job_post"]["Row"][] | null
    >(null);

    useEffect(() => {
        if (!data) {
            getJobs().then((jobs) => setData(jobs));
        }
    }, []);

    // return <div>{data && JSON.stringify(data)}</div>;
    return (
        <div>
            {data &&
                data.map(
                    (job: Database["public"]["Tables"]["job_post"]["Row"]) => (
                        <JobCard key={job.id} {...job} />
                    )
                )}
        </div>
    );
};

export default JobCards;

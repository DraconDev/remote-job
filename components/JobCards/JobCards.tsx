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
            getJobs()
                .then((jobs) => {
                    setData(jobs);
                })
                .catch((error) => {
                    console.error("Failed to fetch jobs:", error);
                    // Optionally, update the state to indicate an error occurred.
                });
        }
    }, []);

    return (
        <div>
            {data ? (
                data.map(
                    (job: Database["public"]["Tables"]["job_post"]["Row"]) => (
                        <JobCard key={job.id} {...job} />
                    )
                )
            ) : (
                <p>Loading jobs...</p>
            )}
        </div>
    );
};
export default JobCards;

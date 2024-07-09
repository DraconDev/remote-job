"use client";
import { Database } from "@/types/supabase";

type Props = {
    data: Database["public"]["Tables"]["job_post"]["Row"][] | null;
};

const JobCards = (props: Props) => {
    console.log(props);
    return (
        <div>
            {props.data && JSON.stringify(props.data)}
            {/* {props.data ? (
                props.data.map(
                    (job: Database["public"]["Tables"]["job_post"]["Row"]) => (
                        <JobCard key={job.id} {...job} />
                    )
                )
            ) : (
                <p>Loading jobs...</p>
            )} */}
        </div>
    );
};
export default JobCards;

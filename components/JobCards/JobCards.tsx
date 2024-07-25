import { Database } from "@/types/supabase";
import JobCard from "./JobCard";

type Props = {
    data: Database["public"]["Tables"]["job_post"]["Row"][] | null;
};

const JobCards = (props: Props) => {
    return (
        <div className="flex flex-col gap-4">
            {/* {props.data && JSON.stringify(props.data)} */}
            {props.data ? (
                props.data.map(
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

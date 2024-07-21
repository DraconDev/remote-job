import { Database } from "@/types/supabase";
import Link from "next/link";

type Props = {
    job: Database["public"]["Tables"]["job_post"]["Row"];
};

const JobListing = ({ job }: Props) => {
    console.log(job);
    return (
        <div className="flex flex-col">
            <p>{job.job_title}</p>
            <p>{job.company_name}</p>
            <p className="">
                ${job.salary_min} - ${job.salary_max}
            </p>
            <Link href={`/job/${job.apply_link}`}></Link>
            <div
                dangerouslySetInnerHTML={{
                    __html: job.description as string,
                }}
            ></div>
        </div>
    );
};

export default JobListing;

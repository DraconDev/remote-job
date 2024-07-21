import { Database } from "@/types/supabase";
import CustomLink from "./ui/CustomLink";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

type Props = {
    job: Database["public"]["Tables"]["job_post"]["Row"];
};

const JobListing = ({ job }: Props) => {
    console.log(job);
    return (
        <div className="flex flex-col p-2 gap-1">
            <Link href="/" className="flex items-center gap-2">
                <FaArrowLeft />
                {`Back to all jobs`}
            </Link>
            <div className="text-3xl font-bold">{job.job_title}</div>
            <div className="text-2xl">{job.company_name}</div>
            <div className="text-xl">
                ${job.salary_min} - ${job.salary_max}
            </div>
            <CustomLink
                href={`/job/${job.apply_link}`}
                add="bg-accent text-center"
            >
                <p className="w-full whitespace-nowrap">Apply now</p>
            </CustomLink>
            <div
                dangerouslySetInnerHTML={{
                    __html: job.description as string,
                }}
            ></div>
        </div>
    );
};

export default JobListing;

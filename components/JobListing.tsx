import { Database } from "@/types/supabase";

type Props = {
    job: Database["public"]["Tables"]["job_post"]["Row"];
};

const JobListing = ({ job }: Props) => {
    console.log(job);
    return <div>JobListing</div>;
};

export default JobListing;

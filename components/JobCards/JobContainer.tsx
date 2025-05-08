import JobCards from "./JobCards";
import { Database } from "@/types/supabase";

type Props = {
    data: Database["public"]["Tables"]["job_post"]["Row"][] | null;
};

const JobContainer = ({ data }: Props) => {
    return data && <JobCards data={data} />;
};

export default JobContainer;

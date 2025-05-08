import { getJobs } from "@/utils/supabase/actions";
import JobCards from "./JobCards";

import JobCards from "./JobCards";

type Props = {
    data: any[] | null;
};

const JobContainer = ({ data }: Props) => {
    return data && <JobCards data={data} />;
};

export default JobContainer;

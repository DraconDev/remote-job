import JobCards from "./JobCards";
import { JobPostWithCompanies } from "@/types/custom";

type Props = {
    data: JobPostWithCompanies[] | null | undefined;
};

const JobContainer = ({ data }: Props) => {
    return data && <JobCards data={data} />;
};

export default JobContainer;

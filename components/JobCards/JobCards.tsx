import JobCard from "./JobCard";
import { JobPostWithCompanies } from "@/types/custom";

type Props = {
    data: JobPostWithCompanies[] | undefined;
};

const JobCards = (props: Props) => {
    return (
        <div className="flex flex-col gap-4">
            {/* {props.data && JSON.stringify(props.data)} */}
            {props.data ? (
                props.data.map((job: JobPostWithCompanies) => (
                    <JobCard key={job.id} {...job} />
                ))
            ) : (
                <p>Loading jobs...</p>
            )}
        </div>
    );
};
export default JobCards;

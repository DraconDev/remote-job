import JobListing from "@/components/JobListing";
import { getJobById } from "@/utils/supabase/actions";

const page = async ({ params }: { params: { id: string } }) => {
    const job = await getJobById(params.id);
    return <JobListing job={job} />;
};

export default page;

import { getJobById } from "@/utils/supabase/actions";

const page = async ({ params }: { params: { slug: string } }) => {
    const job = await getJobById(params.slug);
    return <div>{JSON.stringify(job)}</div>;
};

export default page;

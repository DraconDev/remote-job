import { getJobs } from "@/utils/supabase/actions";
import JobCards from "./JobCards";

type Props = {};

const JobContainer = async (props: Props) => {
    const data = await getJobs();

    // useEffect(() => {
    //     if (!data) {
    //         const cookieStore = cookies();
    //         getJobs(cookieStore)
    //             .then((jobs) => {
    //                 setData(jobs);
    //             })
    //             .catch((error) => {
    //                 console.error("Failed to fetch jobs:", error);
    //                 // Optionally, update the state to indicate an error occurred.
    //             });
    //     }
    // }, []);

    // return <JobCards data={data} />;
    return data && <JobCards data={data} />;
};

export default JobContainer;

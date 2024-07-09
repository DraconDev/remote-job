import { Database } from "@/types/supabase";

function JobCard(card: Database["public"]["Tables"]["job_post"]["Row"]) {
    return <div className="" id="">{card.apply_link}</div>;
}

export default JobCard;

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
export default async function Page() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data: job_post } = await supabase.from("job_post").select();

    return (
        <div className="py-4">
            {job_post && JSON.stringify(job_post)}
            <ul>
                {job_post?.map((post) => (
                    <li key={post.id}>{post.apply_link}</li>
                ))}
            </ul>
        </div>
    );
}

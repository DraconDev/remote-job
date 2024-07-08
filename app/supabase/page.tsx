import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
export default async function Page() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data: jobPost } = await supabase.from("jobPost").select();

    return (
        <div className="py-4">
            <ul>
                {jobPost?.map((todo) => (
                    <li key={todo.id}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

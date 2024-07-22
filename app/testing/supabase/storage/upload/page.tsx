import MyDropZone from "@/components/Dropzone/Dropzone";
import { createClient } from "@/utils/supabase/server";

import { cookies } from "next/headers";

type Props = {};

const Page = async (props: Props) => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    // download image from supabase
    // await supabase.storage
    //     .from("remoteworknexus")
    //     .upload("logos/volvo.png", "volvo.png");

    return (
        <div className="flex flex-col">
            UPload <input type="file" />
            divide
            <MyDropZone />
        </div>
    );
};

export default Page;

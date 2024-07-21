import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";

type Props = {};

const Page = async (props: Props) => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    // download image from supabase
    const {
        data: { publicUrl: url },
    } = await supabase.storage
        .from("remoteworknexus")
        .getPublicUrl("logos/volvo.png");

    console.log(url);
    return (
        <div>
            Test storege link
            <div className="">
                <Image src={url} alt="" width="200" height="200" />
            </div>
        </div>
    );
};

export default Page;

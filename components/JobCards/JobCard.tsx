import { Database } from "@/types/supabase";
import { getPublicUrl } from "@/utils/supabase/actions";
import Link from "next/link";
import Image from "next/image";

async function JobCard(card: Database["public"]["Tables"]["job_post"]["Row"]) {
    const boxes = [
        card.location,
        `$${card.salary_min}-$${card.salary_max}`,
        card.tags?.slice(0, 3),
    ].filter(
        (item) => Boolean(item) && (!Array.isArray(item) || item.length > 0)
    );
    const url = await getPublicUrl(card.logo_path ?? "");

    console.log(card);
    return (
        <Link
            className="w-full h-[110px] border-2 p-2  rounded-md border-gray-300 flex justify-between items-center gap-2"
            id=""
            href={`/job/${card.id}`}
        >
            {card.logo_path ? (
                <Image src={url} alt="" width="64" height="64" />
            ) : (
                <div className="w-16 h-16 justify-center items-center flex ">
                    <p className="text-5xl">
                        {card.company_name
                            ? card.company_name[0].toUpperCase()
                            : "J"}
                    </p>
                </div>
            )}
            <div className="flex flex-col grow">
                <div className="text-xl font-bold ">{card.job_title}</div>
                <div className="text-lg">{card.company_name}</div>
                <div className="flex w-full gap-2">
                    {boxes.map((box, index) => (
                        <div
                            key={index}
                            className="border-2 border-slate-300 rounded-lg p-1 px-2 text-sm"
                        >
                            {box}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex place-items-start justify-end h-full">
                <p className="flex shrink-0">{card.created_at.slice(0, 10)}</p>
            </div>
        </Link>
    );
}

export default JobCard;

import { Database } from "@/types/supabase";

function JobCard(card: Database["public"]["Tables"]["job_post"]["Row"]) {
    const boxes = [
        card.location,
        `$${card.salary_min}-$${card.salary_max}`,
        card.tags?.slice(0, 3),
    ].filter(
        (item) => Boolean(item) && (!Array.isArray(item) || item.length > 0)
    );
    return (
        <div
            className="w-full h-[110px] border-2 p-2  rounded-md border-gray-300 flex justify-between items-center "
            id=""
        >
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
        </div>
    );
}

export default JobCard;

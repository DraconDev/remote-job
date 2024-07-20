import { Database } from "@/types/supabase";

function JobCard(card: Database["public"]["Tables"]["job_post"]["Row"]) {
    const boxes = [
        card.location,
        `$${card.salary_min}-$${card.salary_max}`,
        card.tags?.slice(0, 3),
    ];
    return (
        <div
            className="w-full h-[100px] border-2 p-2  rounded-md border-gray-300 flex justify-between"
            id=""
        >
            <div className="flex flex-col w-full">
                <div className="text-xl font-bold ">{card.job_title}</div>
                <div className="text-lg">{card.company_name}</div>
                <div className="flex w-full gap-4">
                    {boxes.map((box, index) => (
                        <div key={index}>{box}</div>
                    ))}
                </div>
            </div>
            <div className="flex place-items-center w-[150px] justify-end">
                {card.created_at.slice(0, 10)}
            </div>
        </div>
    );
}

export default JobCard;

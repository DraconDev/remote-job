import Link from "next/link";
import Image from "next/image";
import { JobPostWithCompanies } from "@/types/custom";

function JobCard(card: JobPostWithCompanies) {
    const boxes = [
        card.location,
        `$${card.salary_min}-$${card.salary_max}`,
        card.tags?.slice(0, 3),
    ].filter(
        (item) => Boolean(item) && (!Array.isArray(item) || item.length > 0)
    );
    const url = card.companies?.company_logo_public_url || "";
    console.log(card);

    return (
        <Link
            className="w-full h-[110px]  p-2  rounded-md border-card-foreground flex justify-between items-center gap-2 bg-card"
            id=""
            href={`/job/${card.id}`}
        >
            {url ? (
                <Image src={url} alt={card.companies?.company_name || "Company Logo"} width="64" height="64" />
            ) : (
                <div className="w-16 h-16 justify-center items-center flex bg-muted rounded">
                    <p className="text-4xl text-muted-foreground">
                        {card?.companies?.company_name
                            ? card?.companies?.company_name[0].toUpperCase()
                            : "J"}
                    </p>
                </div>
            )}
            <div className="flex flex-col grow">
                <div className="text-xl font-bold ">{card.job_title}</div>
                <div className="text-lg">{card?.companies?.company_name}</div>
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
                {/* current date - created at  */}
                {(() => {
                    const now = Date.now();
                    const createdAt = new Date(card.created_at).getTime();
                    const diffInMs = now - createdAt;
                    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

                    if (diffInDays >= 1) {
                        return `${Math.floor(diffInDays)} days ago`;
                    } else {
                        const diffInHours = diffInMs / (1000 * 60 * 60);
                        return `${Math.floor(diffInHours)} hours ago`;
                    }
                })()}
                {/* <div className=""> asd </div>
                <p className="flex shrink-0">{card.created_at.slice(0, 10)}</p> */}
            </div>
        </Link>
    );
}

export default JobCard;

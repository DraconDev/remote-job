"use client";

import JobCard from "@/components/JobCards/JobCard";
import JobCards from "@/components/JobCards/JobCards";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className=" w-full ">
            hello
            <Button
                variant="default"
                size="default"
            >
                Elemen
            </Button>
            <JobCard />
            <JobCards />
        </main>
    );
}

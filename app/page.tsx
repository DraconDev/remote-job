"use client";

import JobCards from "@/components/JobCards/JobCards";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className=" w-full p-2">
            hello
            <Button variant="default" size="default">
                Elemen
            </Button>
            {/* <JobCard /> */}
            <JobCards />
        </main>
    );
}

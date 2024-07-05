"use client";

import JobCards from "@/components/JobCards/JobCards";
import { Button } from "@/components/ui/button";
import Description from "./Quill/Description";

export default function Home() {
    return (
        <main className=" w-full p-2">
            
            <Button variant="default" size="default">
                Elemen
            </Button>
            {/* <JobCard /> */}
            <JobCards />
        </main>
    );
}

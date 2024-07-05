"use client";

import JobCards from "@/components/JobCards/JobCards";
import { Tiptap } from "@/components/TipTap/Description";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className=" w-full p-2">
            <Tiptap />
            <Button variant="default" size="default">
                Elemen
            </Button>
            {/* <JobCard /> */}
            <JobCards />
        </main>
    );
}

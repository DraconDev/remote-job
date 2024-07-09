"use client";

import JobContainer from "@/components/JobCards/JobContainer";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className=" w-full p-2">
            <p className="">hey</p>
            <Button variant="default" size="default">
                Elemen
            </Button>
            {/* <JobCard /> */}
            <JobContainer />
            {/* <JobCards /> */}
        </main>
    );
}

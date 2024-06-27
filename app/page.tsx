"use client";
import BgHomepage from "@/components/BgHomepage";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="bg-red-700">
            hello
            <BgHomepage />
            <Button
                variant="default"
                size="default"
            >
                Elemental
            </Button>
        </main>
    );
}

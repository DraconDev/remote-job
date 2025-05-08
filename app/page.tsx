import JobContainer from "@/components/JobCards/JobContainer";
import SearchBox from "@/components/SearchBox/SearchBox";
import BgHomepage from "@/components/BgHomepage";

export default function Home() {
    return (
        <main className="flex flex-col w-full gap-3">
            <BgHomepage>
                <div className="max-w-4xl mx-auto w-full p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-center mb-6">Remote Jobs</h1>
                    <div className="mb-6">
                        <SearchBox />
                    </div>
                    <JobContainer />
                </div>
            </BgHomepage>
        </main>
    );
}

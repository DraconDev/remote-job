import JobContainer from "@/components/JobCards/JobContainer";
import SearchBox from "@/components/SearchBox/SearchBox";

export default function Home() {
    return (
        <main className=" w-full p-2">
            <SearchBox />
            <JobContainer />
        </main>
    );
}

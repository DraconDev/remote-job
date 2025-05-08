import JobContainer from "@/components/JobCards/JobContainer";
import SearchBox from "@/components/SearchBox/SearchBox";

export default function Home() {
  return (
    <main className="flex flex-col w-full gap-3">
      <SearchBox />
      <JobContainer />
    </main>
  );
}

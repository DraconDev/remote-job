import JobContainer from "@/components/JobCards/JobContainer";
import SearchBox from "@/components/SearchBox/SearchBox";

"use client";
import JobContainer from "@/components/JobCards/JobContainer";
import SearchBox from "@/components/SearchBox/SearchBox";
import { getJobs } from "@/utils/supabase/actions";
import { useEffect, useState } from "react";

export default function Home() {
  const [jobListings, setJobListings] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const initialJobs = await getJobs();
      setJobListings(initialJobs);
    };
    fetchJobs();
  }, []);

  const handleSearchResults = (results: any[] | null) => {
    setJobListings(results);
  };

  return (
    <main className="flex flex-col w-full gap-3 p-4">
      <SearchBox onSearchResults={handleSearchResults} />
      <JobContainer data={jobListings} />
    </main>
  );
}

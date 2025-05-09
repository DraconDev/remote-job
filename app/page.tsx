"use client";
import JobContainer from "@/components/JobCards/JobContainer";
// import SearchBox from "@/components/SearchBox/SearchBox"; // Temporarily remove SearchBox
import { getJobs } from "@/utils/supabase/actions";
import { useEffect, useState } from "react";

export default function Home() {
  const [jobListings, setJobListings] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Home component mounted. Fetching initial jobs...");
    const fetchJobs = async () => {
      try {
        const initialJobs = await getJobs();
        console.log("Initial jobs fetched:", initialJobs);
        setJobListings(initialJobs);
      } catch (err) {
        console.error("Error fetching initial jobs:", err);
        setError("Failed to load job listings.");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Temporarily remove handleSearchResults
  // const handleSearchResults = (results: any[] | null) => {
  //   setJobListings(results);
  // };

  console.log("Job listings state in Home component:", jobListings);

  return (
    <main className="flex flex-col w-full gap-3 p-4">
      {/* <SearchBox onSearchResults={handleSearchResults} /> */}
      {loading && <p>Loading jobs...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <>
          {jobListings && jobListings.length > 0 && (
            <JobContainer data={jobListings} />
          )}
          {(!jobListings || jobListings.length === 0) && (
            <p>No job listings found.</p>
          )}
        </>
      )}
    </main>
  );
}

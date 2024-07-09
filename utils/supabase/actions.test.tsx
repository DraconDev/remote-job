// // // test for getting all jobs
import { expect, test } from "vitest";
import { getJobs } from "./actions";

test("getJobs", async () => {
    const jobs = await getJobs();
    expect(jobs).toBeTruthy();
});

// // // test for getting all jobs
import { expect, test } from "vitest";
import { createJobPost, getJobs } from "./actions";

test("getJobs", async () => {
    const jobs = await getJobs();
    expect(jobs).toBeTruthy();
});

test("addJob", async () => {
    const fakeFormData = new FormData();
    fakeFormData.append("salary_min", "100000");
    fakeFormData.append("salary_max", "200000");
    fakeFormData.append("description", "this is a test job");
    fakeFormData.append("location", "test location");
    fakeFormData.append("company_name", "test company");
    fakeFormData.append("job_title", "test job title");
    fakeFormData.append("apply_link", "test.com");
    // fakeFormData.append("logo", new File([], "logo.png"));
    fakeFormData.append("company_email", "test@test.com");

    const result = await createJobPost(fakeFormData);

    expect(result).toBeTruthy();
});

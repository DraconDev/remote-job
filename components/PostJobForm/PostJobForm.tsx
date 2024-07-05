import { Database } from "@/types/supabase";
import { Button } from "../ui/button";

type Props = {};

const PostJobForm = (props: Props) => {
    async function createInvoice(formData: FormData) {
        "use server";

        const rawFormData: Database["public"]["Tables"]["job_post"]["Insert"] =
            {
                salary_min: formData.get("salary_min")
                    ? parseInt(formData.get("salary_min") as string)
                    : null,
                salary_max: formData.get("salary_max")
                    ? parseInt(formData.get("salary_max") as string)
                    : null,
                tags: formData.get("tags")
                    ? JSON.parse(formData.get("tags") as string)
                    : [],
                description: (formData.get("description") as string) || "",
                location: (formData.get("location") as string) || "",
                company_name: (formData.get("company_name") as string) || "",
                job_title: (formData.get("job_title") as string) || "",
            };
    }

    return (
        <form action={createInvoice}>
            <div className="">
                <p className="">Job Title</p>
                <input type="text" name="job_title" placeholder="Job Title" />
            </div>
            <div className="">
                <p className="">Company Name</p>
                <input
                    type="text"
                    name="company_name"
                    placeholder="Company Name"
                />
            </div>
            <div className="">
                <p className="">Location</p>
                <input type="text" name="location" placeholder="Location" />
            </div>
            <div className="">
                <p className="">Salary Min</p>
                <input
                    type="number"
                    name="salary_min"
                    placeholder="Salary Min"
                />
            </div>
            <div className="">
                <p className="">Salary Max</p>
                <input
                    type="number"
                    name="salary_max"
                    placeholder="Salary Max"
                />
            </div>
            <div className="">
                <p className="">Tags</p>
                <input type="text" name="tags" placeholder="Tags" />
            </div>
            <div className="">
                <p className="">Description</p>
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                />
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default PostJobForm;

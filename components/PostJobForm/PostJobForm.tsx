import { Database } from "@/types/supabase";
import { Button } from "../ui/button";
import Input from "../ui/Input";

type Props = {};

const PostJobForm = (props: Props) => {
    async function createInvoice(formData: FormData) {
        "use server";

        const tag1 = JSON.parse(formData.get("tag1") as string) || "";
        const tag2 = JSON.parse(formData.get("tag2") as string) || "";
        const tag3 = JSON.parse(formData.get("tag3") as string) || "";
        const tag4 = JSON.parse(formData.get("tag4") as string) || "";
        const tag5 = JSON.parse(formData.get("tag5") as string) || "";

        const rawFormData: Database["public"]["Tables"]["job_post"]["Insert"] =
            {
                salary_min: formData.get("salary_min")
                    ? parseInt(formData.get("salary_min") as string)
                    : null,
                salary_max: formData.get("salary_max")
                    ? parseInt(formData.get("salary_max") as string)
                    : null,
                tags:
                    [
                        tag1 && tag1,
                        tag2 && tag2,
                        tag3 && tag3,
                        tag4 && tag4,
                        tag5 && tag5,
                    ] || [],
                description: (formData.get("description") as string) || "",
                location: (formData.get("location") as string) || "",
                company_name: (formData.get("company_name") as string) || "",
                job_title: (formData.get("job_title") as string) || "",
            };
    }

    // add outline when active
    const buttonStyles = "font-bold py-1 px-2 ";
    const paraghraphStyles = "font-bold text-xl border-b-2 border-gray-300";
    return (
        <form
            action={createInvoice}
            className="w-full  flex justify-center flex-col gap-3 pt-1 border-2 border-gray-300 rounded-lg p-1"
        >
            <div className={buttonStyles}>
                <p className={paraghraphStyles}>Job Title</p>
                <Input type="text" name="job_title" placeholder="Job Title" />
            </div>
            <div className={buttonStyles}>
                <p className={paraghraphStyles}>Company Name</p>
                <Input
                    type="text"
                    name="company_name"
                    placeholder="Company Name"
                />
            </div>
            <div className={buttonStyles}>
                <p className={paraghraphStyles}>Location</p>
                <Input type="text" name="location" placeholder="Location" />
            </div>
            <div className={buttonStyles}>
                <p className={paraghraphStyles}>Salary Min</p>
                <Input
                    type="number"
                    name="salary_min"
                    placeholder="Salary Min"
                />
            </div>
            <div className={buttonStyles}>
                <p className={paraghraphStyles}>Salary Max</p>
                <Input
                    type="number"
                    name="salary_max"
                    placeholder="Salary Max"
                />
            </div>
            <div className={`${buttonStyles} flex flex-col gap-2`}>
                <p className={paraghraphStyles}>Tags (Max 5)</p>
                <Input type="text" name="tag1" placeholder="Tag" />
                <Input type="text" name="tag2" placeholder="Tag" />
                <Input type="text" name="tag3" placeholder="Tag" />
                <Input type="text" name="tag4" placeholder="Tag" />
                <Input type="text" name="tag5" placeholder="Tag" />
            </div>
            <div className={buttonStyles}>
                <p className={paraghraphStyles}>Description</p>
                <textarea
                    name="description"
                    placeholder="Description"
                    className="p-1 w-full"
                />
            </div>
            <div className="flex justify-end">
                <Button
                    type="submit"
                    variant="default"
                    className="max-w-[300px] align"
                >
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default PostJobForm;

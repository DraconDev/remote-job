import { Button } from "../ui/button";
import Input from "../ui/Input";
import Description from "@/app/Quill/Description";
import { useState } from "react";

type Props = {};

const PostJobForm = (props: Props) => {
    const [content, setContent] = useState();
    async function createInvoice(formData: FormData) {
        "use server";

        const tag1 = JSON.parse(formData.get("tag1") as string) || "";
        const tag2 = JSON.parse(formData.get("tag2") as string) || "";
        const tag3 = JSON.parse(formData.get("tag3") as string) || "";
        const tag4 = JSON.parse(formData.get("tag4") as string) || "";
        const tag5 = JSON.parse(formData.get("tag5") as string) || "";
    }

    // add outline when active
    const buttonStyles = "font-bold py-1 px-2 ";
    const paraghraphStyles = "font-bold text-xl border-b-2 border-gray-300";
    return (
        <form
            action={createInvoice}
            className="w-full  flex justify-center flex-col gap-3 pt-1 border-2 border-gray-300 rounded-lg p-1 w-max-[700px] m-auto"
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

            <Description content={content} setContent={setContent} />
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

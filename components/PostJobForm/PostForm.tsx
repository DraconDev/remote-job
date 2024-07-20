"use client";

import { useState } from "react";

import Description from "@/components/Quill/Description";
import FormElem from "./FormElem";
import PostJobSection from "./PostJobSection";
import { Database } from "@/types/supabase";
import { Button } from "../ui/button";
import { createJobPost } from "@/utils/supabase/actions";

type Props = {};

type FormDataType = {
    [key: string]: {
        value: string;
        type: string;
        placeholder: string;
        extra?: string;
    };
};

const PostForm = (props: Props) => {
    const [formData, setFormData] = useState<FormDataType>({
        job_title: { value: "", type: "text", placeholder: "Job Title" },
        company_name: { value: "", type: "text", placeholder: "Company Name" },
        apply_link: { value: "", type: "text", placeholder: "Apply Link" },
        location: { value: "", type: "text", placeholder: "Location" },
        salary_min: { value: "", type: "number", placeholder: "Salary Min" },
        salary_max: { value: "", type: "number", placeholder: "Salary Max" },
    });

    const [tags, setTags] = useState<FormDataType>({
        tag1: { value: "", type: "text", placeholder: "Tag 1" },
        tag2: { value: "", type: "text", placeholder: "Tag 2" },
        tag3: { value: "", type: "text", placeholder: "Tag 3" },
        tag4: { value: "", type: "text", placeholder: "Tag 4" },
        tag5: { value: "", type: "text", placeholder: "Tag 5" },
    });

    const [description, setDescription] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(formData, tags, description);

        const jobPost = {
            job_title: formData.job_title.value,
            company_name: formData.company_name.value,
            apply_link: formData.apply_link.value,
            location: formData.location.value,
            salary_min: parseInt(formData.salary_min.value),
            salary_max: parseInt(formData.salary_max.value),
            tags: Object.values(tags)
                .filter((tag) => tag.value !== "")
                .map((tag) => tag.value),
            description,
        } as Database["public"]["Tables"]["job_post"]["Insert"];

        try {
            createJobPost(jobPost);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full  flex justify-center flex-col gap-3 pt-1 border-2 border-gray-300 rounded-lg p-1 w-max-[700px] m-auto"
        >
            {Object.keys(formData).map((key) => (
                <PostJobSection key={key} title={formData[key].placeholder}>
                    <FormElem
                        key={key}
                        type={formData[key].type}
                        name={key}
                        placeholder={formData[key].placeholder}
                        value={formData[key].value || ""}
                        onChange={(e) => {
                            setFormData((prev) => ({
                                ...prev,
                                [key]: {
                                    ...prev[key],
                                    value: e.target.value,
                                },
                            }));
                        }}
                    />
                </PostJobSection>
            ))}
            <PostJobSection title="Tags (Max 5)">
                {Object.keys(tags).map((key) => (
                    <FormElem
                        key={key}
                        type={tags[key].type}
                        name={key}
                        placeholder={tags[key].placeholder}
                        value={tags[key].value || ""}
                        onChange={(e) => {
                            setTags((prev) => ({
                                ...prev,
                                [key]: {
                                    ...prev[key],
                                    value: e.target.value,
                                },
                            }));
                        }}
                    />
                ))}
            </PostJobSection>

            <PostJobSection title="Description" />
            <Description content={description} setContent={setDescription} />
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

export default PostForm;

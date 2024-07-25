"use client";
import { z } from "zod";

import { useState } from "react";

import Description from "@/components/Quill/Description";
import FormElem from "./FormElem";
import PostJobSection from "./PostJobSection";
import { Button } from "../ui/button";
import MyDropZone from "../Dropzone/Dropzone";
import { createJobPost } from "@/utils/supabase/actions";

type Props = {};

const schema = z.object({
    job_title: z.object({
        value: z.string().min(3, "Minimum 3 characters"),
        type: z.string().default("text"),
        placeholder: z.string().default("Job Title"),
    }),
    company_name: z.object({
        value: z.string().min(3, "Minimum 3 characters"),
        type: z.string().default("text"),
        placeholder: z.string().default("Company Name"),
    }),
    apply_link: z.object({
        value: z
            .string()
            .email("Must be a valid email")
            .min(3, "Minimum 3 characters"),
        type: z.string().default("text"),
        placeholder: z.string().default("Application Link or Email"),
    }),
    location: z.object({
        value: z.string().min(3, "Minimum 3 characters"),
        type: z.string().default("text"),
        placeholder: z.string().default("Location"),
    }),
    salary_min: z.object({
        value: z.string().min(3, "Minimum 3 characters"),
        type: z.string().default("number"),
        placeholder: z.string().default("Salary Min"),
    }),
    salary_max: z.object({
        value: z.string().min(3, "Minimum 3 characters"),
        type: z.string().default("number"),
        placeholder: z.string().default("Salary Max"),
    }),
});

type FormDataType = z.infer<typeof schema>;
// type FormDataType = keyof typeof schema;

const PostForm = (props: Props) => {
    let [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [formData, setFormData] = useState<FormDataType>({
        job_title: { value: "", type: "text", placeholder: "Job Title" },
        company_name: { value: "", type: "text", placeholder: "Company Name" },
        apply_link: {
            value: "",
            type: "email",
            placeholder: "Application Link or Email",
        },
        location: { value: "", type: "text", placeholder: "Location" },
        salary_min: {
            value: "",
            type: "number",
            placeholder: "Salary Min in USD",
        },
        salary_max: {
            value: "",
            type: "number",
            placeholder: "Salary Max in USD",
        },
    });

    const tagSchema = z.object({
        tag1: z.object({
            value: z.string().min(0, "Required"),
            type: z.string().default("text"),
            placeholder: z.string().default("Tag 1"),
        }),

        tag2: z.object({
            value: z.string().min(0, "Required"),
            type: z.string().default("text"),
            placeholder: z.string().default("Tag 2"),
        }),

        tag3: z.object({
            value: z.string().min(0, "Required"),
            type: z.string().default("text"),
            placeholder: z.string().default("Tag 3"),
        }),

        tag4: z.object({
            value: z.string().min(0, "Required"),
            type: z.string().default("text"),
            placeholder: z.string().default("Tag 4"),
        }),

        tag5: z.object({
            value: z.string().min(0, "Required"),
            type: z.string().default("text"),
            placeholder: z.string().default("Tag 5"),
        }),
    });

    type TagSchema = z.infer<typeof tagSchema>;

    const [tags, setTags] = useState<TagSchema>({
        tag1: { value: "", type: "text", placeholder: "Tag 1" },
        tag2: { value: "", type: "text", placeholder: "Tag 2" },
        tag3: { value: "", type: "text", placeholder: "Tag 3" },
        tag4: { value: "", type: "text", placeholder: "Tag 4" },
        tag5: { value: "", type: "text", placeholder: "Tag 5" },
    });

    const handleSubmit = async (formData: FormData) => {
        // parse schema

        try {
            const validatedData = schema.parse(formData);
        } catch (error) {
            if (error instanceof z.ZodError) {
                // Handle Zod validation errors
                console.log("Validation failed:", error.errors);
                return;
            }
        }

        if (selectedFile) {
            formData.append("logo", selectedFile);
        }
        await createJobPost(formData);
    };

    return (
        <form
            action={handleSubmit}
            className="w-full  flex justify-center flex-col gap-3 pt-1 border-2 border-gray-300 rounded-lg p-1 w-max-[700px] m-auto"
        >
            {Object.keys(formData).map((key) => (
                <PostJobSection
                    key={key}
                    title={formData[key as keyof typeof formData].placeholder}
                >
                    <FormElem
                        key={key}
                        type={formData[key as keyof typeof formData].type}
                        required={true}
                        name={key}
                        placeholder={
                            formData[key as keyof typeof formData].placeholder
                        }
                        value={
                            formData[key as keyof typeof formData].value || ""
                        }
                        onChange={(e) => {
                            setFormData((prev) => ({
                                ...prev,
                                [key]: {
                                    ...prev[key as keyof typeof prev],
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
                        type={tags[key as keyof typeof tags].type}
                        name={key}
                        placeholder={tags[key as keyof typeof tags].placeholder}
                        value={tags[key as keyof typeof tags].value || ""}
                        onChange={(e) => {
                            setTags((prev) => ({
                                ...prev,
                                [key]: {
                                    ...prev[key as keyof typeof tags],
                                    value: e.target.value,
                                },
                            }));
                        }}
                    />
                ))}
            </PostJobSection>
            <PostJobSection title="Description" />
            <Description />

            <MyDropZone setSelectedFile={setSelectedFile} />
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

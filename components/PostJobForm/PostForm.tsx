"use client";
import { z } from "zod";
import { useState } from "react";
import Description from "@/components/Quill/Description";
import FormElem from "./FormElem";
import PostJobSection from "./PostJobSection";
import { Button } from "../ui/button";
import { createJobPost } from "@/utils/supabase/actions";
import FormCompanySection from "./FormCompanySection";
import PostJobDropDowns from "./PostJobDropDowns";
import CountriesDropAndMultiSelect from "./CountriesDropAndMultiSelect";
import { experiences, jobTypes } from "@/consts/info";

type Props = {};

const schema = z.object({
    job_title: z.object({
        value: z.string().min(3, "Minimum 3 characters").optional(),
        type: z.string().default("text"),
        placeholder: z.string().default("Job Title"),
        required: z.boolean().default(true),
    }),
    company_name: z.object({
        value: z.string().min(3, "Minimum 3 characters").optional(),
        type: z.string().default("text"),
        placeholder: z.string().default("Company Name"),
        required: z.boolean().default(true),
    }),
    apply_link: z.object({
        value: z.string().min(3, "Minimum 3 characters").optional(),
        type: z.string().default("text"),
        placeholder: z.string().default("Application Link or Email"),
        required: z.boolean().default(true),
    }),
    // location: z.object({
    //     value: z.string().min(3, "Minimum 3 characters").optional(),
    //     type: z.string().default("text"),
    //     placeholder: z.string().default("Location"),
    //     required: z.boolean().default(true),
    // }),
    salary_min: z.object({
        value: z.string().min(0, "Minimum 3 characters").optional(),
        type: z.string().default("number"),
        placeholder: z.string().default("Salary Min"),
        required: z.boolean().default(false),
    }),
    salary_max: z.object({
        value: z.string().min(0, "Minimum 3 characters").optional(),
        type: z.string().default("number"),
        placeholder: z.string().default("Salary Max"),
        required: z.boolean().default(false),
    }),
});

type FormDataType = z.infer<typeof schema>;

const PostForm = (props: Props) => {
    const [formData, setFormData] = useState<FormDataType>({
        job_title: {
            value: "",
            type: "text",
            placeholder: "Job Title",
            required: true,
        },
        company_name: {
            value: "",
            type: "text",
            placeholder: "Company Name",
            required: true,
        },
        apply_link: {
            value: "",
            type: "text",
            placeholder: "Application Link or Email",
            required: true,
        },
        // location: {
        //     value: "",
        //     type: "text",
        //     placeholder: "Location",
        //     required: true,
        // },
        salary_min: {
            value: "",
            type: "number",
            placeholder: "Salary Min",
            required: false,
        },
        salary_max: {
            value: "",
            type: "number",
            placeholder: "Salary Max",
            required: false,
        },
    });

    const [tags, setTags] = useState({
        tag1: { value: "", type: "text", placeholder: "Tag 1" },
        tag2: { value: "", type: "text", placeholder: "Tag 2" },
        tag3: { value: "", type: "text", placeholder: "Tag 3" },
        tag4: { value: "", type: "text", placeholder: "Tag 4" },
        tag5: { value: "", type: "text", placeholder: "Tag 5" },
    });

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (selectedFile) {
            formData.append("logo", selectedFile);
        }
        if (selectedCountries.length > 0) {
            formData.append("countries", JSON.stringify(selectedCountries));
        }
        formData.append("experience", experience);
        formData.append("job_type", jobType);
        await createJobPost(formData);
    };

    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

    const [experience, setExperience] = useState(experiences[4]);
    const [jobType, setJobType] = useState(jobTypes[1]);

    const menus = [
        {
            name: "experiences",
            value: experiences.slice(1),
            select: experience,
            setSelect: setExperience,
            title: "Experience",
        },
        {
            name: "jobTypes",
            value: jobTypes.slice(1),
            select: jobType,
            setSelect: setJobType,
            title: "Job type",
        },
    ];

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center flex-col gap-6 p-6 border-2 border-gray-300 rounded-lg max-w-[700px] m-auto"
        >
            <h1 className="text-3xl w-full justify-center text-center">
                Job details
            </h1>
            {Object.keys(formData).map((key) => (
                <PostJobSection
                    key={key}
                    title={formData[key as keyof typeof formData].placeholder}
                >
                    <FormElem
                        key={key}
                        type={formData[key as keyof typeof formData].type}
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
                        required={
                            formData[key as keyof typeof formData].required
                        }
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
            <PostJobSection title="Location" />
            <CountriesDropAndMultiSelect
                selected={selectedCountries}
                setSelected={setSelectedCountries}
            />
            <PostJobDropDowns menus={menus} />
            <PostJobSection title="Description" />

            <Description />
            <FormCompanySection setSelectedFile={setSelectedFile} />

            <div className="flex justify-end mt-6">
                <Button
                    type="submit"
                    variant="default"
                    className="max-w-[300px]"
                >
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default PostForm;

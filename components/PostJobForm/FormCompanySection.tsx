import MyDropZone from "../Dropzone/Dropzone";
import { useState } from "react";
import FormElem from "./FormElem";
import PostJobSection from "./PostJobSection";

type Props = {
    setSelectedFile: (file: File | null) => void;
};

const FormCompanySection = ({ setSelectedFile }: Props) => {
    const [company, setCompany] = useState({
        name: {
            value: "",
            type: "text",
            placeholder: "Name",
            required: true,
        },
        email: {
            value: "",
            type: "text",
            placeholder: "Email",
            required: true,
        },
        website: {
            value: "",
            type: "text",
            placeholder: "Website",
            required: false,
        },
        description: {
            value: "",
            type: "text",
            placeholder: "Description",
            required: false,
        },
        billing_email: {
            value: "",
            type: "text",
            placeholder: "Billing Email",
            required: false,
        },
    });

    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl w-full justify-center text-center">
                Company
            </h1>
            {Object.entries(company).map(([key, value]) => (
                <PostJobSection title={value.placeholder} key={key}>
                    <FormElem
                        key={key}
                        name={key}
                        type={value.type}
                        placeholder={value.placeholder}
                        value={value.value}
                        required={value.required}
                        onChange={(e) => {
                            setCompany((prev) => ({
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
            <div className="w-full flex justify-center">
                <MyDropZone setSelectedFile={setSelectedFile} />
            </div>
        </div>
    );
};

export default FormCompanySection;

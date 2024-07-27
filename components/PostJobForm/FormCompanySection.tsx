import { Database } from "@/types/supabase";
import MyDropZone from "../Dropzone/Dropzone";

type Props = {
    setSelectedFile: (file: File | null) => void;
};

type PartialCompany = Partial<Database["public"]["Tables"]["companies"]["Row"]>;

const company: PartialCompany = {
    name: "Name",
    website: "Website",
    email: "Email",
    description: "Description",
    billing_email: "Billing Email",
};

const FormCompanySection = ({ setSelectedFile }: Props) => {
    return (
        <div>
            <h1 className="text-xl">Company</h1>
            {Object.entries(company).map(([key, value]) => (
                <input
                    key={key}
                    name={key}
                    type="text"
                    placeholder={value ? value.toString() : ""}
                    // value={(company as any)[key]}
                    // onChange={(e) => {
                    //     (company as any)[key] = e.target.value;
                    // }}
                />
            ))}
            <MyDropZone setSelectedFile={setSelectedFile} />
        </div>
    );
};

export default FormCompanySection;

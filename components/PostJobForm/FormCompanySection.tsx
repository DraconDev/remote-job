import MyDropZone from "../Dropzone/Dropzone";

type Props = {
    setSelectedFile: (file: File | null) => void;
};

type company_field = {
    name: string;
    email: string;
    website?: string;
    description?: string;
    logo_url?: string;
    billing_email?: string;
};

const company: company_field = {
    name: "",
    website: "",
    email: "",
    description: "",
    logo_url: "",
    billing_email: "",
};

const FormCompanySection = ({ setSelectedFile }: Props) => {
    return (
        <div>
            <h1 className="text-xl">Company</h1>
            <MyDropZone setSelectedFile={setSelectedFile} />
        </div>
    );
};

export default FormCompanySection;

import Input from "../ui/Input";

type Props = {
    children?: React.ReactNode;
    type: string;
    name: string;
    placeholder: string;
};

const FormElem = (props: Props) => {

    return (
        <>

            <Input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
            />
        </>
    );
};

export default FormElem;

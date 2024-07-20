type Props = {
    children?: React.ReactNode;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormElem = (props: Props) => {
    return (
        <>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </>
    );
};

export default FormElem;

"use client";

type Props = {
    children?: React.ReactNode;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    required?: boolean;
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
                className={"p-1"}
                minLength={3}
            />
            {props.required && props.value.length < 5 && (
                <p className="text-sm text-red-500 p-1">Minimum 5 characters</p>
            )}
        </>
    );
};

export default FormElem;

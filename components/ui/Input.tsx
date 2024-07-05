type Props = {
    children?: React.ReactNode;
    type?: string;
    name?: string;
    placeholder?: string;
};

const Input = ({ children, ...rest }: Props) => {
    return (
        <input className="p-1" {...rest}>
            {children}
        </input>
    );
};

export default Input;

type Props = {
    extra?: string;
    title: string;
    children?: React.ReactNode;
};

const PostJobSection = (props: Props) => {
    const buttonStyles = "font-bold py-1 px-2 ";
    const paragraphStyles = "font-bold text-xl border-b-2 border-accent";
    return (
        <div className={`${buttonStyles} flex flex-col gap-2`}>
            <p className={paragraphStyles}>{props.title}</p>
            {props?.children}
        </div>
    );
};

export default PostJobSection;

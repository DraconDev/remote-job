type Props = {
    extra?: string;
    title: string;
    children?: React.ReactNode;
};

const PostJobSection = (props: Props) => {
    const buttonStyles = "p-1 font-bold";
    const paragraphStyles = "font-bold text-xl border-b-2 border-accent";
    return (
        <div className={`${buttonStyles} flex flex-col gap-3`}>
            <p className={paragraphStyles}>{props.title}</p>
            {props?.children}
        </div>
    );
};

export default PostJobSection;

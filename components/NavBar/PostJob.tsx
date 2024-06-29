import Link from "next/link";

type Props = {
    href: string;
    children?: React.ReactNode;
};

const PostJob = (props: Props) => {
    return (
        <Link
            href={props.href}
            className="text-white text-xl px-2 p-1 bg-accent font-bold rounded-md"
        >
            {props?.children}
        </Link>
    );
};

export default PostJob;

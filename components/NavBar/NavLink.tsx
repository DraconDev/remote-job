import Link from "next/link";

type Props = {
    href: string;
    children?: React.ReactNode;
    add?: string;
};

const NavLink = (props: Props) => {
    return (
        <Link
            href={props.href}
            className={`text-white text-xl px-2 p-1 font-bold rounded-md ${props.add}`}
        >
            {props?.children}
        </Link>
    );
};

export default NavLink;

import Link from "next/link";

type Props = {
    href: string;
    children?: React.ReactNode;
};

const NavLink = (props: Props) => {
    return (
        <Link
            href={props.href}
            className="text-white text-xl"
        >
            {props?.children}
        </Link>
    );
};

export default NavLink;

import { Link } from "lucide-react";

type Props = {
    href: string;
    children?: React.ReactNode;
};

const NavLink = (props: Props) => {
    return (
        <Link
            href={props.href}
            className="text-white"
        >
            {props?.children}
        </Link>
    );
};

export default NavLink;

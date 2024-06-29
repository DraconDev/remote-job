"use client";

import Link from "next/link";
import NavLink from "./PostJob";

type Props = {};

const NavMenu = (props: Props) => {
    return (
        <div className="py-3 bg-primary z-50  flex justify-center">
            <div className="container justify-between flex px-3 ">
                <Link href="/">RWN</Link>
                <NavLink href="/">Post a job $299</NavLink>
            </div>
        </div>
    );
};

export default NavMenu;

"use client";

import Link from "next/link";
import NavLink from "./NavLink";

type Props = {};

const NavMenu = (props: Props) => {
    return (
        <div className="p-3 bg-primary z-50  flex justify-center">
            <div className="container justify-between flex px-3 ">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/">Login</NavLink>
            </div>
        </div>
    );
};

export default NavMenu;

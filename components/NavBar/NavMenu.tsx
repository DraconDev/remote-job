"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import PostJob from "./NavLink";
import { FaSearch } from "react-icons/fa";
type Props = {};

const NavMenu = (props: Props) => {
    return (
        <div className="py-3 bg-primary z-50  flex justify-center">
            <div className="container justify-between flex px-3 ">
                <NavLink href="/">RWN</NavLink>
                <NavLink
                    href="/"
                    add="bg-accent"
                >
                    Post a job $299
                </NavLink>

                <NavLink href="/">
                    {/* search icon */}

                    <FaSearch />
                </NavLink>
            </div>
        </div>
    );
};

export default NavMenu;

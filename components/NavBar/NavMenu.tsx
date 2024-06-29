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
                <div className=" flex gap-3 items-center">
                    <NavLink href="/">
                        {/* search icon */}

                        <FaSearch className="w-6 h-6" />
                    </NavLink>
                    <NavLink
                        href="/"
                        add="bg-accent"
                    >
                        Post a job
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;

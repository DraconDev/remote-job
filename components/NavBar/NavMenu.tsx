"use client";

import { FaSearch } from "react-icons/fa";
import CustomLink from "../ui/CustomLink";
import Link from "next/link";

type Props = {};

const NavMenu = (props: Props) => {
    const linkStyle = "text-white text-2xl p-2 font-bold rounded-md";
    return (
        <div className="sticky top-0 z-50 w-full py-3 bg-primary flex justify-center">
            <div className="container justify-between flex px-3 ">
                <Link
                    href="/"
                    className="text-primary-foreground text-2xl p-2 font-bold rounded-md"
                >
                    RWN
                </Link>
                <div className=" flex gap-3 items-center">
                    <CustomLink href="/postjob" add="bg-accent">
                        Post a job
                    </CustomLink>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;

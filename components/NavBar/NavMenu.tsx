"use client";

import { FaSearch } from "react-icons/fa";
import CustomLink from "../ui/CustomLink";

type Props = {};

const NavMenu = (props: Props) => {
    return (
        <div className="py-3 bg-primary z-50  flex justify-center">
            <div className="container justify-between flex px-3 ">
                <CustomLink href="/">RWN</CustomLink>
                <div className=" flex gap-3 items-center">
                    <CustomLink href="/">
                        <FaSearch className="w-6 h-6" />
                    </CustomLink>
                    <CustomLink href="/postjob" add="bg-accent">
                        Post a job
                    </CustomLink>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;

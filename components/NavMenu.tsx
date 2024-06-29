"use client";

import Link from "next/link";

type Props = {};

const NavMenu = (props: Props) => {
    return (
        <div className="p-2 bg-primary z-50  flex justify-center">
            <div className="container justify-between flex px-3 ">
                <Link
                    href="#"
                    className="text-white"
                >
                    Home
                </Link>
                <Link
                    href="#"
                    className="text-white"
                >
                    Home
                </Link>
            </div>
        </div>
    );
};

export default NavMenu;

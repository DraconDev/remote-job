"use client";

import Dropdown3 from "@/components/SearchBox/Dropdown3";
import { useState } from "react";

type Props = {};

const Page = (props: Props) => {
    const [item, setItem] = useState("");
    console.log(item);
    return (
        <div>
            {/* <button onClick={() => sendEmail()}>Send Email</button> */}
            {/* <Example /> */}
            <Dropdown3 />
        </div>
    );
};

export default Page;

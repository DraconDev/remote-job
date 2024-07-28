"use client";

import { useState } from "react";

type Props = {};

const Page = (props: Props) => {
    const [item, setItem] = useState("");
    console.log(item);
    return (
        <div>
            {/* <button onClick={() => sendEmail()}>Send Email</button> */}
            {/* <Example /> */}
        </div>
    );
};

export default Page;

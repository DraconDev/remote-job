"use client";

import CountriesDropAndMultiSelect from "@/components/PostJobForm/CountriesDropAndMultiSelect";
import MultiSelect from "@/components/ui/MultiSelect";
import { useState } from "react";

type Props = {};

const Page = (props: Props) => {
    const [item, setItem] = useState("");
    console.log(item);
    return (
        <div>
            {/* <button onClick={() => sendEmail()}>Send Email</button> */}
            {/* <Example /> */}
            <CountriesDropAndMultiSelect />
            <MultiSelect />
        </div>
    );
};

export default Page;

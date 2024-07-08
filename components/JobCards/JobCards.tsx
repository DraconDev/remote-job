"use client";
import { getJobs } from "@/utils/supabase/actions";
import { useEffect, useState } from "react";

type Props = {};

const JobCards = (props: Props) => {
    const [data, setData]: any = useState();

    useEffect(() => {
        !data && setData(getJobs());
    }, []);

    return <div>{data && JSON.stringify(data)}</div>;
};

export default JobCards;

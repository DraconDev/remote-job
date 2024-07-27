"use client";
import { countries, experiences, jobTypes } from "@/consts/info";
import { useState } from "react";
import Dropdowns from "./Dropdowns";
import { InputWithButton } from "./InputWithButton";
import SelectMultiple from "./SelectMultiple";
type Props = {};

const SearchBox = (props: Props) => {
    const [searchField, setSearchField] = useState("");
    const [location, setLocation] = useState(countries[0]);
    const [jobType, setJobType] = useState(jobTypes[0]);
    const [experience, setExperience] = useState(experiences[0]);

    const menus = [
        {
            list: countries,
            current: location,
            setCurrent: setLocation,
        },
        {
            list: experiences,
            current: experience,
            setCurrent: setExperience,
        },
        {
            list: jobTypes,
            current: jobType,
            setCurrent: setJobType,
        },
    ];

    return (
        <div className="w-full p-2 bg-card border rounded-lg gap-2">
            <h1>Remote Jobs</h1>
            <div className="w-full">
                <InputWithButton
                    searchField={searchField}
                    setSearchField={setSearchField}
                />
                <Dropdowns lists={menus} />
            </div>

        </div>
    );
};

export default SearchBox;

"use client";
import { countries, experiences, jobTypes } from "@/consts/info";
import { useState } from "react";
import Dropdowns from "./Dropdowns";

type Props = {};

const SearchBox = (props: Props) => {
    const [title, setTitle] = useState("");
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
        <div className="w-full px-3 py-1">
            <h1>Remote Jobs</h1>
            <div className="w-full">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="title">Title or Skill</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                </div>
                <Dropdowns lists={menus} />
            </div>
        </div>
    );
};

export default SearchBox;

"use client";
import { countries, experiences, jobTypes } from "@/consts/info";
import { useState } from "react";
import Dropdowns from "./Dropdowns";
import { InputWithButton } from "./InputWithButton";
import { searchJobs } from "@/utils/supabase/actions";
import { searchType } from "@/types/custom";

type Props = {};

const SearchBox = (props: Props) => {
    const [searchField, setSearchField] = useState("");
    const [location, setLocation] = useState(countries[0]);
    const [jobType, setJobType] = useState(jobTypes[0]);
    const [experience, setExperience] = useState(experiences[0]);
    const [salary, setSalary] = useState(0);

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

    const handleSearch = () => {};

    return (
        <form
            action={() => {
                if (searchField.length < 3) {
                    return;
                }
                const search: searchType = {
                    searchField,
                };
                if (location != countries[0]) {
                    search.location = location;
                }
                if (jobType != jobTypes[0]) {
                    search.jobType = jobType;
                }
                if (experience != experiences[0]) {
                    search.experience = experience;
                }
                if (salary > 0) {
                    search.salary = salary;
                }
                searchJobs(search);
            }}
        >
            <div className="w-full p-2 bg-card border rounded-lg gap-2">
                <h1>Remote Jobs</h1>
                <div className="w-full">
                    <InputWithButton
                        searchField={searchField}
                        setSearchField={setSearchField}
                    />
                    <Dropdowns
                        lists={menus}
                        salary={salary}
                        setSalary={setSalary}
                    />
                </div>
            </div>
        </form>
    );
};

export default SearchBox;

"use client";
import { countries } from "@/consts/info";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { MdCancel } from "react-icons/md";

type Props = {
    selected: string[];
    setSelected: (value: string[]) => void;
};

const CountriesDropAndMultiSelect = ({ selected, setSelected }: Props) => {
    const [value, setValue] = useState<string>("");

    const menus = [
        {
            name: "countries",
            value: countries,
        },
    ];

    const onValueChange = (value: string) => {
        setValue(value);
        setSelected([...selected, value]);
        console.log("selected", selected, value);
    };

    return (
        <div className="flex gap-2 flex-col">
            <div className="flex gap-2 flex-wrap">
                {selected.map((item) => (
                    <button
                        key={item}
                        className="px-3 py-1 bg-destructive rounded-full text-destructive-foreground text-sm flex items-center gap-1"
                        onClick={() =>
                            setSelected(selected.filter((i) => i !== item))
                        }
                    >
                        <div className="flex gap-1 items-center justify-center">
                            {item} <MdCancel className="w-6 h-6" />{" "}
                        </div>
                    </button>
                ))}
            </div>
            <div className="">
                {menus.map((menu) => (
                    <Select
                        key={menu.name}
                        value={value}
                        onValueChange={onValueChange}
                    >
                        <SelectTrigger className="w-[180px] p-4">
                            <SelectValue placeholder={menu.name} />
                        </SelectTrigger>
                        <SelectContent>
                            {menu.value.map((item) => (
                                <SelectItem key={item} value={item}>
                                    {item}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                ))}
            </div>
        </div>
    );
};

export default CountriesDropAndMultiSelect;

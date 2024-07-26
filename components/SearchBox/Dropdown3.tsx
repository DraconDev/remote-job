import { countries } from "@/consts/info";
import { Select, SelectItem } from "@nextui-org/react";

export default function Dropdown3() {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Select label="Select an animal" className="max-w-xs">
                {countries.map((country) => (
                    <SelectItem key={country}>{country}</SelectItem>
                ))}
            </Select>
            <Select
                label="Favorite country"
                placeholder="Select an country"
                className="max-w-xs"
            >
                {countries.map((country) => (
                    <SelectItem key={country}>{country}</SelectItem>
                ))}
            </Select>
        </div>
    );
}

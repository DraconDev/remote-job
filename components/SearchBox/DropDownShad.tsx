"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface DropDownProps {
    items: string[];
    selectedItem: string;
    onSet: (value: string) => void;
}

export default function DropDownShad({
    items,
    selectedItem,
    onSet,
}: DropDownProps) {
    const handleChange = (newValue: string) => {
        console.log("newValue", newValue);
        onSet(newValue);
    };
    return (
        <Select value={selectedItem} onValueChange={onSet}>
            <SelectTrigger className="w-[180px] p-4">
                <SelectValue placeholder={selectedItem} />
            </SelectTrigger>
            <SelectContent>
                {items.map((item) => (
                    <SelectItem key={item} value={item}>
                        {item}
                    </SelectItem>
                ))}
                {/* <SelectGroup></SelectGroup> */}
            </SelectContent>
        </Select>
    );
}

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface DropDownProps {
    items: string[];
    selectedItem: string;
    onSelect: (value: string) => void;
}

export default function DropDownShad({
    items,
    selectedItem,
    onSelect,
}: DropDownProps) {
    return (
        <Select>
            <SelectTrigger className="w-[180px] p-4">
                <SelectValue placeholder={selectedItem} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {items.map((item) => (
                        <SelectItem
                            key={item}
                            value={item}
                            onClick={() => onSelect(item)}
                        >
                            {item}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

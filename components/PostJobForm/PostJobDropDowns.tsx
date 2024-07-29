import { experiences, jobTypes } from "@/consts/info";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Props = {};

const PostJobDropDowns = (props: Props) => {
    const menus = [
        {
            name: "experiences",
            value: experiences.slice(1),
        },
        {
            name: "jobTypes",
            value: jobTypes.slice(1),
        },
    ];
    return (
        <div>
            {menus.map((menu) => (
                <Select key={menu.name}>
                    <SelectTrigger className="w-[180px] p-4">
                        <SelectValue placeholder={menu.name} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {menu.value.map((item) => (
                                <SelectItem key={item} value={item}>
                                    {item}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            ))}
        </div>
    );
};

export default PostJobDropDowns;

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import PostJobSection from "./PostJobSection";

type Props = {
    menus: {
        name: string;
        value: string[];
        select: string;
        setSelect: (value: string) => void;
        title: string;
    }[];
};

const PostJobDropDowns = ({ menus }: Props) => {
    return (
        <div>
            {menus.map((menu) => (
                <PostJobSection key={menu.name} title={menu.title}>
                    <Select
                        key={menu.name}
                        onValueChange={menu.setSelect}
                        value={menu.select}
                    >
                        <SelectTrigger className="w-[180px] p-4">
                            <SelectValue placeholder={menu.select} />
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
                </PostJobSection>
            ))}
        </div>
    );
};

export default PostJobDropDowns;

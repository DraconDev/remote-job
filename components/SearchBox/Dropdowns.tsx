import Input from "../ui/input";
import DropDownShad from "./DropDownShad";

type Props = {
    lists: {
        list: string[];
        current: string;
        setCurrent: (value: string) => void;
    }[];
};

const Dropdowns = ({ lists }: Props) => {
    return (
        <div className="flex flex-col">
            <div className="gap-2 flex py-2">
                {lists.map((list) => (
                    <DropDownShad
                        key={list.current}
                        items={list.list}
                        selectedItem={list.current}
                        onSelect={list.setCurrent}
                    />
                ))}
                {/* <SelectMultiple
                    items={lists[1].list}
                    selectedItem={lists[1].current}
                    onSelect={lists[1].setCurrent}
                /> */}
                <div className="grid w-full max-w-sm items-center ">
                    <Input
                        className="max-w-[200px] flex justify-between "
                        id="min-salary"
                        type="number"
                        name="salary_minimum"
                        placeholder="Minimum salary in USD"
                    />
                </div>
            </div>
        </div>
    );
};

export default Dropdowns;

import DropDown from "./DropDown";
import DropDown3 from "./Dropdown3";
import { DropDownShad } from "./DropDownShad";

type Props = {
    lists: {
        list: string[];
        current: string;
        setCurrent: any;
    }[];
};

const Dropdowns = ({ lists }: Props) => {
    return (
        <div className="flex flex-col">
            <div className="gap-2 flex p-2">
                {lists.map((list) => (
                    <DropDown
                        key={list.current}
                        items={list.list}
                        selectedItem={list.current}
                        onSelect={list.setCurrent}
                    />
                ))}
            </div>
            {/* <div className="gap-2 flex p-2">
                {lists.map((list) => (
                    <DropDown
                        key={list.current}
                        items={list.list}
                        selectedItem={list.current}
                        onSelect={list.setCurrent}
                    />
                ))}
            </div> */}
            <DropDownShad />

            <div className="gap-2 flex p-2">
                {lists.map((list) => (
                    <DropDown3
                        key={list.current}
                        items={list.list}
                        selectedItem={list.current}
                        onSelect={list.setCurrent}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dropdowns;

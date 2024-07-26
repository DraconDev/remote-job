import DropDown from "./DropDown";

type Props = {
    lists: {
        list: string[];
        current: string;
        setCurrent: any;
    }[];
};

const Dropdowns = ({ lists }: Props) => {
    return (
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
    );
};

export default Dropdowns;

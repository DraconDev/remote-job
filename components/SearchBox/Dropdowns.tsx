import DropDownShad from "./DropDownShad";

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
                    <DropDownShad
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

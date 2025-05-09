import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type InputWithButtonProps = {
    searchField: string;
    setSearchField: (value: string) => void;
    handleSearch: () => void;
};

export function InputWithButton({
    searchField,
    setSearchField,
    handleSearch,
}: InputWithButtonProps) {
    return (
        <div className="flex w-full items-center space-x-2">
            <Input
                type="text"
                placeholder="Search"
                className="grow"
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
            />
            <Button type="button" onClick={handleSearch}>
                Search
            </Button>
        </div>
    );
}

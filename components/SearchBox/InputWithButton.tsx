import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type InputWithButtonProps = {
    searchField: string;
    setSearchField: (value: string) => void;
};

export function InputWithButton({
    searchField,
    setSearchField,
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
            <Button type="submit">Subscribe</Button>
        </div>
    );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/U8FL9rgneCm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

export default function MultiSelect() {
    const [selectedCategories, setSelectedCategories] = useState<
        Record<string, boolean>
    >({});

    const handleCategoryToggle = (category: string) => {
        setSelectedCategories((prevState) => ({
            ...prevState,
            [category]: !prevState[category],
        }));
    };

    return (
        <div className="grid gap-4">
            {Object.keys(selectedCategories).length > 0 && (
                <div className="flex flex-wrap gap-2 pb-2">
                    {Object.entries(selectedCategories)
                        .filter(([_, selected]) => selected)
                        .map(([category]) => (
                            <div
                                key={category}
                                className="py-1 px-2 bg-accent text-white rounded-md"
                            >
                                {category}
                                <XIcon
                                    onClick={() =>
                                        handleCategoryToggle(category)
                                    }
                                    className="ml-2 h-4 w-4 cursor-pointer"
                                />
                            </div>
                        ))}
                </div>
            )}
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Select Categories</h3>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedCategories({})}
                >
                    Clear
                </Button>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-full justify-between"
                    >
                        <span>Selected Categories</span>
                        <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[300px] p-2">
                    <DropdownMenuCheckboxItem>
                        <Checkbox
                            checked={selectedCategories["Electronics"] ?? false}
                            onCheckedChange={(value) =>
                                handleCategoryToggle("Electronics")
                            }
                        />
                        Electronics
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                        <Checkbox
                            checked={selectedCategories["Clothing"] ?? false}
                            onCheckedChange={(value) =>
                                handleCategoryToggle("Clothing")
                            }
                        />
                        Clothing
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                        <Checkbox
                            checked={
                                selectedCategories["Home & Garden"] ?? false
                            }
                            onCheckedChange={(value) =>
                                handleCategoryToggle("Home & Garden")
                            }
                        />
                        Home & Garden
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                        <Checkbox
                            checked={
                                selectedCategories["Beauty & Personal Care"] ??
                                false
                            }
                            onCheckedChange={(value) =>
                                handleCategoryToggle("Beauty & Personal Care")
                            }
                        />
                        Beauty & Personal Care
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                        <Checkbox
                            checked={
                                selectedCategories["Sports & Outdoors"] ?? false
                            }
                            onCheckedChange={(value) =>
                                handleCategoryToggle("Sports & Outdoors")
                            }
                        />
                        Sports & Outdoors
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                        <Checkbox
                            checked={
                                selectedCategories["Toys & Games"] ?? false
                            }
                            onCheckedChange={(value) =>
                                handleCategoryToggle("Toys & Games")
                            }
                        />
                        Toys & Games
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

function ChevronDownIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

function XIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}

"use client";
import { FaAngleDoubleDown } from "react-icons/fa";

import { useEffect, useRef, useState } from "react";

type Props = {
    items: string[];
    selectedItem: string;
    onSelect: (value: string) => void;
};

const ListBoxCustom = ({ items, selectedItem, onSelect }: Props) => {
    const [dropdownState, setDropdownState] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        setDropdownState(!dropdownState);
    };

    const handleMouseDown = (event: MouseEvent) => {
        // Close the dropdown if the click is outside of it
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setDropdownState(false);
        }
    };

    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener("mousedown", handleMouseDown);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className="relative block w-full " ref={dropdownRef}>
            <button
                value={selectedItem}
                onClick={toggleDropdown}
                className="p-2 bg-secondary text-black border rounded-md shadow-sm w-full focus:outline-none focus:ring focus:border-accent border-primary flex justify-center items-center"
                style={{ zIndex: 0 }}
            >
                <div className="flex grow justify-center">{selectedItem}</div>
                <FaAngleDoubleDown className="h-5 w-5 text-accent" />
            </button>
            {dropdownState && (
                <div className=" absolute bg-primary border-2 border-primary rounded-lg shadow-sm w-full mt-2 z-10  ">
                    {items.map((field, index) => (
                        <div
                            key={index}
                            className={`p-2 ${
                                index % 2 === 0
                                    ? "brightness-100"
                                    : "brightness-[85%]"
                            } cursor-pointer hover:bg-accent  w-full bg-secondary text-black border-primary `}
                            onClick={() => {
                                onSelect(field);
                                setDropdownState(false);
                            }}
                        >
                            {field}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListBoxCustom;

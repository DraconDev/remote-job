// "use client";
// import { useState } from "react";
// import { IoIosCheckmark } from "react-icons/io";

// interface DropDownProps {
//     items: string[];
//     selectedItem: string;
//     onSelect: (value: string) => void;
// }
// export default function SelectMultiple({
//     items,
//     selectedItem,
//     onSelect,
// }: DropDownProps) {
//     const [selectedOptions, setSelectedOptions] = useState<{
//         [key: string]: boolean;
//     }>(items.reduce((acc, item) => ({ ...acc, [item]: false }), {}));

//     const handleToggle = (item: string) => {
//         console.log(item, selectedOptions[item]);
//         setSelectedOptions((prevState) => ({
//             ...prevState,
//             [item]: !prevState[item],
//         }));
//     };

//     return (
//         <div className="flex items-center  flex-col">
//             {items.map((item: string) => (
//                 <button
//                     key={item}
//                     className={`text-sm font-medium w-[150px] flex items-center ${
//                         selectedOptions[item] ? "bg-accent" : "bg-card"
//                     }`}
//                     onClick={() => handleToggle(item)}
//                 >
//                     {selectedOptions[item] && (
//                         <IoIosCheckmark className="w-7 h-7" />
//                     )}
//                     {item}
//                 </button>
//             ))}
//         </div>
//     );
// }

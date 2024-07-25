"use client";

type Props = {};

const LogoInput = (props: Props) => {
    // const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // const handleDrop = (e: any) => {
    //     e.preventDefault();
    //     const file = e.dataTransfer.files[0];

    //     // Basic file validation
    //     if (file && file.type.startsWith("image/")) {
    //         setSelectedFile(file);
    //     } else {
    //         console.error("Invalid file type");
    //     }
    // };

    // const handleDragOver = (e) => {
    //     e.preventDefault();
    // };
    return (
        <input
            id="logo"
            name="logo"
            type="file"
            accept="image/*"
        />
        //     <label
        //         htmlFor="logo"
        //         className="w-[100px] h-[100px] bg-red-500 hover:cursor-pointer"
        //         onDrop={(e) => {
        //             console.log(e);
        //             e.preventDefault();
        //             // const file = e.target.files[0];

        //             // console.log(file);
        //         }}
        //         onDragOver={(e) => e.preventDefault()}
        //     >

        //     </label>
        // );
    );
};

export default LogoInput;

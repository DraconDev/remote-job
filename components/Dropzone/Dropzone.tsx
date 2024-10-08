"use client";
import { MdUpload } from "react-icons/md";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

function MyDropZone({
    setSelectedFile,
}: {
    setSelectedFile: (file: File | null) => void;
}) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Update the state to the first selected image file
        console.log(acceptedFiles);
        const file = acceptedFiles[0];
        if (file.size > 10000) {
            // 64x64px image in bytes
            console.log("File size is too large");
            return;
        }

        setSelectedFile(file);
        const reader = new FileReader();

        reader.onload = (e) => {
            if (e?.target?.result) {
                setSelectedImage(e.target.result as string);
            }
        };

        reader.readAsDataURL(file);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [],
            "image/png": [],
        },
    });
    return (
        <>
            <div className="">64x64px large avatar in png or jpeg format</div>

            <div
                {...getRootProps()}
                className="border-2 border-black w-[64px] h-[64px]  hover:cursor-pointer  rounded-full"
            >
                <input {...getInputProps()} type="file" accept="image/*" />
                {selectedImage ? (
                    <Image
                        src={selectedImage}
                        alt="Selected"
                        className="w-full h-full object-cover rounded-full"
                        width="64"
                        height="64"
                    />
                ) : (
                    <div className="justify-center items-center flex w-full h-full ">
                        <MdUpload className="w-12 h-12" />
                    </div>
                )}
            </div>
        </>
    );
}

export default MyDropZone;

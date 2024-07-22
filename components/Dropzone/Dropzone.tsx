"use client";
import { MdUpload } from "react-icons/md";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

function MyDropZone() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Update the state to the first selected image file
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            if (e?.target?.result) {
                setSelectedImage(e.target.result as string);
            }
        };

        reader.readAsDataURL(file);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [],
            "image/png": [],
        },
    });
    return (
        <>
            <div className="">Upload a 128x128px png or jpeg</div>
            <div
                {...getRootProps()}
                className="bg-red-400 w-[200px] h-[200px]  hover:cursor-pointer rounded-md"
            >
                <input {...getInputProps()} />
                {selectedImage ? (
                    <Image
                        src={selectedImage}
                        alt="Selected"
                        className="w-full h-full object-cover"
                        width="200"
                        height="200"
                    />
                ) : (
                    <div className="justify-center items-center flex w-full h-full ">
                        <MdUpload className="w-24 h-24" />
                    </div>
                )}
            </div>
        </>
    );
}

export default MyDropZone;

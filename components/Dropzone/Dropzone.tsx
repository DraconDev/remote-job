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
    <div className="flex items-center justify-between w-full h-full p-2">
      <div className="text-center text-sm text-gray-600 mb-2 p-4 w-full">
        Upload your company logo (max 64x64px, PNG or JPEG)
      </div>

      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 w-[150px] h-[150px] flex items-center justify-center hover:cursor-pointer rounded-lg p-4"
      >
        <input {...getInputProps()} type="file" accept="image/*" />
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt="Selected"
            className="w-full h-full object-cover rounded-lg"
            width={150}
            height={150}
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full text-gray-500">
            <MdUpload className="w-8 h-8 mb-2" />
            <p className="text-sm text-center">
              Drag &apos;n&apos; drop or click to upload
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyDropZone;

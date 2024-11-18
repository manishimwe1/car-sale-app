"use client";

import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import Dropzone from "react-dropzone";
import { carType } from "../../types";

const DropeZOne = ({
  setFiles,
  car,
}: {
  setFiles: Dispatch<SetStateAction<[] | File[]>>;
  car?: carType;
}) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    if (acceptedFiles) {
      const urls = acceptedFiles.map((file) => URL.createObjectURL(file));
      setImageUrls(urls);
    }
  };

  const maxSize = 20971520;
  return (
    <Dropzone onDrop={onDrop}>
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections.length > maxSize;
        return (
          <section className="w-full flex justify-center">
            <div
              {...getRootProps()}
              className={cn(
                "w-full h-52 flex justify-center items-center cursor-grabbing p-5 border border-dashed rounded-lg text-center",
                isDragActive
                  ? "bg-blue-500 text-white animate-pulse"
                  : "bg-slate-100/50 dark:bg-slate-800/80  text-slate-400"
              )}
            >
              <input {...getInputProps()} />
              {isDragActive && "click here or drag a file to upload!."}
              {isDragActive && isDragReject && "Drop to upload this file"}
              {isDragReject && "File type not accepted, sorry!"}
              {isFileTooLarge && (
                <div className="text-red-500 ml-2">file is too large</div>
              )}
              <div className="flex  gap-4 items-center justify-center">
                {car ? (
                  car.images.map((file) => {
                    console.log(file);

                    return (
                      <div key={file} className="flex flex-col gap-2">
                        <img
                          src={file ?? ""}
                          alt="file"
                          width={100}
                          height={60}
                          className="rounded-md"
                        />
                      </div>
                    );
                  })
                ) : imageUrls.length > 0 ? (
                  imageUrls.map((file) => {
                    // console.log(file);

                    return (
                      <div key={file} className="flex flex-col gap-2">
                        <Image
                          src={file}
                          alt="file"
                          width={100}
                          height={60}
                          className="rounded-md"
                        />
                      </div>
                    );
                  })
                ) : (
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <Upload />
                    <p>Drag and Drop here or click to upload a file😎</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      }}
    </Dropzone>
  );
};

export default DropeZOne;

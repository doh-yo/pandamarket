import { ChangeEvent, useRef } from "react";
import { CloseIcon, PlusIcon } from "@/lib/Icon";
import { useState } from "react";

interface ImageUploadProps {
  onImageChange: (file: File | null) => void;
  title?: string;
}

export default function ImageUpload({
  onImageChange,
  title,
}: ImageUploadProps) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreviewUrl(imageUrl);
      onImageChange(file);
    } else {
      onImageChange(null);
    }
  };

  const handleDelete = () => {
    setImagePreviewUrl("");
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      {title && <label>{title}</label>}
      <div
        className="relative w-[282px] aspect-square rounded-[12px] bg-gray100 text-16px font-normal text-gray400 flex items-center justify-center cursor-pointer"
        onClick={handleClick}
      >
        {imagePreviewUrl ? (
          <>
            <img
              src={imagePreviewUrl}
              alt="Preview"
              className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete();
              }}
              className="absolute top-2 right-2 bg-white p-1 rounded-full"
            >
              <CloseIcon />
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <PlusIcon
              alt="등록아이콘"
              width={48}
              height={48}
              className="mb-2"
            />
            이미지 등록
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        id="image-upload"
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}

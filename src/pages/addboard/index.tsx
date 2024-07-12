import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ImageUpload from "@/components/AddBoard/ImageUpload";
import Input from "@/components/input/Input";
import { AddBoardValidation } from "@/lib/utils/Validation";
import { createArticle, uploadImage } from "@/pages/api/axios";
import { useRouter } from "next/router";

interface AddBoardFormInputs {
  image?: string;
  title: string;
  content: string;
}

export default function AddBoardPage() {
  const router = useRouter();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AddBoardFormInputs>({
    resolver: yupResolver(AddBoardValidation),
  });

  const onSubmit: SubmitHandler<AddBoardFormInputs> = async (data) => {
    if (imageFile) {
      try {
        const imageUrl = await uploadImage(imageFile);
        data.image = imageUrl;
      } catch (error) {
        console.error("Image upload failed:", error);
        alert("이미지 업로드에 실패했습니다.");
        return;
      }
    }

    try {
      await createArticle(data);
      alert("게시글이 성공적으로 등록되었습니다.");
      router.push("/board");
    } catch (error) {
      alert("게시글 등록에 실패했습니다.");
    }
  };

  const handleImageChange = (file: File | null) => {
    setImageFile(file);
  };

  return (
    <form
      className="container-base"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="flex justify-between items-center mb-32px">
        <div className="text-20px font-bold">게시글 쓰기</div>
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={`rounded-8px px-23px py-12px text-white ${
            !isValid || isSubmitting ? "bg-gray400" : "bg-primary"
          }`}
        >
          등록
        </button>
      </div>
      <label className="text-18px font-bold">*제목</label>
      <Input
        name="title"
        type="text"
        placeholder="제목을 입력해 주세요"
        register={register}
        message={errors.title?.message}
      />
      <label className="text-18px font-bold">*내용</label>
      <Input
        name="content"
        type="textarea"
        placeholder="내용을 입력해 주세요"
        register={register}
        message={errors.content?.message}
      />
      <span className="text-18px font-bold mb-24px">이미지</span>
      <ImageUpload onImageChange={handleImageChange} />
    </form>
  );
}

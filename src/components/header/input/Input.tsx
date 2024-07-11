import { HTMLInputTypeAttribute, useState } from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import PasswordIcon from "@/../../public/images/logo/password.png";

export interface InputProps<TFormInput extends FieldValues = FieldValues> {
  name: Path<TFormInput>;
  register: UseFormRegister<TFormInput>;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  message?: string;
}

export default function Input<TFormInput extends FieldValues = FieldValues>({
  name,
  register,
  type,
  message,
  ...props
}: InputProps<TFormInput>) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="w-full mb-24px mt-16px relative">
        <input
          {...register(name)}
          {...props}
          type={showPassword && type === "password" ? "text" : type}
          className={`w-full mb-5px input-base ${message ? "input-error" : ""}`}
        />
        {type === "password" && (
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={togglePasswordVisibility}
          >
            <img
              src={PasswordIcon.src}
              alt="비밀번호확인"
              className="w-24px h-24px"
            />
          </div>
        )}
        {message && <p className="input-error-message">{message}</p>}
      </div>
    </>
  );
}

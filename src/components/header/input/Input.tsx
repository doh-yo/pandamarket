import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

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
  message,
  ...props
}: InputProps<TFormInput>) {
  return (
    <>
      <div className="w-full mb-24px mt-16px">
        <input
          {...register(name)}
          {...props}
          className={`w-full mb-5px input-base ${message ? "input-error" : ""}`}
        />
        {message && <p className="input-error-message">{message}</p>}
      </div>
    </>
  );
}

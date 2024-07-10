import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

export interface InputProps<TFormInput extends FieldValues = FieldValues> {
  // <input {...register(name)} />
  name: Path<TFormInput>;
  register: UseFormRegister<TFormInput>;
  // input properties
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  //input style
  message?: string;
}

export default function Input<TFormInput extends FieldValues = FieldValues>({
  name,
  register,
  message,
  ...props
}: InputProps<TFormInput>) {
  //   const warning = message ? invalid : null;

  return (
    <>
      <div>
        <input {...register(name)} {...props} />
      </div>
      {message && <p>{message}</p>}
    </>
  );
}

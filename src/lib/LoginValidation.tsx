import * as yup from "yup";

export const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/,
      "잘못된 이메일 형식입니다."
    )
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .min(8, "비밀번호를 8자 이상 입력해주세요")
    .required("비밀번호를 입력해주세요"),
});

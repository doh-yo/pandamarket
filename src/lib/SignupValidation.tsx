import * as yup from "yup";

export const SignupValidation = yup.object().shape({
  name: yup.string().required("이름을 입력해주세요"),
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다")
    .required("비밀번호를 다시 입력해 주세요"),
});

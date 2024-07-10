import Image from "next/image";
import Logo from "@/../../public/images/logo/panda-market-logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginValidation } from "@/lib/LoginValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/header/input/Input";

interface Inputs {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ resolver: yupResolver(LoginValidation) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <Image src={Logo} alt="판다마켓" width={396} height={132} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          register={register}
          message={errors.email?.message}
        />
        <Input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          register={register}
          message={errors.password?.message}
        />
        <button type="submit" disabled={isSubmitting}>
          로그인
        </button>
      </form>
    </div>
  );
}

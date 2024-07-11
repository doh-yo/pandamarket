import Image from "next/image";
import Link from "next/link";
import Logo from "@/../../public/images/logo/panda-market-logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/header/input/Input";
import GoogleLogo from "@/../../public/images/social/google-logo.png";
import KakaoLogo from "@/../../public/images/social/kakaotalk-logo.png";
import { SignupValidation } from "@/lib/Validation";

interface Inputs {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export default function Singup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ resolver: yupResolver(SignupValidation) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-[640px]">
      <div className="mb-40px">
        <Image src={Logo} alt="판다마켓" width={396} height={132} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>이메일</label>
        <Input
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          register={register}
          message={errors.email?.message}
        />
        <label>닉네임</label>
        <Input
          name="name"
          type="name"
          placeholder="닉네임을 입력해주세요"
          register={register}
          message={errors.name?.message}
        />
        <label>비밀번호</label>
        <Input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          register={register}
          message={errors.password?.message}
        />
        <label>비밀번호 확인</label>
        <Input
          name="confirmPassword"
          type="confirmPassword"
          placeholder="비밀번호를 입력해주세요"
          register={register}
          message={errors.confirmPassword?.message}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-40px bg-primary text-white px-124px py-16px"
        >
          로그인
        </button>
      </form>
      <div className="flex items-center justify-between rounded-8px bg-blue10 h-74px mt-24px mb-24px">
        <span>간편 로그인하기</span>
        <div className="flex gap-16px">
          <Link href="https://www.google.com/">
            <Image src={GoogleLogo} height={42} width={42} alt="구글로고" />
          </Link>
          <Link href="https://www.kakaocorp.com/page/">
            <Image src={KakaoLogo} height={42} width={42} alt="카카오톡로고" />
          </Link>
        </div>
      </div>
      <div className="flex">
        <p>판다마켓이 처음이신가요?</p>
        <Link href="/login">
          <p className="text-primary">로그인</p>
        </Link>
      </div>
    </div>
  );
}

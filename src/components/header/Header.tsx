import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "@/../../public/images/logo/panda-market-logo.png";
import profile from "@/../../public/images/logo/profile.svg";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center w-full border-b border-gray10">
      <div className="flex items-center ml-4">
        <Link href="/" className="mr-4">
          <Image src={Logo} alt="판다마켓" width={153} height={50} />
        </Link>
        <nav>
          <ul className="flex gap-2">
            <li className="px-[24px] py-[15px]">
              <Link href="/boards">
                <span
                  className={
                    router.pathname === "/boards" ? "text-primary" : ""
                  }
                >
                  자유게시판
                </span>
              </Link>
            </li>
            <li className="px-[24px] py-[15px]">
              <Link href="/items">
                <span
                  className={router.pathname === "/items" ? "text-primary" : ""}
                >
                  중고마켓
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Link href="/login">
          <span className="border border-primary bg-primary text-white px-[23px] py-[12px] rounded-[8px]">
            로그인
          </span>
        </Link>
      </div>
      {/* <Link href="/">
        <Image src={profile} alt="프로필" width={40} height={40} />
      </Link> */}
    </header>
  );
}

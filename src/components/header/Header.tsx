import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "@/images/logo/panda-market-logo.png";
import profile from "@/images/logo/profile.svg";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.globalHeader}>
      <div className={styles.headerLeft}>
        <Link href="/" className={styles.headerLogo}>
          <Image src={Logo} alt="판다마켓" width={153} height={50} />
        </Link>
        <nav>
          <ul className={styles.globalHeaderNav}>
            <li className={styles.navList}>
              <Link href="/boards">
                <span
                  className={`${styles.navListLink} ${
                    router.pathname === "/boards"
                      ? styles.navListLinkActive
                      : ""
                  }`}
                >
                  자유게시판
                </span>
              </Link>
            </li>
            <li className={styles.navList}>
              <Link href="/items">
                <span
                  className={`${styles.navListLink} ${
                    router.pathname === "/items" ? styles.navListLinkActive : ""
                  }`}
                >
                  중고마켓
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Link href="/">
        <Image src={profile} alt="프로필" width={40} height={40} />
      </Link>
    </header>
  );
}

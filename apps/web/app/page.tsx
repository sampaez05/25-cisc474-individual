import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import coursePage from "./coursesPage/page";
import Link from "next/link";

type Props = Omit<ImageProps, "src"> & {
    srcLight: string;
    srcDark: string;
};

const ThemeImage = (props: Props) => {
    const { srcLight, srcDark, ...rest } = props;

    return (
        <>
            <Image {...rest} src={srcLight} className="imgLight" />
            <Image {...rest} src={srcDark} className="imgDark" />
        </>
    );
};

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1> Welcome to Your Courses</h1>
                <Link href="/course"><li><u>Course 1</u></li></Link>
                <Link href="/course"><li><u>Course 2</u></li></Link>
                <Link href="/course"><li><u>Course 3</u></li></Link>
                <Link href="/course"><li><u>Course 4</u></li></Link>
                <Link href="/course"><li><u>Course 5</u></li></Link>
                <br></br>
                <Image width={600} height={400} src="/calendar-stock-img.jpg" alt="calendar"></Image>
            </main>
    
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    href="https://turborepo.com?utm_source=create-turbo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to turborepo.com →
                </a>
            </footer>
        </div>
    );
}

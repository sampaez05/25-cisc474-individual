
import Link from "next/link";


export default function Home() {
    return (
        <div>
            <main>
                <h1> Welcome to Your Courses</h1>
                <Link href="/Course1"><li><u>Course 1</u></li></Link>
                <Link href="/Course2"><li><u>Course 2</u></li></Link>
                <Link href="/Course3"><li><u>Course 3</u></li></Link>
                <Link href="/Course4"><li><u>Course 4</u></li></Link>
                <Link href="/Course5"><li><u>Course 5</u></li></Link>
                <br></br>
            </main>
        </div>
    );
}

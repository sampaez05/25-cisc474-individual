import Link from "next/link";

export default function coursesPage() {
    return (
        <div>
            <header> Welcome to Your Courses</header>
            <Link href="/course"><li>Course 1</li></Link>
            <Link href="/course"><li>Course 2</li></Link>
            <Link href="/course"><li>Course 3</li></Link>
            <Link href="/course"><li>Course 4</li></Link>
            <Link href="/course"><li>Course 5</li></Link>
            <Link href="/">Home</Link>
        </div>
    )
}
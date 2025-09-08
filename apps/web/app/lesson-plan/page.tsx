import Link from "next/link";

export default function lessons() {
    return (
        <div>
            <header> Course Name</header>
            <header>Topic - Week</header>
            <li>Notes</li>
            <li>Readings</li>
            <Link href="assignment"><li>Assignment 1 - Due Date</li></Link>
            <Link href="assignment"><li>Assignment 2 - Due Date</li></Link>
            <Link href="/">Home</Link>
        </div>
    )
}
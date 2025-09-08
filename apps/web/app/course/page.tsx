import Link from "next/link";

export default function course() {
    return (
        <div>
            <header> Course Name</header>
            <li>Syllabus</li>
            <li>Professor - Contact Info</li>
            <Link href="/lesson-plan"><li>Lesson Plan</li></Link>
            <Link href="/assignment"><li>Assignment</li></Link>
            <Link href="/course-grade"><li>Grade</li></Link>
            <Link href="/">Home</Link>
        </div>
    )
}
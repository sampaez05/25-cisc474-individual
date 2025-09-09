import Link from "next/link";

export default function course() {
    return (
        <div>
            <Link href="/"><button>Back to Home Page</button></Link>
            <br></br>
            <br></br>
            <h1> Course Name -------------------------- Grade</h1>
            <br></br>
            <Link href="/course/syllabus"><li><u>Syllabus</u></li></Link>
            <Link href="/course/lesson-plan"><li><u>Lesson Plan</u></li></Link>
            <Link href="/course/assignment"><li><u>Assignment</u></li></Link>
            <Link href="/course/course-grade"><li><u>Grade</u></li></Link>
            
        </div>
    )
}
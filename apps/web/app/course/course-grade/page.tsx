import Link from "next/link";

export default function grade() {
    return (
        <div>
            <Link href="/"><button>Back to Home Page</button></Link>
            <br></br>
            <Link href="/course"><button>Back to Course Name</button></Link>
            <br></br>
            <br></br>
            <h1> Course Name</h1>
            <br></br>
            <Link href="/course/past-assignment"><li><u>Assignment Name - Grade</u></li></Link>
            <Link href="/course/past-assignment"><li><u>Assignment Name - Grade</u></li></Link>
            <Link href="/course/past-assignment"><li><u>Exam Name --------- Grade</u></li></Link>
            <Link href="/course/past-assignment"><li><u>Project Name ------- Grade</u></li></Link>
            <Link href="/course/past-assignment"><li><u>Assignment Name - Grade</u></li></Link>
            <br></br>
            <li>Final Grade --------- Grade</li>
        </div>
    )
}
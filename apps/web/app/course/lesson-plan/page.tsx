import Link from "next/link";

export default function lessons() {
    return (
        <div>
            <Link href="/"><button>Back to Home Page</button></Link>
            <br></br>
            <Link href="/course"><button>Back to Course Name</button></Link>
            <br></br>
            <br></br>
            <h1> Course Name</h1>
            <br></br>
            <h2>Topic - Week</h2>
            <br></br>
            <li>Notes</li>
            <li>Readings</li>
            <Link href="assignment"><li><u>Assignment 1 - Due Date</u></li></Link>
            <Link href="assignment"><li><u>Assignment 2 - Due Date</u></li></Link>
        </div>
    )
}
import Link from "next/link";

export default function pastAssignment() {
    return (
        <div>
            <Link href="/"><button>Back to Home Page</button></Link>
            <br></br>
            <Link href="/course"><button>Back to Course Name</button></Link>
            <br></br>
            <br></br>
            <h1> Course Name</h1>
            <br></br>
            <h3>Assignment Name</h3>
            <p>Grade: x/100</p>
            <p>Feedback: [Any feedback left by the instructor]</p>
            <p>Submission: [link/file/whatever submission type was]</p>
            <p>Date Submitted: x/x/xxxx</p>
        </div>
    )
}
import Link from "next/link";

export default function pastAssignment({params}: {params: { course: string}}) {
    const {course} = params;
    return (
        <div>
            <Link href="/"><button>Back to Home Page</button></Link>
            <br></br>
            <br></br>
            <h1>{course}</h1>
            <br></br>
            <h3>Assignment Name</h3>
            <p>Grade: x/100</p>
            <p>Feedback: [Any feedback left by the instructor]</p>
            <p>Submission: [link/file/whatever submission type was]</p>
            <p>Date Submitted: x/x/xxxx</p>
        </div>
    )
}
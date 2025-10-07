import Link from "next/link";

export default async function Syllabus({params}: {params: Promise<{ course: string}>}) {
    let course = (await params).course;
    course = decodeURIComponent(course); //decode to remove the %20 that replaces spaces
    return (
        <div>
            <Link href="/"><button>Back to Home Page</button></Link>
            <br></br>
            <br></br>
            <h1>Syllabus for {course}</h1>
            <br></br>
            <h3>Late policy</h3>
            <p>[Description of late policy]</p>
            <br></br>
            <h3>Grading</h3>
            <p>[Grade breakdown and grade weighing]</p>
            <br></br>
            <h3>Office Hours</h3>
            <p>[Office hours times and locations]</p>
            <br></br>
            <h3>Contact Information</h3>
            <p>[Contact Info such as email, discord]</p>
        </div>
    )
}
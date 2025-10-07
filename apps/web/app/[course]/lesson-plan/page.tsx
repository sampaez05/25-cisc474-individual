import Link from "next/link";

export default async function lessons({params}: {params: Promise<{ course: string}>}) {
    let course = (await params).course;
    course = decodeURIComponent(course); //decode to remove the %20 that replaces spaces

    return (
        <div>

            <Link href="/"><button>Back to Home Page</button></Link>
            <br></br>
            <br></br>
            <h1>{course}</h1>
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
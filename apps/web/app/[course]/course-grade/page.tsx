import Link from "next/link";

export default async function grade({params}: {params: Promise<{ course: string}>}) {
    let course = (await params).course;
    course = decodeURIComponent(course); //decode to remove the %20 that replaces spaces
    return (
        <div>
            <Link href="/"><button>Back to Home Page</button></Link>
            <br></br>
            <br></br>
            <h1>{course}</h1>
            <br></br>
            <Link href={`/${course}/past-assignment`}><li><u>Assignment Name - Grade</u></li></Link>
            <Link href={`/${course}/past-assignment`}><li><u>Assignment Name - Grade</u></li></Link>
            <Link href={`/${course}/past-assignment`}><li><u>Exam Name --------- Grade</u></li></Link>
            <Link href={`/${course}/past-assignment`}><li><u>Project Name ------- Grade</u></li></Link>
            <Link href={`/${course}/past-assignment`}><li><u>Assignment Name - Grade</u></li></Link>
            <br></br>
            <li>Final Grade --------- Grade</li>
        </div>
    )
}

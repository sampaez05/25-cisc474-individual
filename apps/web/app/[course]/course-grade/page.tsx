import Link from "next/link";

interface GradeProps {
    params: {
        course:any; //course name
    };
}

export default async function grade({params}:GradeProps) {
    let {course} = await (params);
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

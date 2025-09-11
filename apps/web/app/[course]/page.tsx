import Link from "next/link";

interface CourseProps {
    params: {
        course:any; //course name

    };
}

export default function course({params}:CourseProps) {
    let {course} = params;
    return (
        <div>
            <Link href="/"><button>Back to Home Page</button></Link>
            <br></br>
            <br></br>
            <h1> {course} -------------------------- Grade</h1>
            <br></br>
            <Link href={`/${course}/syllabus`}><li><u>Syllabus</u></li></Link>
            <Link href={`/${course}/lesson-plan`}><li><u>Lesson Plan</u></li></Link>
            <Link href={`/${course}/assignment`}><li><u>Assignment</u></li></Link>
            <Link href={`/${course}/course-grade`}><li><u>Grade</u></li></Link>
            
        </div>
    )
}
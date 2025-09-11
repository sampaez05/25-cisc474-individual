import Link from "next/link";

/** The parameters were causing issues with the deployment when I had an interface where params:{course:string}  
 * I was able to fix the issue by changing param's type to Promise<{ course: string}>
 * This YouTube video was where I found this solution: https://www.youtube.com/watch?v=k9g6aVLH3p4 (around 4:06)
 * This solution has been applied to all the pages under the [course] segment
*/

export default async function course({params}: {params: Promise<{ course: string}>}) {
    const course = (await params).course;
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
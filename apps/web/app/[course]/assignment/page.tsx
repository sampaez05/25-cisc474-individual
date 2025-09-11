import Link from "next/link";

export default async function assignment({params}: {params: Promise<{ course: string}>}) {
    const course = (await params).course;
    return (
        <div>
            <Link href="/"><button>Back to Home Page</button></Link>
            <br></br>
            <br></br>
            <h1> {course} </h1>
            <br></br>
            <h2>Assignment Name - Due Date</h2>
            <br></br>
            <p>[Description]</p>
            <br></br>
            <p>Rubric</p>
            <br></br>
            <button>Upload File</button>
            <button>Submit</button>
        </div>
    )
}
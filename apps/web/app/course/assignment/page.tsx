import Link from "next/link";

export default function assignment() {
    return (
        <div>
            <Link href="/"><button>Back to Home Page</button></Link>
            <br></br>
            <Link href="/course"><button>Back to Course Name</button></Link>
            <br></br>
            <br></br>
            <h1> Course Name</h1>
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
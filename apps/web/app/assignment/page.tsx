import Link from "next/link";

export default function grade() {
    return (
        <div>
            <header> Course Name</header>
            <header>Assignment Name - Due Date</header>
            <p>[Description]</p>
            <p>Rubric</p>
            <button>Upload File</button>
            <br></br>
            <button>Submit</button>
            <br></br>
            <Link href="/">Home</Link>
        </div>
    )
}
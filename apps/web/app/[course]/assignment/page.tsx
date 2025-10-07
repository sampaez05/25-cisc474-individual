import Link from "next/link";
import { Assignment } from "../../interfaces/assignment.interface";

export default async function assignment({params}: {params: Promise<{ course: string, assignment:Assignment}>}) {
    let course = (await params).course;
    course = decodeURIComponent(course); //decode to remove the %20 that replaces spaces

    let assignment = (await params).assignment;
   
    return (
        <div>
            <Link href="/"><button>Back to Home Page</button></Link>
            <br></br>
            <br></br>
            <h1> {course} </h1>
            <br></br>
            <h2>[Assignment Title] - [Due Date]</h2>
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

/*import Link from "next/link";
import { Assignment } from "../../interfaces/assignment.interface";
import { Suspense } from "react";

export default async function AssignmentPage({ params }: { params: { course: string; assignment: string } }) {
  const course = decodeURIComponent(params.course);
  const assignmentParam = decodeURIComponent(params.assignment);

  //Fetch courses
  const coursesResponse = await fetch(`http://localhost:3000/courses`, { cache: "no-store" });
  const courses: Assignment[] = await coursesResponse.json();
  const foundCourse = courses.find(
    (c) =>
    c.title.toLowerCase() === course.toLowerCase());
    if (!foundCourse) {
        return (
          <div>
            <Link href="/"><button>Back to Home Page</button></Link>
            <p>Course not found.</p>
          </div>
        );
      }

  // Fetch the actual assignment data from your API or mock endpoint
  const res = await fetch(`http://localhost:3000/assignments`, { cache: "no-store" });
  const data: Assignment[] = await res.json();
  const assignment = data.find(
    (a) =>
      a.course_id === foundCourse.id
  );

  if (!assignment) {
    return (
      <div>
        <Link href="/"><button>Back to Home Page</button></Link>
        <h1>{course}</h1>
        <p>Assignment not found.</p>
      </div>
    );
  }

  return (
    <Suspense>
        <div>
            <Link href="/"><button>Back to Home Page</button></Link>
            <br />
            <h1>{course}</h1>
            <br />
            <h2>{assignment.title} - {"Due Date: "+ String(assignment.due_date)}</h2>
            <br />
            <p>{"[Description]"}</p>
            <br />
            <p>Rubric</p>
            <br />
            <button>Upload File</button>
            <button>Submit</button>
        </div>
    </Suspense>
    
  );
}
*/
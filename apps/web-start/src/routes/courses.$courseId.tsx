import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/courses/$courseId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/courses/$courseId" yay!!
            <Link to="/"><button>Back to Home Page</button></Link>
            <br></br>
            <br></br>
            <h1> {`hi`} -------------------------- Grade</h1>
            <br></br>

  </div>
}

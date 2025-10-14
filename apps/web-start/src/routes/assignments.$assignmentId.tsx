import { useQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'
import { Assignment } from '../../interfaces/assignment.interface'

export const Route = createFileRoute('/assignments/$assignmentId')({
  component: RouteComponent,
})

function RouteComponent() {
    const {assignmentId} = Route.useParams()
    return (
        <div>
            <AssignmentPage assignmentId={assignmentId}/>
        </div>
    )
}

async function fetchAssignmentInfo(assignmentId:string) {
    const res = await fetch(`http://localhost:3000/assignments/${assignmentId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch courses')
    }
    return res.json()
}

function AssignmentPage({ assignmentId }: { assignmentId: string }) {
    const { isPending, isError, data, error } = useQuery({
      queryKey: ['assignment', assignmentId],
      queryFn: () => fetchAssignmentInfo(assignmentId),
    })
  
    if (isPending) {
      return <span>Loading...</span>
    }
  
    if (isError) {
      return <span>Error: {error.message}</span>
    }

    const assignment: Assignment = data
    console.log(data);
  
    // We can assume by this point that `isSuccess === true`
    return (
      <div>
        <Link to="/courses"><button><u>Back to Courses Page</u></button></Link>
        <br></br>
        <br></br>
        <h1> {`${assignment.title}`} -------------------------- Due: {`${assignment.due_date}`}</h1>
        <p>{`${assignment.description}`}</p> 
        <br></br>
      </div>
    )
}

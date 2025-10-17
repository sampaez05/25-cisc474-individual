import { useQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'
import { Assignment } from '../../interfaces/assignment.interface'
import { backendFetcher } from '../integrations/fetcher'

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

function AssignmentPage({ assignmentId }: { assignmentId: string }) {
    const { isPending, isError, data, error } = useQuery({
      queryKey: ['assignment', assignmentId],
      queryFn: backendFetcher<Assignment>(`assignments/${assignmentId}`)
    })
  
    if (isPending) {
      return <span>Loading...</span>
    }
  
    if (isError) {
      return <span>Error: {error.message}</span>
    }

    const assignment: Assignment = data
    console.log(data);

    const formattedDate = new Date(assignment.due_date).toLocaleString();
  
    // We can assume by this point that `isSuccess === true`
    return (
      <div>
        <Link to="/courses"><button><u>Back to Courses Page</u></button></Link>
        <br></br>
        <br></br>
        <h1> {`${assignment.title}`} -------------------------- Due: {formattedDate}</h1>
        <p>{`${assignment.description}`}</p> 
        <br></br>
      </div>
    )
}

import { useQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'
import { Assignment } from '../../interfaces/assignment.interface'
import { backendFetcher } from '../integrations/fetcher'
import type {AssignmentOut} from '../../../../packages/api/src/assignments'

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
  const assignmentQueryOptions = {
    queryKey: ['assignment'],
    queryFn: backendFetcher<AssignmentOut>(`assignments/${assignmentId}`),
    initialData: null,
  };
    const { isPending, isError, data, error } = useQuery(assignmentQueryOptions);

    /*const { isPending, isError, data, error } = useQuery({
      queryKey: ['assignment', assignmentId],
      queryFn: backendFetcher<Assignment>(`assignments/${assignmentId}`)
    })*/
  
    if (isPending) {
      return <span>Loading...</span>
    }
  
    if (isError) {
      return <span>Error: {error.message}</span>
    }

    const assignment = data;
    if (!assignment) {
      return <span>Assignment not found</span>;
    }
    console.log("data aka assignment is "+data.title);

    const formattedDate = new Date(assignment.due_date).toLocaleString();
  
    // We can assume by this point that `isSuccess === true`
    return (
      <div>
        <Link to="/assignments"><button><u>Back to Assignments Page</u></button></Link>
        <br></br>
        <br></br>
        <h1> {`${assignment.title}`} -------------------------- Due: {formattedDate}</h1>
        <p>{`${assignment.description}`}</p> 
        <br></br>
      </div>
    )
}

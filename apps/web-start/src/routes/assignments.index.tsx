import { useQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'
import {Assignment} from '../../interfaces/assignment.interface'
import { backendFetcher } from '../integrations/fetcher'
import type {AssignmentOut} from '../../../../packages/api/src/assignments'


const assignmentsQueryOptions = {
  queryKey: ['courses'],
  queryFn: backendFetcher<Array<AssignmentOut>>('courses'),
  initialData: [],
};

export const Route = createFileRoute('/assignments/')({
  component: RouteComponent,
  loader: ({context:{queryClient}}) => queryClient.ensureQueryData(assignmentsQueryOptions)
});


function RouteComponent() {
  return (<div>
    <Assignments/>
    </div>
  )
}

function Assignments() {
  const { isPending, isError, data, error } = useQuery(assignmentsQueryOptions);
    if (isPending) {
      return <span>Loading...</span>
    }
  
    if (isError) {
      return <span>Error: {error.message}</span>
    }
  
    // We can assume by this point that `isSuccess === true`
    return (
      <ul>
        {data.map((assignment) => (
          <header key={assignment.id}>
            <Link to='/assignments/$assignmentId' params={{ assignmentId: assignment.id }}><li><u>{assignment.title}</u></li></Link>
          </header>
        ))}
      </ul>
    )
  }
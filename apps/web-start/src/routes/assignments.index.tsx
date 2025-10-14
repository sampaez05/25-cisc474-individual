import { useQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'
import {Assignment} from '../../interfaces/assignment.interface'

export const Route = createFileRoute('/assignments/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div>
    <Assignments/>
    </div>
  )
}

async function fetchAssignmentsList() {
    const res = await fetch('http://localhost:3000/assignments')
    if (!res.ok) {
      throw new Error('Failed to fetch assignments')
    }
    return res.json()
  }

function Assignments() {
    const { isPending, isError, data, error } = useQuery({
      queryKey: ['courses'],
      queryFn: fetchAssignmentsList,
    })
  
    if (isPending) {
      return <span>Loading...</span>
    }
  
    if (isError) {
      return <span>Error: {error.message}</span>
    }
  
    // We can assume by this point that `isSuccess === true`
    return (
      <ul>
        {data.map((assignment:Assignment) => (
          <Link to='/assignments/$assignmentId' key={assignment.id} params={{ assignmentId: assignment.id.toString() }}><li><u>{assignment.title}</u></li></Link>
        ))}
      </ul>
    )
  }
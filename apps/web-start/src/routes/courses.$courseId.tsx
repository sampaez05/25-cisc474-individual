import { useQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'
import { Course } from '../../interfaces/course.interface'
import { Assignment } from '../../interfaces/assignment.interface'
import { backendFetcher } from '../integrations/fetcher'
import type {CourseOut} from '../../../../packages/api/src/courses'


const courseQueryOptions = {
  queryKey: ['course'],
  queryFn: backendFetcher<Array<CourseOut>>('course'),
  initialData: [],
};

export const Route = createFileRoute('/courses/$courseId')({
  component: CourseComponent,
  loader: ({context:{queryClient}}) => queryClient.ensureQueryData(courseQueryOptions)
})

function CourseComponent() {
    const {courseId} = Route.useParams()
  return <div>
    <CoursePage courseId={courseId}/>
  
  </div>

function CoursePage({ courseId }: { courseId: string }) {
    const { isPending, isError, data, error } = useQuery({
      queryKey: ['course', courseId],
      queryFn: backendFetcher<Course>(`courses/${courseId}`)
    })
  
    if (isPending) {
      return <span>Loading...</span>
    }
  
    if (isError) {
      return <span>Error: {error.message}</span>
    }

    const course: Course = data
    console.log(data);
  
    // We can assume by this point that `isSuccess === true`
    return (
      <div>
        <Link to="/courses"><button><u>Back to Courses Page</u></button></Link>
        <br></br>
        <br></br>
        <h1> {`${course.title}`} -------------------------- Grade</h1>
        <p>{`${course.description}`}</p> 
        <br></br>
        <AssignmentsList courseId={courseId}/> 
      </div>
    )
  }
}

function AssignmentsList({ courseId }: { courseId: string }) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['assignment', courseId],
    queryFn: backendFetcher<Assignment>(`assignments/${courseId}`)
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
      <br></br>
      <h1>Assignments</h1>
      <Link to='/assignments/$assignmentId' key={assignment.id} params={{ assignmentId: assignment.id.toString() }}><u>{`${assignment.title}`} -------------------------- Due: {`${assignment.due_date}`}</u></Link>
    </div>
  )
}

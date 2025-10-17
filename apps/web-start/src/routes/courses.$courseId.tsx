import { useQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'
import { Course } from '../../interfaces/course.interface'
import { Assignment } from '../../interfaces/assignment.interface'
import { backendFetcher } from '../integrations/fetcher'
import type {CourseOut} from '../../../../packages/api/src/courses'
import type {AssignmentOut} from '../../../../packages/api/src/assignments'


export const Route = createFileRoute('/courses/$courseId')({
  component: CourseComponent,
  //loader: ({context:{queryClient}}) => queryClient.ensureQueryData(courseQueryOptions)
})

function CourseComponent() {
    const {courseId} = Route.useParams()
  return <div>
    <CoursePage courseId={courseId}/>
  
  </div>

function CoursePage({ courseId }: { courseId: string }) {
  const courseQueryOptions = {
    queryKey: [`courses/${courseId}`],
    queryFn: backendFetcher<CourseOut>(`courses/${courseId}`),
    initialData: null,
  };
    const { isPending, isError, data, error } = useQuery(courseQueryOptions);
  
    if (isPending) {
      return <span>Loading...</span>
    }
  
    if (isError) {
      return <span>Error: {error.message}</span>
    }

    console.log("course id is "+courseId)
    const course = data;
    if (!course) {
      return <span>Course not found</span>;
    }
    console.log("data aka course is "+data.title);
  
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
  const assignmentQueryOptions = {
    queryKey: [`assignments/${courseId}`],
    queryFn: backendFetcher<AssignmentOut>(`assignments/${courseId}`),
    initialData: null,
  };
    const { isPending, isError, data, error } = useQuery(assignmentQueryOptions);

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

  // We can assume by this point that `isSuccess === true`
  return (
    <div>
      <br></br>
      <h1>Assignments</h1>
      <Link to='/assignments/$assignmentId' key={assignment.id} params={{ assignmentId: assignment.id.toString() }}><u>{`${assignment.title}`} -------------------------- Due: {`${assignment.due_date}`}</u></Link>
    </div>
  )
}

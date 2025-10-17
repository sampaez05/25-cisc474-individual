import { useQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'
import {Course} from '../../interfaces/course.interface'
import { backendFetcher } from '../integrations/fetcher'
import type {CourseOut} from '../../../../packages/api/src/courses'


const coursesQueryOptions = {
  queryKey: ['courses'],
  queryFn: backendFetcher<Array<CourseOut>>('courses'),
  initialData: [],
};

export const Route = createFileRoute('/courses/')({
  component: RouteComponent,
  loader: ({context:{queryClient}}) => queryClient.ensureQueryData(coursesQueryOptions)
});

function RouteComponent() {
  return (<div>
    <Courses/>
    <br></br>
    <Link to="/createCourse"><u>Add New Course</u></Link>
    </div>
  )
}

function Courses() {
    const { isPending, isError, data, error } = useQuery(coursesQueryOptions);
  
    if (isPending) {
      return <span>Loading...</span>
    }
  
    if (isError) {
      return <span>Error: {error.message}</span>
    }
  
    // We can assume by this point that `isSuccess === true`
    return (
      <ul>
        {data.map((course) => (
          <header key={course.id}>
            <Link to='/courses/$courseId' params={{ courseId: course.id }}><li><u>{course.title}</u></li></Link>
          </header>
        ))}
      </ul>
    )
  }
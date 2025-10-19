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
    <h1>Courses:</h1>
    <Courses/>
    <br></br>
    <p>Instructions for Grading Individual - Frontend to Backend Assignment:
        Click on the View Your Courses button above.
        To create a course, click on Add New Course and then type in a course name and description. The instructor is already chosen in order to make sure it's a valid user.
        To delete a course, click on Delete A Course and then type in the correct course name and the corresponding course id.
        To update/edit a course, click on the course you want to edit and then click on Update This Course. You can then change the name and description.</p>
    <br></br>
    <Link to="/createCourse"><u>Add New Course</u></Link>
    <br></br>
    <Link to="/deleteCourse"><u>Delete A Course</u></Link>
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
    console.log("Courses data:", data);

  
    // We can assume by this point that `isSuccess === true`
    return (
      <ul>
        {data.map((course) => (
          <header key={course.id}>
            <Link to='/courses/$courseId' params={{ courseId: course.id.toString() }}><li><u>{course.title}</u></li></Link>
          </header>
        ))}
      </ul>
    )
  }
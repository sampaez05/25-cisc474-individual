import { useQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'
import { Course } from '../../interfaces/course.interface'

export const Route = createFileRoute('/courses/$courseId')({
  component: CourseComponent,
})

function CourseComponent() {
    const {courseId} = Route.useParams()
  return <div>
    <CoursePage courseId={courseId}/>
  </div>


async function fetchCourseInfo(courseId:string) {
    const res = await fetch(`http://localhost:3000/courses/${courseId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch courses')
    }
    return res.json()
  }

function CoursePage({ courseId }: { courseId: string }) {
    const { isPending, isError, data, error } = useQuery({
      queryKey: ['course', courseId],
      queryFn: () => fetchCourseInfo(courseId),
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
       <Link to="/courses"><button>Back to Courses Page</button></Link>
            <br></br>
            <br></br>
            <h1> {`${course.title}`} -------------------------- Grade</h1>
      </div>
    )
  }
}

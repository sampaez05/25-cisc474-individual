import { useQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'
import {Course} from '../../interfaces/course.interface'

export const Route = createFileRoute('/courses')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div>
    <Courses/>
    </div>
  )
}

async function fetchCoursesList() {
    const res = await fetch('http://localhost:3000/courses')
    if (!res.ok) {
      throw new Error('Failed to fetch courses')
    }
    return res.json()
  }

function Courses() {
    const { isPending, isError, data, error } = useQuery({
      queryKey: ['courses'],
      queryFn: fetchCoursesList,
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
        {data.map((course:Course) => (
          <Link to={`/${course.title}`} key={course.id}><li><u>{course.title}</u></li></Link>
        ))}
      </ul>
    )
  }
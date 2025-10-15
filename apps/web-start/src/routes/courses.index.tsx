import { useQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'
import {Course} from '../../interfaces/course.interface'
import { backendFetcher } from '../integrations/fetcher'
//import {backend} from '../../../api/src/main'

export const Route = createFileRoute('/courses/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div>
    <Courses/>
    </div>
  )
}


const baseUrl =
  import.meta.env.DEV
    ? import.meta.env.VITE_BACKEND_URL_LOCAL
    : import.meta.env.VITE_BACKEND_URL_PROD;

async function fetchCoursesList() {
    /*const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/courses")
    if (!res.ok) {
      throw new Error('Failed to fetch courses')
    }
    return res.json()*/
    console.log("local is "+import.meta.env.VITE_BACKEND_URL_LOCAL);
    return () =>
    fetch(baseUrl + "/courses").then((res) =>
      res.json(),
    );
  }

function Courses() {
    const { isPending, isError, data, error } = useQuery({
      queryKey: ['courses'],
      /*queryFn: async () => {
        const fn = await fetchCoursesList(); // this gives you the inner function
        return fn(); // call it to get the JSON promise
      },*/
      queryFn: backendFetcher<Course[]>('courses')
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
          <Link to='/courses/$courseId' key={course.id} params={{ courseId: course.id.toString() }}><li><u>{course.title}</u></li></Link>
        ))}
      </ul>
    )
  }
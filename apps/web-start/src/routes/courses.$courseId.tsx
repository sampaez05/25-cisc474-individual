import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'
import { Course } from '../../interfaces/course.interface'
import { Assignment } from '../../interfaces/assignment.interface'
import { backendFetcher, mutateBackend } from '../integrations/fetcher'
import type {CourseOut, CourseUpdateIn} from '../../../../packages/api/src/courses'
import type {AssignmentOut} from '../../../../packages/api/src/assignments'
import { useState } from 'react'
import { useApiMutation, useCurrentUser } from '../integrations/api'


export const Route = createFileRoute('/courses/$courseId')({
  component: CourseComponent,
  //loader: ({context:{queryClient}}) => queryClient.ensureQueryData(courseQueryOptions)
})

function CourseComponent() {
    const {courseId} = Route.useParams();
    const [showUpdate, setShowUpdate] = useState(false);
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
        <h1>Assignments:</h1>
        <AssignmentsList courseId={courseId}/> 
        <br></br>
        <br></br>
        <button onClick={()=>setShowUpdate(true)}><u>Update This Course</u></button>
        {showUpdate && <Update course={course} />}
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
    if (error.message==="Failed to execute 'json' on 'Response': Unexpected end of JSON input"){
      return <span>This Class Has No Assignments</span>
    }
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
      <br></br>
      <h1>Assignments</h1>
      <Link to='/assignments/$assignmentId' key={assignment.id} params={{ assignmentId: assignment.id.toString() }}><u>{assignment.title} -------------------------- Due: {formattedDate}</u></Link>
    </div>
  )
}


function Update({course}:{course:CourseOut}){
  const { data: currentUser } = useCurrentUser();
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description);
  const [instructorId, setInstructorId] = useState(2001); //automatically makes instructor Professor Dana Lee from the database

  const queryClient = useQueryClient();

  /*const mutation = useMutation({
      mutationFn: (updatedCourse: CourseUpdateIn) => {
      return mutateBackend<CourseOut>(`courses/${course.id}`, 'PATCH', updatedCourse);
      },
      onSuccess: (data: CourseOut) => {
      queryClient.setQueryData(['courses', data.id], data);
      },
  });*/

  const mutation = useApiMutation<CourseUpdateIn, CourseOut>({
    endpoint: (variables) => ({
      path: `courses/${course.id}`,
      method: 'PATCH',
    }),
    invalidateKeys: [['courses']],
  });

return (<div>
      <header>
      <h1>Update Course</h1>
    </header>
    {mutation.isPending ? (
      <div>Updating course...</div>
    ) : (
      <>
        {mutation.isError ? (
          <div>Error updating course: {mutation.error.message}</div>
        ) : null}
        {mutation.isSuccess ? (
          <div>Course updated successfully! ID: {mutation.data.id}</div>
        ) : null}
        <hr></hr>
        <div>
          <input
            type="text"
            placeholder="Course Name"
            value={course.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Course Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Instructor ID"
            value={instructorId}
            onChange={(e) => setInstructorId(Number(e.target.value))}
          />
        </div>
        <div></div>
        <div>
          <button
            onClick={() => {
              mutation.mutate({
                title: title,
                description: description,
                instructor_id: instructorId,
              });
            }}
          >
            Update Course
          </button>
        </div>
        <hr></hr>
        <div>
          <a href="/courses">Back to Courses</a>
        </div>
      </>
    )}
  </div>)
}

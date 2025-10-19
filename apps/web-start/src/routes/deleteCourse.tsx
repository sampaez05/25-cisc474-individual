import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { mutateBackend } from '../integrations/fetcher';
import type {CourseOut, CourseDeleteIn} from '../../../../packages/api/src/courses'

export const Route = createFileRoute('/deleteCourse')({
  component: RouteComponent,
})

function RouteComponent() {

    const [title, setTitle] = useState('');
    const [courseId, setCourseId] = useState(0);
  
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (course: CourseDeleteIn) => {
        return mutateBackend<CourseOut>(`courses/${courseId}`, 'DELETE', course);
        },
        onSuccess: (data: CourseOut) => {
        queryClient.setQueryData(['courses', data.id], data);
        },
    });
  
  return (<div>
        <header>
        <h1>Delete a Course</h1>
      </header>
      {mutation.isPending ? (
        <div>Deleting course...</div>
      ) : (
        <>
          {mutation.isError ? (
            <div>Error deleting course: {mutation.error.message}</div>
          ) : null}
          {mutation.isSuccess ? (
            <div>Course deleted successfully! ID: {mutation.data.id}</div>
          ) : null}
          <hr></hr>
          <div>
            <input
              type="text"
              placeholder="Course Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Course Id"
              //value={courseId}
              onChange={(e) => setCourseId(Number(e.target.value))}
            />
          </div>
          <div></div>
          <div>
            <button
              onClick={() => {
                mutation.mutate({
                  title: title,
                  id: courseId,
                });
              }}
            ><u>Delete Course</u>
            </button>
          </div>
          <hr></hr>
          <div>
            <u><a href="/courses">Back to Courses</a></u>
          </div>
        </>
      )}
    </div>)
}

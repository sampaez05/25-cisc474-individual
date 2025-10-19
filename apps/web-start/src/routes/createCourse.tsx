import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { mutateBackend } from '../integrations/fetcher';
import type {CourseOut, CourseCreateIn} from '../../../../packages/api/src/courses'

export const Route = createFileRoute('/createCourse')({
  component: RouteComponent,
})

function RouteComponent() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [instructorId, setInstructorId] = useState(2001); //automatically makes instructor Professor Dana Lee from the database
  
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (newCourse: CourseCreateIn) => {
        return mutateBackend<CourseOut>('courses', 'POST', newCourse);
        },
        onSuccess: (data: CourseOut) => {
        queryClient.setQueryData(['courses', data.id], data);
        },
    });
  
  return (<div>
        <header>
        <h1>Create a New Course</h1>
      </header>
      {mutation.isPending ? (
        <div>Creating course...</div>
      ) : (
        <>
          {mutation.isError ? (
            <div>Error creating course: {mutation.error.message}</div>
          ) : null}
          {mutation.isSuccess ? (
            <div>Course created successfully! ID: {mutation.data.id}</div>
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
            ><u>Create Course</u>
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

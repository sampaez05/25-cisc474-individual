import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { mutateBackend } from '../integrations/fetcher';
import type {CourseOut, CourseCreateIn} from '../../../../packages/api/src/courses'
import { useApiMutation, useCurrentUser } from '../integrations/api';

export const Route = createFileRoute('/createCourse')({
  component: RouteComponent,
})

function RouteComponent() {
    const { data: currentUser } = useCurrentUser();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [instructorId, setInstructorId] = useState(currentUser?.id); //automatically makes instructor user 
  
    const queryClient = useQueryClient();

    /*const mutation = useMutation({
        mutationFn: (newCourse: CourseCreateIn) => {
        return mutateBackend<CourseOut>('courses', 'POST', newCourse);
        },
        onSuccess: (data: CourseOut) => {
        queryClient.setQueryData(['courses', data.id], data);
        },
    });
  */
    const mutation = useApiMutation<CourseCreateIn, CourseOut>({
      endpoint: (variables) => ({
        path: 'courses',
        method: 'POST',
      }),
      invalidateKeys: [['courses']],
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
          </div>
          <div></div>
          <div>
            <button
              onClick={() => {
                mutation.mutate({
                  title: title,
                  description: description,
                  instructor_id: Number(currentUser?.id),
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

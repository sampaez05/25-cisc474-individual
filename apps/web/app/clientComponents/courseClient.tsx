
'use client';
import { useEffect, useState } from 'react';
import { Course } from '../interfaces/course.interface';
import Link from 'next/link';

export default function CoursesClient() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const url = 'http://localhost:3000/';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched course in browser:', data);
        setCourses(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <ul>
        {courses.map(course => (
          <Link href={`/${course.title}`}><li key={course.id}><u>{course.title}</u></li></Link>
        ))}
      </ul>
    </div>
  );
}

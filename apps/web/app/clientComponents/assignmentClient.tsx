
'use client';
import { useEffect, useState } from 'react';
import { Assignment } from '../interfaces/assignment.interface';
import Link from 'next/link';

export default function AssignmentClient() {
  const [assignments, SetAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    const url = 'http://localhost:3000/assignments';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched assignments in browser:', data);
        SetAssignments(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <ul>
        {assignments.map(assignment => (
          <Link href={`/${assignment.course_id}/assignment/${assignment.title}`}><li key={assignment.id}><u>{assignment.title}</u></li></Link>
        ))}
      </ul>
    </div>
  );
}

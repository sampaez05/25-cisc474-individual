
import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link to="/courses"><button><u>View Your Courses</u></button></Link>
      <br></br>
      <Link to="/assignments"><button><u>View Your Assignments</u></button></Link>
    </div>
    );
}



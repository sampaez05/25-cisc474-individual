
import { Link, createFileRoute } from '@tanstack/react-router';
import LoginButton from '../components/loginButton';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <LoginButton/>

      <p>Ignore bottom stuff for now plz</p>
      <Link to="/courses"><button><u>View Your Courses!</u></button></Link>
      <br></br>
      <Link to="/assignments"><button><u>View Your Assignments!</u></button></Link>
      <br></br>
    </div>
    );
}



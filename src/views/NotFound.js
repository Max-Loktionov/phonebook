import { NavLink } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <h1>Page not found</h1>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
    </>
  );
}

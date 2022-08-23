import { useSelector } from 'react-redux';
import { NAVLink } from 'components/AppBar/AppBar.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <nav>
      <NAVLink to="/" style={{ margin: '20px' }}>
        Home
      </NAVLink>

      {isLoggedIn && <NAVLink to="/contacts"> Contacts </NAVLink>}
    </nav>
  );
};

export default Navigation;

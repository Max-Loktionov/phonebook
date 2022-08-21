import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import UserReg from 'components/UserReg';
import { Container, Header } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <UserReg />}
      </Header>
    </Container>
  );
}

import { useSelector } from 'react-redux';
import { useLogOutUserMutation } from 'redux/user/userApi';
import { Submit } from 'components/ContactsBook/ContactsBook.styled';
import defaultAva from './ava.png';
import { Box, Ava, Name } from './UserMenu.styled';

export default function UserMenu() {
  const [logOutUser] = useLogOutUserMutation();
  const name = useSelector(state => state?.auth?.user.name);
  const avatar = defaultAva;

  return (
    <Box>
      <Ava src={avatar} alt="" width="32" />
      <span>
        Welcome, <Name> {name}</Name>
      </span>
      <Submit type="button" onClick={logOutUser}>
        Log Out
      </Submit>
    </Box>
  );
}

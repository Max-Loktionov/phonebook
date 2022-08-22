import { useState } from 'react';
import { Input, Submit } from 'components/ContactsBook/Phonebook.styled';
import { useLogInUserMutation } from 'redux/user/userApi';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logInUser] = useLogInUserMutation();

  // const [show, setShow] = useState(false);
  // const handleClick = () => setShow(!show);

  const handleSubmit = e => {
    e.preventDefault();
    logInUser({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
        autoComplete="off"
        required
      />
      <Input
        type={'password'}
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
        autoComplete="off"
        required
      >
        {/* <button type="button" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </button> */}
      </Input>
      <Submit type="submit">Log In</Submit>
      {/* <Submit type="button" onClick={logOutUser} style={{ marginLeft: '20px' }}>
        Log Out
      </Submit> */}
    </form>
  );
};
export default LogIn;

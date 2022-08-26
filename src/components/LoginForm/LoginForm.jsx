import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useLogInUserMutation } from 'redux/user/userApi';
import {
  Form,
  Input,
  ButtonEye,
  InputWrapper,
  Button,
} from './LoginForm.styled.js';
import hidden from 'img/eye-off.svg';
import view from 'img/eye.svg';

export default function LoginForm() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(true);
  const onMouseUp = () => setShow(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logInUser, { isLoading }] = useLogInUserMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await logInUser({ email, password }).then(resp => {
        resp?.error &&
          Notify.failure(
            `Error ${resp.error.status} - wrong email or password`,
            {
              timeout: 5000,
              fontSize: '18px',
            }
          );
      });
    } catch (error) {
      Notify.failure(` Something goes wrong: ${error}`);
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} style={{ color: 'purple' }}>
        <Input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
          autoComplete="off"
          required
        />
        <InputWrapper>
          <Input
            type={show ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
            autoComplete="off"
            required
          />

          <ButtonEye
            type="button"
            name="show"
            onMouseDown={handleClick}
            onMouseUp={onMouseUp}
          >
            <img src={show ? view : hidden} alt="button view/hidden password" />
          </ButtonEye>
        </InputWrapper>
        <Button type="submit" disabled={isLoading}>
          Log in
        </Button>
      </Form>
    </div>
  );
}

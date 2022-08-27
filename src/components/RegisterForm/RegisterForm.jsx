import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSignUpUserMutation } from 'redux/user/userApi';
import {
  Form,
  Input,
  ButtonEye,
  InputWrapper,
  Button,
} from '../LoginForm/LoginForm.styled';
import hidden from 'img/eye-off.svg';
import view from 'img/eye.svg';

function RegisterForm() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(true);
  const onMouseUp = () => setShow(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [signUpUser] = useSignUpUserMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      signUpUser({ name, email, password }).then(resp => {
        resp?.error &&
          Notify.failure(
            ` Sorry, try one more time. ${resp.error.data.message} `,
            { timeout: 8000, fontSize: '18px' }
          );
      });
    } catch (error) {
      Notify.failure(` Something goes wrong: ${error}`);
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoComplete="off"
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email"
            autoComplete="off"
            required
          />
        </InputWrapper>

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

        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
}

export default RegisterForm;

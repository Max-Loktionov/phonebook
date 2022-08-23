import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSignUpUserMutation } from 'redux/user/userApi';
import { Input, Submit } from 'components/ContactsBook/Phonebook.styled';

const RegisterView = () => {
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
        console.log(resp.error);
      });
    } catch (error) {
      Notify.failure(` Something goes wrong: ${error}`);
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          required
        />
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
          autoComplete="off"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
          autoComplete="off"
          required
        />
        <Submit type="submit">Register</Submit>
      </form>
    </div>
  );
};

export default RegisterView;

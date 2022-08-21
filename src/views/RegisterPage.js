import { useState } from 'react';
import { useSignUpUserMutation } from 'redux/user/userApi';
import { Input, Submit } from 'components/ContactsBook/Phonebook.styled';

const RegisterView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [signUpUser] = useSignUpUserMutation();

  const handleSubmit = e => {
    e.preventDefault();

    signUpUser({ name, email, password });
    setEmail('');
    setPassword('');
    setName('');
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

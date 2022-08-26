// import { useState } from 'react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { useLogInUserMutation } from 'redux/user/userApi';
// import { Input, Submit } from 'components/ContactsBook/ContactsBook.styled';
// import hidden from 'img/eye-off.svg';
// import view from 'img/eye.svg';

// const LogIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [logInUser] = useLogInUserMutation();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       await logInUser({ email, password }).then(resp => {
//         resp?.error &&
//           Notify.failure(
//             `Error ${resp.error.status} - wrong email or password`,
//             {
//               timeout: 5000,
//               fontSize: '18px',
//             }
//           );
//       });
//     } catch (error) {
//       Notify.failure(` Something goes wrong: ${error}`);
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Input
//         type="text"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         placeholder="email"
//         autoComplete="off"
//         required
//       />
//       <Input
//         type={'password'}
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         placeholder="password"
//         autoComplete="off"
//         required
//       ></Input>
//       <Submit type="submit">Log In</Submit>
//     </form>
//   );
// };
// export default LogIn;

import LoginForm from 'components/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
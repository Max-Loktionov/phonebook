import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useUpdateContactMutation } from 'redux/contactsApi';
import { Input, Submit } from '../ContactsBook/Phonebook.styled';

export const EditContact = () => {
  const navigation = useNavigate();
  const [updateContact, { isLoading, isSuccess, isError }] =
    useUpdateContactMutation();
  const [form, setForm] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = e => {
    e.preventdefault();
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const { name, number } = form;
  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={name}
        onChange={handleInputChange}
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id="nameInputId"
      />
      <Input
        value={number}
        onChange={handleInputChange}
        id="numberInputId"
        placeholder="Number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Submit type="submit" disabled={isLoading}>
        {isLoading ? (
          <Oval
            ariaLabel="loading-indicator"
            height={16}
            width={48}
            strokeWidth={10}
            strokeWidthSecondary={10}
            color="orange"
            secondaryColor="yellow"
          />
        ) : (
          'Edit'
        )}
      </Submit>
    </form>
  );
};

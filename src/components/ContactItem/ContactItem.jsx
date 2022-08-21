import { useState } from 'react';
import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/contactsApi';
import Modal from 'components/Modal';
import { Form, Button, Item, Label, Input } from './ContactItem.styled';

function ContactItem({ name, number, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [updateContact, stat] = useUpdateContactMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const contact = {
        name: newName,
        number: newNumber,
      };
      await updateContact({ contact, id });

      if (!stat.isSuccess) {
        Notify.success(`contact ${name} has changed successfully`);
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Item>
      {name}: {number}
      <Button type="button" onClick={openModal}>
        Update
      </Button>
      <Button
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        {isLoading ? (
          <Oval
            ariaLabel="loading-indicator"
            height={10}
            width={16}
            strokeWidth={10}
            strokeWidthSecondary={10}
            color="orange"
            secondaryColor="yellow"
          />
        ) : (
          'Delete'
        )}
      </Button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">
              Name
              <Input
                value={newName}
                onChange={e => setNewName(e.target.value)}
                type="text"
                name="name"
                placeholder={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                id="name"
              />
            </Label>
            <Label htmlFor="number">
              Number
              <Input
                value={newNumber}
                onChange={e => setNewNumber(e.target.value)}
                id="number"
                placeholder={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </Label>
            <Button type="submit" disabled={isLoading}>
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
                'Change contact'
              )}
            </Button>
          </Form>
        </Modal>
      )}
    </Item>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;

import { useMemo } from 'react';
import ContactItem from '../ContactItem';

const ContactsList = ({ data }) => {
  const sortedContactsByName = useMemo(() => {
    const sortedContacts = data.slice();
    sortedContacts.sort((a, b) => a.name.localeCompare(b.name));
    return sortedContacts;
  }, [data]);

  return (
    <ul>
      {sortedContactsByName.map(contact => {
        return (
          <ContactItem
            name={contact.name}
            number={contact.number}
            id={contact.id}
            key={contact.id}
          ></ContactItem>
        );
      })}
    </ul>
  );
};

export default ContactsList;

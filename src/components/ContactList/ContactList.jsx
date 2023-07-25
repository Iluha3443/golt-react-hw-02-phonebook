import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export const ContactList = ({ contacts, filter, deleteNumber }) => {
  const filteredContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li className={css.contact} key={contact.id}>
          {contact.name}: {contact.number}
          <button className={css.btn} type='button' onClick={() => deleteNumber(contact.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  deleteNumber: PropTypes.func
};


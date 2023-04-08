import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ visibleContacts, deleteContact }) => {
  return (
    <List>
      {visibleContacts.length > 0 &&
        visibleContacts.map(contact => {
          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDeleteBtnClick={deleteContact}
            />
          );
        })}
    </List>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

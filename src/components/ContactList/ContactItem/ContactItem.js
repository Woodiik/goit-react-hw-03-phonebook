import { DeleteButton, ListItem } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact, onDeleteBtnClick }) => {
  const { id, name, number } = contact;
  return (
    <ListItem>
      {name}: {number}
      <DeleteButton type="button" onClick={() => onDeleteBtnClick(id)}>
        Delete
      </DeleteButton>
    </ListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteBtnClick: PropTypes.func.isRequired,
};

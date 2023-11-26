import React from 'react';
import styles from './ContactList.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContacts } from '../../redux/operations';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul className={ styles.contactList }>
      {contacts.map(contact => (
        <li className={ styles.contactList_item } key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <button className={ styles.contactList_button } type="button" name="delete" onClick={() => dispatch(deleteContacts(contact.id))}>
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
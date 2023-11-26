import React from 'react';
import styles from './ContactList.module.css'

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact());
  return (
    <ul className={ styles.contactList }>
      {contacts.map(contact => (
        <li className={ styles.contactList_item } key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <button className={ styles.contactList_button } type="button" name="delete" onClick={handleDelete}>
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
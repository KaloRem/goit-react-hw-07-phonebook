import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts && contacts.length === 0 && (<div>Your phonebook is empty. Add first contact!</div>) }
      {contacts && contacts.length !== 0 && (<ContactList></ContactList>) }
      {contacts && contacts.length >= 2 && (<Filter></Filter>)}
    </div>
  );
};

export default App;
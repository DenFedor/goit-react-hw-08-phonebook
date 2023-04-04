import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import {
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';
import ResponsiveAppBar from 'components/AppBar/AppBar';
const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <>
      <ResponsiveAppBar />
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error ? <b>Request in progress...</b> : <ContactList />}
      <ToastContainer />
    </>
  );
};
export default Contacts;

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import {
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { useDispatch, useSelector } from 'react-redux';
import ResponsiveAppBar from 'components/AppBar/AppBar';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
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

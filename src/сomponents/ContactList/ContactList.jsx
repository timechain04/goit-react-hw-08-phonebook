import { useSelector } from 'react-redux';
import { useGetContactQuery } from 'redux/api/ContactsApi';
import ContactListItem from 'сomponents/ContactListItem/ContactListItem';

import { Spinner } from '@chakra-ui/react';

const ContactList = () => {
  const { data, isFetching } = useGetContactQuery();
  const filter = useSelector(state => state.filter);

  const contacts =
    data && data.filter(contact => contact.name.toLowerCase().includes(filter));

  return (
    <>
      {data && data.length !== 0 && (
        <ul>
          {contacts.length !== 0 ? (
            contacts.map(contact => (
              <ContactListItem key={contact.id} {...contact} />
            ))
          ) : (
            <p>there is no such contact: {filter}</p>
          )}
        </ul>
      )}
      {data && data.length === 0 && <p>Contact list is empty!</p>}
      {isFetching && (
        <Spinner
          thickness="1px"
          speed="2s"
          emptyColor="gray.200"
          color="green.500"
          size="xl"
        />
      )}
    </>
  );
};

export default ContactList;

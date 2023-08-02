import React from 'react';
import Filter from 'сomponents/Filter/Filter';
import ContactList from 'сomponents/ContactList/ContactList';
import ContactForm from 'сomponents/ContactForm/ContactForm';

import { Heading, Box } from '@chakra-ui/react';

const ContactsView = () => {
  return (
   <Box w="450px" mx="auto" my="5"
   padding={'15px 15px 15px 15px'}
   boxShadow={'rgba(3, 3, 3, 0.24) 0px 3px 8px;'}
   borderRadius={'20px'}
   >
     <Heading 
     textAlign={'center'}>Phonebook</Heading>
     <ContactForm />
     <Heading 
      textAlign={'center'}>Contacts</Heading>
     <Filter />
     <ContactList />
   </Box>
 );
};

export default ContactsView;

import React from 'react';
import { Navigate } from 'react-router-dom';
import { getLoggedin } from 'redux/slice/AuthSlise';
import { useSelector } from 'react-redux';
import Filter from 'сomponents/Filter/Filter';
import ContactList from 'сomponents/ContactList/ContactList';
import ContactForm from 'сomponents/ContactForm/ContactForm';

import { Heading, Box } from '@chakra-ui/react';

const ContactsView = () => {
  const isLogdedin = useSelector(getLoggedin);
  return (
   <Box w="450px" mx="auto" my="5"
   padding={'15px 15px 15px 15px'}
   boxShadow={'rgba(3, 3, 3, 0.24) 0px 3px 8px;'}
   borderRadius={'20px'}
   >
     {!isLogdedin && <Navigate to="/" replace={true} />}
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

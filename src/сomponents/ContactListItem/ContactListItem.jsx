import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactsMutation } from 'redux/api/ContactsApi';
import { toast } from 'react-toastify';
import { Flex, Box, Button } from '@chakra-ui/react';

const ContactListItem = ({ name, number, id }) => {
  const [deleteContacts, { isLoading: isDeleting, isSuccess, error }] =
    useDeleteContactsMutation();

  useEffect(() => {
    isSuccess && toast.info(` ${name} removed from the phonebook`);
    error && toast.error('oops something went wrong');
  }, [isSuccess, name, error]);

  return (
    <Box key={id} mb="5">
      <Flex alignItems="center" justifyContent="space-between" w="400px" mb="5"
      border={'1px solid #000'}
      p={'10px'}
      borderRadius={'10px'}
      backgroundColor={'#fff'} >
        {name}: {number}
        <Button
          type="button"
          height={'30px'}
          border={'rgba(0, 0, 0, 0.3) 1px solid'}
          borderRadius={'3px'}
          backgroundColor={'burlywood'}
          _hover={{ bg: 'red' }}
          onClick={() => deleteContacts(id)}
          disabled={isDeleting}
        >
          {isDeleting ? 'Delete...' : 'Delete'}
        </Button>
      </Flex>
    </Box>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;

import React from 'react';
import { useSelector } from 'react-redux';
import { getUserName } from 'redux/slice/AuthSlise';
import { useUserLogoutMutation } from 'redux/api/AuthApi';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

const UserMenu = () => {
  const name = useSelector(getUserName);
  const [userLogout] = useUserLogoutMutation();

  return (
    <Box>
      <Flex h={16} alignItems={'center'} 
      >
        <Text fontSize="23px" color="green"  mr={30}>
        Hi, {name} !
        </Text>
        <Button
          type="button"
          bg={'burlywood'}
          width={'100px'}
          borderRadius={'3px'}
          padding={'23px'}
          color={'white'}
          _hover={{ bg: '#fc2706' }}
        
          onClick={() => {
            userLogout();
          }}
        >
          Log Out
        </Button>
      </Flex>
    </Box>
  );
};

export default UserMenu;

import React from 'react';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import { Box, Flex } from '@chakra-ui/react';

const AppBar = () => {
  return (
    <Box>
      <Flex alignItems={'center'} justifyContent={'space-evenly'}>
        <Navigation />
        <UserMenu />
      </Flex>
    </Box>
  );  
};

export default AppBar;

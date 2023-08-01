import { NavLink } from 'react-router-dom';
import { Flex, Button, Text, VStack, Box } from '@chakra-ui/react';

const WithBackground = () => {
  return (
<Box 
marginTop={'30px'}
borderRadius={'30px'}
marginLeft={'auto'}
marginRight={'auto'}
w='650px'
h='800px'

bgGradient='linear(blue.100 0%, green.100 25%, blue.100 50%)'
>
  <Flex>
    <VStack
  w={'full'}
  justifyContent={'center'}
  marginTop={'250px'}
  >
 
    <Text
   color={'black'}
   fontWeight={700}
   fontSize={'38px'}
   fontStyle={'italic'}
   marginBottom={'40px'}
    >
      The Phone Book
    </Text>

   <Button
     as={NavLink}
     to="register"
     bg={'burlywood'}
     width={'240px'}
     borderRadius={'3px'}
     padding={'23px'}
     color={'white'}
     _hover={{ bg: '#38a6b4' }}
   >
     Register
   </Button>
   
   <Button
     as={NavLink}
     to="login"
     bg={'burlywood'}
     width={'240px'}
     padding={'23px'}
     borderRadius={'3px'}
     color={'white'}
     _hover={{ bg: '#38a6b4' }}
   >
     Log in
   </Button>
    </VStack>
  </Flex>
  </Box>
  );
};

export default WithBackground;

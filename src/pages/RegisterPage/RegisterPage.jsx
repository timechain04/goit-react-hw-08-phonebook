import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserSignupMutation } from 'redux/api/AuthApi';
import {Flex, Box, FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack, Button,
} from '@chakra-ui/react';
 import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const SignupView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userSignup, ] = useUserSignupMutation();

  const handleInputChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await userSignup({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  let navigate = useNavigate();
  let location = useLocation();

  const goBack = () => {
    navigate(location?.state?.from || '/');
  };
  return (
    <Box 
    marginTop={'30px'}
borderRadius={'30px'}
    marginLeft={'auto'}
    marginRight={'auto'}
    w='500px'
    h='800px'
    bgGradient='linear(to-r, green.500, gray.400, blue.300)'>
    <Flex 
    >


      <Stack mx={'auto'}
      marginTop={'100px'} >
  <Stack >
  </Stack>
  <Box
    as="form"
    
    onSubmit={handleSubmit}
    p={20}
  
  >
    <Stack spacing={4}>
      <FormControl id="firstName" isRequired>
   <FormLabel color={'black'}>Name</FormLabel>
   <Input
     type="text"
     value={name}
     name="name"
     onChange={handleInputChange}
     color={'black'}
     
   />
 </FormControl>
 <FormControl id="email" isRequired>
   <FormLabel color={'black'}>Email</FormLabel>
   <Input
     pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
     onChange={handleInputChange}
     type="email"
     value={email}
     name="email"
     color={'black'}

   />
 </FormControl>
 <FormControl id="password" isRequired>
   <FormLabel color={'black'}>Password</FormLabel>
   <InputGroup>
     <Input
       onChange={handleInputChange}
       type={showPassword ? 'text' : 'password'}
       value={password}
       minLength={7}
       name="password"
       color={'black'}

     />
     <InputRightElement h={'full'}>
       <Button
         variant={'ghost'}
         onClick={() =>
           setShowPassword(showPassword => !showPassword)
         }
       >
         {showPassword ? <ViewIcon /> : <ViewOffIcon />}
       </Button>
     </InputRightElement>
   </InputGroup>
       </FormControl>
       <Stack spacing={10} pt={2}>
         <Button
           type="submit"
           disabled={name && email && password ? false : true}
           loadingText="Submitting"
           marginTop={'20px'}
           marginBottom={'30px'}
           bg={'white'}
           color={'black'}
           _hover={{ 
             bg: '#38a6b4',
           }}
         >
           Register
         </Button>
       </Stack>
       <Stack
         direction={{ base: 'column', sm: 'row' }}
         align={'start'}
         justify={'center'}
       >
         <Button type="button" onClick={goBack}
         bg={'white'}
         color={'black'}
         _hover={{ 
           color: 'white',
           bg: 'black',
         }}>
           Back
         </Button>
       </Stack>
       <Stack pt={6}>
         
       </Stack>
     </Stack>
        </Box>
      </Stack>
    </Flex>
    </Box>
  );
};

export default SignupView;

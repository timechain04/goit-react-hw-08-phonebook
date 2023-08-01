import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';

import { useUserLoginMutation } from 'redux/api/AuthApi';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
} from '@chakra-ui/react';
import { toast } from 'react-toastify';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLogin, { isSuccess, isError }] = useUserLoginMutation();
  useEffect(() => {
    isError && toast.error('Invalid email or password');
  }, [isSuccess, isError]);

  const handleInputChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
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

  const handleSubmit = event => {
    event.preventDefault();
    userLogin({
      email: email,
      password: password,
    });
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
      bgGradient="linear(to-r, gray.300, purple.300, green.200)"
    >
      <Flex>
        {isSuccess && <Navigate to="/contacts" replace={true} />}

        <Stack mx={'auto'} marginTop={'100px'}>
          <Stack align={'center'}></Stack>
          <Box
            as="form"
            p={20}
            borderRadius={'20px'}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Stack spacing={4}>
              <FormControl id="email">
      <FormLabel color={'black'}>Email</FormLabel>
      <Input
        type="email"
        pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
        required
        onChange={handleInputChange}
        name="email"
        value={email}
        color={'black'}
      />
    </FormControl>
    <FormControl id="password">
      <FormLabel color={'black'}>Password</FormLabel>
      <Input
        type="password"
        onChange={handleInputChange}
        value={password}
        name="password"
        color={'black'}
      />
    </FormControl>
    <Stack spacing={10}>
      <Button
        disabled={email && password ? false : true}
        type="submit"
        marginTop={'20px'}
        bg={'white'}
        color={'black'}
        _hover={{
          bg: '#38a6b4',
        }}
      >
        Log in
      </Button>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        align={'start'}
        justify={'center'}
      >
        <Button
          type="button"
          onClick={goBack}
          bg={'white'}
          color={'black'}
          _hover={{
            color: 'white',
            bg: 'black',
          }}
        >
          Back
        </Button>
      </Stack>
    </Stack>
  </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default LoginView;

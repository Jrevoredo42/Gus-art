import { GetServerSideProps } from 'next';
import { signIn, getSession } from 'next-auth/react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Login() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('blueBrand', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Fazer login com sua conta</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={20}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel color={'black'}>E-mail</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel color={'black'}>Senha</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox color={'black'} mr={5}>Me lembrar</Checkbox>
                  <Link color={'blue.700'}>esqueceu a senha?</Link>
                </Stack>
                <Button
                  bg={'greenBrand'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Fazer Login
                </Button>
                <Button
                  bg={'red.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={() => signIn('google')}
                  >
                  Inicie seu cadastro com o Google
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

  export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    console.log(session);

      if(session){
        return {
          redirect: {
            destination: '/cadastro/userRegister',
            permanent: false
          }
        }
      }

    return {
      props: {
       
      }

    }
  }



 
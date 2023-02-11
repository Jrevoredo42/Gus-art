import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react';
  
  interface ProductProps{
    tag: string,
    name: string,
    urlImg: string,
  }
  
export default function CardProduct({tag, name, urlImg,}: ProductProps){
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={9}
          maxW={'335px'}
          w={'full'}
          bg={useColorModeValue('yellow.400', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: '/products/cesto-product.svg',
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={urlImg}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.600'} fontSize={'sm'} textTransform={'uppercase'}>
              {tag}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} color={'black'}>
                {name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Conhecer obra
            </Button>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }


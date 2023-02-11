import { ReactElement } from 'react';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';

  interface ArtistProps {
    name: string;
    nickname: string;
    description: string;
    // tags: string[];
    icon: ReactElement;
  }

  export default function CardArtist({name, nickname, description, icon}: ArtistProps) {
    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('yellow.400', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          {icon}
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            {nickname} 
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            {description}
          </Text>
  
          {/* <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            {tags.map((tag: string, index: number) => (
               <Badge
               key={String(index)}
               px={2}
               py={1}
               bg={useColorModeValue('gray.50', 'gray.800')}
               fontWeight={'400'}>
               {tag}
             </Badge> 
            ))}
          </Stack> */}
  
          <Stack mt={8} direction={'row'} spacing={4}>

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
              Conhecer perfil
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }
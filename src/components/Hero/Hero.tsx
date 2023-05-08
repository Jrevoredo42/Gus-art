import * as React from 'react';
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { AiFillFormatPainter } from 'react-icons/ai';

const Hero = () => {
  return (
    <Container maxW="6xl" px={{ base: 6, md: 5 }} py='80px' >
      <Flex direction={{ base: 'column', md: 'row', sm: 'column' }} justifyContent="center">
        <Stack direction="column" spacing={7} justifyContent="center" maxW="480px" mr={55}>
          <HStack
            as={Link}
            p={0}
            rounded="full"
            fontSize="sm"
            w="max-content"
            bg={useColorModeValue('gray.300', 'gray.700')}
            
          >
            <HStack spacing={1} alignItems="flex-start" justifyContent="flex-end" >
            </HStack>
          </HStack>
          <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left" color='redBrand'>
            O melhor espaço para se compartilhar cultura <br />
            <chakra.span color="blueBrand">PE na arte</chakra.span>
          </chakra.h1>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="black"
          >
            Encontre artistas de diversos segmentos dispostos a vender obras e serviços, ou encontre o público ideal para contemplar seu trabalho
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: '3rem !important', sm: 0 }}
            flexWrap="wrap"
          >
            <chakra.button
              w={{ base: '100%', sm: 'auto' }}
              h={12}
              px={10}
              color="white"
              fontSize="lg"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              zIndex={5}
              lineHeight={1}
              bgGradient="linear(to-l, #0ea5e9,blueBrand)"
              _hover={{ bgGradient: 'linear(to-l, #0ea5e9,#2563eb)', opacity: 0.9 }}
            >
              <chakra.span> conheça o site </chakra.span>
              <Icon as={AiFillFormatPainter} h={4} w={4} ml={1} />
            </chakra.button>
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <Image
            w="100%"
            h="100%"
            minW={{ base: 'auto', md: '30rem', sm: '15rem' }}
            objectFit="cover"
            src='/luanda-ruanda.svg'
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
      </Flex>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}

export default Hero;
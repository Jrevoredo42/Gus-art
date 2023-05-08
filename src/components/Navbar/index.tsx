import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Tag,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { useSession } from 'next-auth/react';

const Links = ['Feira de arte', 'Minhas galerias'];

interface dataProfile{
    imageUrl: string
}

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('blueBrand', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function ProfileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('redBrand', 'gray.900')} px={4} py={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={72} alignItems={'center'}>
            <Box h={'20'}  mb={13}  >
            <Image
              rounded={'lg'}
              objectFit={'cover'}
              height={95}
              width={250}
              src='/logo.svg'
            />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <Menu>
              <MenuButton
                as={Button}
                rounded={'base'}
                variant={'solid'}
                cursor={'pointer'}
                minW={0}
                colorScheme={'telegram'}
                mr={7}
                >
                + Área de Criação
              </MenuButton>
              <MenuList bg={'blueBrand'}>
                <MenuItem 
                 bg={'blueBrand'} 
                _hover={{
                 color: 'black',
                 bg: useColorModeValue('whiteIceBrand', 'gray.700'),
                 }}>
                  Criar Obra
                </MenuItem>
                <MenuDivider />
                <MenuItem 
                 bg={'blueBrand'} 
                _hover={{
                 color: 'black',
                 bg: useColorModeValue('whiteIceBrand', 'gray.700'),
                 }}>
                  Criar Serviço
                </MenuItem>
                <MenuDivider />
                <MenuItem 
                 bg={'blueBrand'} 
                _hover={{
                 color: 'black',
                 bg: useColorModeValue('whiteIceBrand', 'gray.700'),
                 }}>
                  Criar Galeria
                </MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'lg'}
                  src={'/perfis/katarina/katarina_5.svg'}
                />
              </MenuButton>
              <MenuList bg={'blueBrand'}>
                <MenuItem 
                bg={'blueBrand'}
                _hover={{
                  color: 'black',
                  bg: useColorModeValue('whiteIceBrand', 'gray.700'),
                  }}
                >
                Editar perfil
                </MenuItem>
                <MenuDivider />
                <MenuItem 
                bg={'blueBrand'}
                _hover={{
                  color: 'black',
                  bg: useColorModeValue('whiteIceBrand', 'gray.700'),
                  }}
                >
                Sair
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}


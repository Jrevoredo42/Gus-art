import { 
  Avatar,
  Box,
  Text,
  Flex,
  Stack,
  Tag,
  Center,
 } from '@chakra-ui/react'
import { useState } from 'react'
import ProfileNav  from '../../../components/Navbar'


export default function profileArtist() {
  const [obras, setObras] = useState(24)
    return (
        <>
          <ProfileNav />
          <Box bg={'blueBrand'} mt={135} ml={174} w={1000} h={400} rounded={'2xl'}>
            <Avatar size={'2xl'} src={'/perfis/katarina/katarina_5.svg'} ml={430} mb={60} /> 
            <Text fontSize='4xl'mt={-230} ml={347}> Katarina Barbosa</Text>
            <Stack direction={'row'} spacing={24} my={-90} mx={15} w='350px' h="100px" >
              <Tag variant='outline' colorScheme='white' borderColor='white'>Obras: {obras}</Tag>
              <Tag variant='outline' colorScheme='blue'>Serviços: {obras}</Tag>
            </Stack>

        </Box>
        
       
      </>
      
    )

}


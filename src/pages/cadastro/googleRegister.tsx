import { 
    Button,
    Flex,
    useColorMode,
    useColorModeValue,
    Stack,
    Heading,
 } from "@chakra-ui/react"


export default function GoogleRegister(){
    return (
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('blue.800', 'gray.800')}>

        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Crie seus primeiros dados através da conta google</Heading>
          </Stack>

        </Stack>
         


        </Flex>
    )
}
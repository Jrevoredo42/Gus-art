import { 
    Button,
    Flex,
    Text,
    FormControl,
    useToast,
    Progress,
    Box,
    Heading,
    FormLabel,
    RadioGroup, 
    ButtonGroup,
    Input,
    InputGroup,
    InputRightElement,
    Textarea,
    FormHelperText,
    Stack,
} from "@chakra-ui/react"
import { CheckCircleIcon } from '@chakra-ui/icons'
import { BsFillEaselFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { useSession, signOut } from "next-auth/react"
import React, { useState } from "react";

interface typeUserProps {
 typeUser: String
}

interface stepProps {
  handleSecondStep: Function
}
const PasswordComponent = () => {
  const [show, setShow] = useState<Boolean>(false);
  const handleClick = () => setShow(!show);

  return(
    <Flex mt='4%'>
      <FormControl >
          <FormLabel htmlFor="password" fontWeight={'normal'} w="35">
            Senha
          </FormLabel>
          <InputGroup size="md">
            <Input
             pr="4.5rem"
             type={show ? 'text' : 'password'}
             placeholder="Digite sua senha"
             borderColor={"black"}
             />
             <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
             </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl mr="5%" ml="8">
          <FormLabel htmlFor="password" fontWeight={'normal'}>
            Repita a senha
          </FormLabel>
            <InputGroup size="md">
            <Input
             pr="4.5rem"
             type={show ? 'text' : 'password'}
             placeholder="Digite novamente sua senha"
             borderColor={"black"}
             />
             <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
             </InputRightElement>
          </InputGroup>
        </FormControl>
    </Flex>
    
  )
 
}

const FormTypeUser = (props: typeUserProps) => {

    return (
        <>
          <Heading w= '100%' textAlign={'center'} fontWeight='normal' mb='8%'>
            Tipo de usuário
          </Heading>
          <FormControl as='fieldset' alignItems={'center'} alignContent={'center'}>
            <FormLabel as='legend' htmlFor='type-user' ml='36'>
              Selecione qual o tipo de usuário você será na plataforma
            </FormLabel>
            <RadioGroup defaultValue='Artista' ml='56' mt='42'>
            <ButtonGroup variant='solid' spacing='6' ml={'9'}>
              <Button 
              leftIcon={<BsFillEaselFill/>} 
              colorScheme='pink'
              // onClick={() => props.handleUpdateTypeUser('artista')}
              >
              Artista
              </Button>
              <Button 
              leftIcon={<BsFillPeopleFill />} 
              colorScheme='green'
              // onClick={() =>}
              >
              Público
              </Button>
            </ButtonGroup>
            </RadioGroup>
          </FormControl>           
        </>
    )
}

// const FormUser = () => {

//   // props.handleSecondStep();
//     return (
//       <>
//         <Heading w= '100%' textAlign={'center'} fontWeight='normal' mb='8%'>
//             Cadastro de Usuário
//         </Heading>
        
//           <FormControl mr="2%">
//             <FormLabel htmlFor="full name" fontWeight={'normal'}>
//               Nome Completo
//             </FormLabel>
//             <Input id="fullName" placeholder="digite seu nome completo" borderColor={"black"}/>
//           </FormControl>
//         <Flex  mt="4%">
//         <FormControl mr="5%">
//           <FormLabel htmlFor="Email" fontWeight={'normal'}>
//             Email
//           </FormLabel>
//           <Input id="email" placeholder="Digite seu email" borderColor={"black"} type="email"/>
//         </FormControl>

//         <FormControl >
//           <FormLabel htmlFor="password" fontWeight={'normal'} w="35">
//             Senha
//           </FormLabel>
//           <InputGroup size="md">
//             <Input
//              pr="4.5rem"
//              type={show ? 'text' : 'password'}
//              placeholder="Digite sua senha"
//              borderColor={"black"}
//              />
//              <InputRightElement width="4.5rem">
//               <Button h="1.75rem" size="sm" onClick={handleClick}>
//                 {show ? 'Hide' : 'Show'}
//               </Button>
//              </InputRightElement>
//           </InputGroup>
//         </FormControl>
//       </Flex>
//       <Flex  mt="4%">
//         <FormControl mr="5%">
//           <FormLabel htmlFor="password" fontWeight={'normal'}>
//             Repita a senha
//           </FormLabel>
//             <InputGroup size="md">
//             <Input
//              pr="4.5rem"
//              type={show ? 'text' : 'password'}
//              placeholder="Digite novamente sua senha"
//              borderColor={"black"}
//              />
//              <InputRightElement width="4.5rem">
//               <Button h="1.75rem" size="sm" onClick={handleClick}>
//                 {show ? 'Hide' : 'Show'}
//               </Button>
//              </InputRightElement>
//           </InputGroup>
//         </FormControl>

//         <FormControl >
//           <FormLabel htmlFor="idade" fontWeight={'normal'} w="35">
//             Idade
//           </FormLabel>
//           <Input id="password" placeholder="Digite sua sua idade"  borderColor={"black"} type="number" w="100%"/>
//         </FormControl>
//       </Flex>
//       </>
//     )
// }

// Campo de idade


const FormArtist = () => {
  const [clicked, setClicked] = useState(false);
    return(
      <>

        <Heading w= '100%' textAlign={'center'} fontWeight='normal' mb='8%'>
            Cadastro de Artista
        </Heading>
          <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="full-name" fontWeight={'normal'}>
            Nome Completo
          </FormLabel>
          <Input id="full-name" placeholder="Digite seu nome completo" borderColor={"black"}/>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="age" fontWeight={'normal'}>
            Idade
          </FormLabel>
          <Input id="age" placeholder="digite sua idade" borderColor={"black"} w={"90%"} type={"number"}/>
        </FormControl>
      </Flex>

        <Flex  mt="4%">
        <FormControl mr="5%">
        <FormLabel htmlFor="Email" fontWeight={'normal'}>
            Email
          </FormLabel>
          <Input id="email" placeholder="Digite seu email" borderColor={"black"} type="email"/>
        </FormControl>    
      </Flex>

        <PasswordComponent />  

        <FormControl mr="2%">
          <FormLabel fontSize="sm" fontWeight="md" color="gray.900" mt="4%">
            Biografia
          </FormLabel>
          <Textarea 
          placeholder="Digite aqui sua biografia"
          shadow="sm"
          focusBorderColor="brand.400"
          fontSize="sm"
          borderColor="black"
          />
          <FormHelperText>
            Aproveite para falar sobre você, seu trajeto, história artística e experiências durante sua estrada, assim como o estilo de trabalho.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="sm" fontWeight="md" color="gray.900" mt="12" mb="6" htmlFor="button">Digite os etilos de arte que você produz</FormLabel>
            <Stack 
            direction="row" 
            spacing={4} 
            align="center" 
            mb="12" 
            border="2px" 
            borderColor={"gray.600"} 
            borderRadius={"4"}
            
            maxWidth={"100%"}
            >
            <Button 
            colorScheme='teal' 
            variant='solid' 
            size="sm"
            onClick={() => setClicked(!clicked)}
            isActive={clicked}
           
            >
              Cultura Popular e tradicional
            </Button>
            <Button 
            colorScheme='red' 
            variant='solid' 
            size="sm"
            onClick={() => setClicked(!clicked)}
            isActive={clicked}
            
            >
              Artes Plásticas
            </Button>
            <Button 
            colorScheme='yellow' 
            variant='solid' 
            size="sm"
            onClick={() => setClicked(!clicked)}
            isActive={clicked}
            
            >
              Artesanatos
            </Button>
            <Button 
            colorScheme="purple"
            variant='solid' 
            size="sm"
            onClick={() => setClicked(!clicked)}
            isActive={clicked}
           
            >
              Design e Moda
            </Button>
            <Button 
            colorScheme='orange' 
            variant='solid' 
            size="sm"
            onClick={() => setClicked(!clicked)}
            isActive={clicked}
            
            >
              Literatura
            </Button>
            <Button 
            colorScheme='pink' 
            variant='solid' 
            size="sm"
            onClick={() => setClicked(!clicked)}
            isActive={clicked}
           
            >
             Musica
            </Button>
            <Button 
            colorScheme='facebook' 
            variant='solid' 
            size="sm"
            onClick={() => setClicked(!clicked)}
            isActive={clicked}
            
            >
              Teatro
            </Button>
          </Stack>
        </FormControl>
        <FormControl mr="5%" mt="5">
        <Stack direction="row" align="center" ml="56">
          <Button variant="solid" colorScheme="telegram">
            Deseja criar galeria de arte?
          </Button>
        </Stack>
        </FormControl>
      </>
    )
}

const Success = () => {
  return(
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        This is the headline
      </Heading>
      <Text color={'gray.500'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
    </Box>
  );
}


export default function userRegister(){

    const { data: session } = useSession();
    const [step, setStep] = useState<number>(2);
    const [progress, setProgress] = useState<number>(20);
    const [typeUser, setTypeUser] = useState<String>('');


    const updateStep = () => {
      setStep(step+1);
    }
    // const formDirection = () => {
    //   if (typeUser === 'artista' || typeUser === 'publico'){
    //     setStep(step + 1);
    //     return (
    //       <FormUser />
    //     )
    //   }
    // }

    return(
        <>
            <Box
              borderWidth="1px"
              rounded="lg"
              shadow="1px 1px 3px rgba(0,0,0,0.3)"
              maxWidth={800}
              p={6}
              m="140px auto"
              as="form"
              bg={'gray.300'}
              textColor={'black'}>
            <Progress
            value={progress}
            mb='5%'
            mx='5%'
            isAnimated={true}
            hasStripe={true}
            ></Progress>
            <FormArtist/>
            <ButtonGroup mt='5%' w='100%'>
              <Flex w='100%' justifyContent='space-between'>
                <Flex>
                  <Button
                  onClick={()=> {
                    setStep(step - 1)
                  }}
                  isDisabled={step === 1}
                  colorScheme='teal'
                  variant='solid'
                  w='7rem'
                  mr='5%'
                  >
                    Voltar
                  </Button>
                  <Button
                  w="7rem"
                  isDisabled={step === 3 || step === 1}
                  onClick={() => {
                  setStep(step + 1);
                    if (step === 3) {
                      setProgress(100);
                    }}
                   }
                  colorScheme="teal"
                  variant="outline"
                  >
                  Next
                </Button>
                </Flex>
              </Flex>
            </ButtonGroup>
            </Box>


        <br></br>
        <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'/login'}
              color={'white'}
              onClick={()=> signOut()}
              >
              Fazer Logout
            </Button>
     </>
    )
}
  {/* //enum TypeUser { */}
  {/* //   USER = 'user',
  //   ARTIST = 'artist',
  //   PUBLIC = 'public',
  // }

  // const [userType, setUserType] = useState<TypeUser>(TypeUser.USER)
  
  
  // async function returnTypeUse(TypeUser: TypeUser) {
  //   await setUserType(TypeUser)
  //   console.log(userType)
  // } */}
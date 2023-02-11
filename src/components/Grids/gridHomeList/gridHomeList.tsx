import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcPanorama, FcWorkflow, FcCollaboration } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600} color={'yellow.400'}>{title}</Text>
      <Text color={'gray.300'}>{text}</Text>
    </Stack>
  );
};

export default function GridHomeList() {
  return (
    <Box p={4} mt={28}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcPanorama} w={10} h={10} />}
          title={'Encontre oque procura'}
          text={
            `Seja um artista que presta serviços culturais ou que produza obras, 
            assim como um público que vá consumir uma obra ou serviço, aqui você pode fazer ambos
            para fortalecer a comunidade artística`
          }

        />
        <Feature
          icon={<Icon as={FcWorkflow} w={10} h={10} />}
          title={'Conecte-se com a cultura local'}
          text={
            `Consiga ter contato e conhecimento de diversas liguagens da cultura e de seus produtores tão perto de sua localidade
             e que talvez você nem tenha consciência ainda, explore todo o potencial de sua comunidade`
          }
        />
        <Feature
          icon={<Icon as={FcCollaboration} w={10} h={10} />}
          title={'tenha um contato direto com seu público ou artista'}
          text={
            `Interaja diretamente com os indivíduos alvos para realizar seu objetivo. Seja um artista 
            vendendo uma obra e serviço, assim como um público interessado em adquirir algum produto,
            tenha contato direto com a pessoa para negociar os processos de venda e aquisição. `
          }
        />
      </SimpleGrid>
    </Box>
  );
}
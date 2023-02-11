import { SimpleGrid, Box, Avatar } from "@chakra-ui/react";
import  CardArtist  from '../../Cards/CardArtist/CardArtist';

export default function ArtistHomeGrid() {
    return(
        <Box>
            <SimpleGrid columns={{base: 1, md: 3}}>
                <CardArtist 
                name={'Luciana Revoredo'} 
                nickname={'@luqfaz'} 
                description={`artesã, trabalha com diversas linguagens manuais tendo crochê como principal base, 
                produzindo obras como bolsas, roupas, vasos e tudo que a imaginação lhe vier a mente. Além disso,
                também vende bijuterias diversas.`}
                // tags={['#manual', '#obras', '#crochê']}
                icon={<Avatar
                    size={'xl'}
                    src='/perfis/luqfaz-perfil.svg'
                    mb={4}
                    pos={'relative'}
                    _after={{
                      content: '""',
                      w: 4,
                      h: 4,
                      bg: 'green.300',
                      border: '2px solid white',
                      rounded: 'full',
                      pos: 'absolute',
                      bottom: 0,
                      right: 3,
                    }}
                  />}
                />
                <CardArtist
                name={'Aldeia Tear'}
                nickname={'@aldeiatear'}
                description={`Aldeia Tear é uma produtora cultural que realiza projetos,eventos e ações culturais
                promovidas e formadas por artistas da própria região há mais de uma década. Dentre seus projetos, ações que são desenvolvidas
                até hoje são caracterizados como amostra mundaú, FEMUAG e  luanda ruanda e Ayó - histórias de griô`}
                icon={<Avatar
                  size={'xl'}
                  src='/perfis/aldeiatear-perfil.svg'
                  mb={4}
                  pos={'relative'}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                  }}
                />}
                />
                <CardArtist
                name={'Revoredo'}
                nickname={'@revoredo'}
                description={`Músico, compositor e produtor cultural, desenvolve diversos projetos que vão desde shows, 
                eventos de música, teatro, contação de história e literatura`}
                icon={<Avatar
                  size={'xl'}
                  src='/perfis/revoredo-perfil.svg'
                  mb={4}
                  pos={'relative'}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                  }}
                />}
                />
            </SimpleGrid>
        </Box>
    )

}
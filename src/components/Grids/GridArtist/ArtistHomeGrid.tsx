import { SimpleGrid, Box, Avatar } from "@chakra-ui/react";
import  CardArtist  from '../../Cards/CardArtist/CardArtist';

export default function ArtistHomeGrid() {
    return(
        <Box>
            <SimpleGrid columns={{base: 1, md: 3}}>
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
                name={'katarina Barbosa'} 
                nickname={'@katarina_barbosa'} 
                description={`UX Research, com formação em História, Serviço Social e produtora cultural, 
                tem seu trabalho focado em comunidades quilombolas, economia criativa e impacto social.
                Desenvolve projetos incentivados por editais nas linguagens de: música, literatura, 
                artes visuais, povos tradicionais e moda como produtora executiva, administrativa, curadora, 
                idealizadora, figurinista e performer.
                `}
                // tags={['#manual', '#obras', '#crochê']}
                icon={<Avatar
                    size={'xl'}
                    src='/perfis/katarina/katarina_3.svg'
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
                name={'Lili Novais'}
                nickname={'@lili'}
                description={`lili novais é cantora e compositora radicada em garanhuns-pe. a artista desenvolve um trabalho tão 
                delicado, quanto potente e traz para suas canções, suas percepções poéticas sobre o mundo, que reverberam no timbre
                 único de sua voz.`}
                icon={<Avatar
                  size={'xl'}
                  src='/perfis/lili.svg'
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
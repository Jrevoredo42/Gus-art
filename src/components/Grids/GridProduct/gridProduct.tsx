import { Box, SimpleGrid} from '@chakra-ui/react'
import CardProduct from "../../Cards/CardProduct/cardProduct";

export default function GridProduct(){
    return(
        <Box>
            <SimpleGrid columns={{base: 1, md: 3}}>
            <CardProduct 
            tag={'obra - @katarina_barbosa'} 
            name={'Oficina de modelagem e costura'} 
            urlImg={'/perfis/katarina/katarina_1.svg'}
            />
            <CardProduct 
            tag={'serviço - @lili'}
            name={`Show 'meu Canto no mundo'`}
            urlImg={'/perfis/lili.svg'}
            />
            <CardProduct 
            tag={'serviço - @aldeiaTear'}  
            name={'Luanda Ruanda'} 
            urlImg={'/services_/luanda-ruanda-service.svg'}
            />
            </SimpleGrid>
        </Box>
    )
}
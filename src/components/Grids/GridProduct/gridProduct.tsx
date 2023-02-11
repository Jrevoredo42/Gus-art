import { Box, SimpleGrid} from '@chakra-ui/react'
import CardProduct from "../../Cards/CardProduct/cardProduct";

export default function GridProduct(){
    return(
        <Box>
            <SimpleGrid columns={{base: 1, md: 3}}>
            <CardProduct 
            tag={'obra - @luqfaz'} 
            name={'Cesto de crochê'} 
            urlImg={'/products/cesto-product.svg'}
            />
            <CardProduct 
            tag={'serviço - @revoredo'}
            name={'Oficina: Te canto a canção'}
            urlImg={'/services_/oficina-tcc-service.svg'}
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
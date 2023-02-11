import GridHomeList from "../components/Grids/gridHomeList/gridHomeList"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import ArtistHomeGrid from "../components/Grids/GridArtist/ArtistHomeGrid"
import { Text, Center } from '@chakra-ui/react'
import GridProduct from "../components/Grids/GridProduct/gridProduct"
import Footer from "../components/Footer/footer"

export default function Home() {
  return (
    <>
     <Header />
     <Hero />
     <GridHomeList />
     <Text fontSize='3xl' mt={32} mb={28} ml={8}>Conheça alguns Artistas e Produtores</Text>
     <ArtistHomeGrid />
     <Text fontSize='3xl' mt={32} mb={28} ml={8}>Conheça alguns Produtos e serviços</Text>
    <GridProduct />
    <Center>
      <Text as='mark' fontSize='30px' mt={55} py={4} px={12} borderRadius={8} >Entre e consuma arte!</Text>
    </Center>
    <Footer />
    </>
  )
}

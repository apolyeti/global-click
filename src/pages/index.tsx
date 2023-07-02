import type { NextPage } from 'next'
import { VStack } from "@chakra-ui/react"
import Counter from "@components/Counter"
import { Center, Text} from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <VStack>
      <Center
        marginTop={"10vh"}>
        <Text fontSize="6xl" color="#CCA16D">
          click the button to increase the count!
        </Text>
        <Counter />
      </Center>
    </VStack>
  )
}

export default Home

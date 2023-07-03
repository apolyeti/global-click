import type { NextPage } from 'next'
import { VStack } from "@chakra-ui/react"
import Counter from "../components/Counter"
import { Center, Text} from '@chakra-ui/react'
import { io, Socket } from 'socket.io-client';
const socket: Socket = io('http://localhost:3000'); // Replace with your server URL



const Home: NextPage = () => {
  return (
    <VStack>
      <Center
        marginTop={"100px"}>
        <Text fontSize="6xl" color="#CCA16D">
          click
        </Text>
        <Counter socket={socket}/>
      </Center>
    </VStack>
  )
}

export default Home

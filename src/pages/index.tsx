import type { NextPage } from 'next'
import { VStack } from "@chakra-ui/react"
import Counter from "../components/Counter"
import { Center, Text} from '@chakra-ui/react'
import { io } from 'socket.io-client';
import { useState } from 'react';
 




const Home: NextPage = () => {
  const [socket] = useState(io());
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

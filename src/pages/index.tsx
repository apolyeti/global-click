import type { NextPage } from 'next'
import { VStack } from "@chakra-ui/react"
import Counter from "../components/Counter"
import { Center, Text} from '@chakra-ui/react'
import { io, Socket } from 'socket.io-client';
import { useEffect, useState } from 'react';




const Home: NextPage = () => {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  useEffect(() => {
    socketInitializer();

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);
  
  const socketInitializer = async () => {
    try {
      await fetch('/api/socket');
      const newSocket = io();
      setSocket(newSocket);

      newSocket.on('connect', () => {
        console.log('connected');
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <VStack>
      <Center
        marginTop={"100px"}>
        <Text fontSize="6xl" color="#CCA16D">
          click
        </Text>
        {socket && <Counter socket={socket}/>}
      </Center>
    </VStack>
  )
}

export default Home

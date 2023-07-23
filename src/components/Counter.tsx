import { AbsoluteCenter, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Socket } from 'socket.io-client';

interface CounterProps {
    socket: Socket;
}



export default function Counter( {socket}: CounterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        socket.on('count', (count: number) => {
            setCount(count);
        });

        return () => {
            socket.off('count');
        }
    }, [socket]);

    const handleClick = () => {
        socket.emit('increment');
    }



    return (
        <AbsoluteCenter>
            <Button 
                id={"counter"}
                onClick={handleClick}
                borderColor={"#5d574e"}
                borderWidth={"3px"}
            >
                {count}
            </Button>
        </AbsoluteCenter>
    )
}

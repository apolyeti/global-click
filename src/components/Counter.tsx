import { AbsoluteCenter, Button, Text } from "@chakra-ui/react";
import { useState } from "react";


export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <AbsoluteCenter>
            <Button 
                id={"counter"}
                onClick={() => setCount(count + 1)}
            >
                {count}
            </Button>
        </AbsoluteCenter>
    )
}

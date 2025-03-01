import * as React from 'react';
import { useState } from 'react';

const Button = ({ children }) => {
    return (React.createElement("button", { style: {
            padding: '10px',
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px"
        } }, children));
};

const useCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return { count, increment, decrement };
};

export { Button, useCounter };

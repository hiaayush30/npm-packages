import * as React from 'react';


interface ButtonProps {
    children:React.ReactNode
}

const Button = ({children}:ButtonProps) => {
    return (
        <button style={{
            padding:'10px',
            backgroundColor:"blue",
            color:"white",
            borderRadius:"5px"
        }}>
            {children}
        </button>
    )
}
export { Button };

import { useState } from 'react';

export function Increment(){
    const [count, setState] = useState(0);

    const handleIncrement = () => {
        setState(count+1);
        console.log(count);
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}
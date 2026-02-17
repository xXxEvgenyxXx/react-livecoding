import { useState } from "react";

export function Counter(){
    const [counter, setCounter] = useState(0);

    const handleUp = ()=>{
        setCounter(counter+1);
    }

    const handleDown = () => {
        setCounter(counter-1);
    }

    return (
        <>
            <button onClick={() => handleUp()}>Увеличить значение состояния</button>
            <button onClick={() => handleDown()}>Уменьшить значение состояния</button>
            <p>Состояние: {counter}</p>
        </>
    )
}
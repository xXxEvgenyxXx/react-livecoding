import { useState } from "react";

export function UseStateButton(){
    const [state, toggleState] = useState(false);
    console.log(`state: ${state}`)

    function handleClick(){
        toggleState(!state)
    }

    return (
        <>
            <button onClick={() => handleClick()}>Сменить состояние</button>
            <p>Состояние: {state}</p>
        </>
    )
}
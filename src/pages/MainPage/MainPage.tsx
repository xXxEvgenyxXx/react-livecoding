import s from './MainPage.module.scss'
import { UseStateButton } from '../../components/useStateButton'
import { Counter } from '../../components/Counter'

export function MainPage(){
    return (
        <>
            <UseStateButton />
            <hr/>
            <Counter />
        </>
    )
}
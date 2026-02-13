import s from './Header.module.scss'
import { routes } from '../../routes'
import { Link } from 'react-router-dom'

export function Header(){
    return (
        <header className={s.header}>
            {
                routes.map((route) => (
                    <p><Link to={route.url}>{route.name}</Link></p>
                ))
            }
        </header>
    )
}
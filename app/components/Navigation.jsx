import React from 'react'
import Link from "next/link"
import styles from './Navigation.module.css'

const link = [
    {
        label: 'home',
        route: '/',
    },
    {
        label: 'about',
        route: '/about',
    },
    {
        label: 'posts',
        route: '/posts',
    },
]

const Navigation = () => {
    return (
        <header className={styles.header} >
            <nav >
                <ul className={styles.navigation} >
                    {link.map((item) => (
                        <li key={item.route}   >
                            <Link href={item.route} > {item.label} </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navigation
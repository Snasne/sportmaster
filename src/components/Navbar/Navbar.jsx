import React, { useState } from 'react'
import navbar from './Navbar.module.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const navbarDatas = [
    {
        id: 0,
        text: 'Рабочий день',
        path: '/'
    },
    {
        id: 1,
        text: 'Хранилище',
        path: '/storage'
    },
    {
        id: 2,
        text: 'Очистка',
        path: '/basket'
    },
    {
        id: 3,
        text: 'Настройки',
        path: '/settings'
    },
  ]

  return (
    <>
        <div className={navbar.background} style={{display: isOpen ? 'block' : 'none'}} onClick={() => setIsOpen(false)}></div>
        <button className={navbar.openNavbarButton} style={{right: isOpen ? '265px' : '0'}} onClick={() => setIsOpen(!isOpen)}>
            <div className={navbar.openNavbarButton__container}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
        <div className={navbar.openedNavbar} style={{right: isOpen ? '0' : '-350px'}}>
            <div className={navbar.icon}>

            </div>
            <h1>спортмастер</h1>
            {
                navbarDatas.map((navbarData) => 
                    <Link to={navbarData.path} key={navbarData.id}>
                        <button onClick={() => setIsOpen(!isOpen)}>{navbarData.text}</button>
                    </Link>
                )
            }
        </div>
    </>
  )
}

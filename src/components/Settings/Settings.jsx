import React, { useState } from 'react'
import settings from './Settings.module.scss'

export default function Settings() {

  const [hourSalary, setHourSalary] = useState((localStorage.getItem('hourSalary')) ? localStorage.getItem('hourSalary') : 150)
  const [countMP, setCountMP] = useState((localStorage.getItem('priceMP')) ? localStorage.getItem('priceMP') : 50)

  let milliseconds = 900

  const [isOpenSalary, setIsOpenSalary] = useState(false)
  const [isOpenCountMP, setIsOpenCountMP] = useState(false)
  const [isOpenDB, setIsOpenDB] = useState(false)

  const changeSalary = (ms) => {
    localStorage.setItem('hourSalary', hourSalary)
    setIsOpenSalary(true)
    setTimeout(() => {
      setIsOpenSalary(false)
    }, ms)
  }

  const changeCountMP = (ms) => {
    localStorage.setItem('priceMP', countMP)
    setIsOpenCountMP(true)
    setTimeout(() => {
      setIsOpenCountMP(false)
    }, ms)
  }

  const changeDB = (ms) => {
    localStorage.setItem('posts', JSON.stringify([]))
    setIsOpenDB(true)
    setTimeout(() => {
      setIsOpenDB(false)
    }, ms)
  }

  return (
    <div className={settings.wrapper}>
      <div className={settings.title}>
        <h1>Настройки</h1>
      </div>
      <div className={settings.container}>
        <h1>Часовая ставка</h1>
        <div className={settings.container__salary}>
            <input type="number" value={hourSalary ? hourSalary : localStorage.getItem('hourSalary')} onChange={(e) => setHourSalary(e.target.value)}/>
            <h1>руб/час</h1> 
        </div>
        <button onClick={() => changeSalary(milliseconds)}>Изменить</button>
        <p style={{display: isOpenSalary ? 'block' : 'none'}}>Успешно!</p>
      </div>
      <div className={settings.container}>
        <h1>Стоимость МР</h1>
        <div className={settings.container__salary}>
            <input type="number" value={countMP ? countMP : localStorage.getItem('priceMP')} onChange={(e) => setCountMP(e.target.value)}/>
            <h1>руб/шт</h1> 
        </div>
        <button onClick={() => changeCountMP(milliseconds)}>Изменить</button>
        <p style={{display: isOpenCountMP ? 'block' : 'none'}}>Успешно!</p>
      </div>
      <div className={settings.container}>
        <h1>База данных</h1>
        <button onClick={() => changeDB(milliseconds)}>Создать</button>
        <p style={{display: isOpenDB ? 'block' : 'none'}}>Успешно!</p>
      </div>
    </div>
  )
}

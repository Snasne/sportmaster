import React, { useState } from 'react'
import workDayStyles from './WorkDay.module.scss'

export default function WorkDay() {

  let arrayPosts = JSON.parse(localStorage.getItem('posts'))

  const [data, setData] = useState('')
  const [firstTime, setFirstTime] = useState('')
  const [secondTime, setSecondTime] = useState('')
  const [countMP, setCountMP] = useState('')

  const createNewPost = () => {
    if (data !== '' && firstTime !== '' && secondTime !== '' && countMP !== '') {

      let rawStartNumbersFirstTime = (firstTime !== '') ? +(((firstTime) + '').split(".")[0].substr(0,2)) : 0
      let rawLastNumbersFirstTime = (firstTime !== '' && firstTime.length > 2) ? +(((firstTime) + '').split(".")[1].substr(0,2)) : 0
      let rawStartNumbersSecondTime = (secondTime !== '') ? +(((secondTime) + '').split(".")[0].substr(0,2)) : 0
      let rawLastNumbersSecondTime = (secondTime !== '' && firstTime.length > 2) ? +(((secondTime) + '').split(".")[1].substr(0,2)) : 0

      let differenceStartNumbers = (rawLastNumbersSecondTime < rawLastNumbersFirstTime) ? ((Math.abs(rawStartNumbersSecondTime - rawStartNumbersFirstTime)) - 1) : (Math.abs(rawStartNumbersSecondTime - rawStartNumbersFirstTime))
      let differenceLastNumbers = (rawLastNumbersSecondTime < rawLastNumbersFirstTime) ? Math.abs((rawLastNumbersSecondTime + 60) - rawLastNumbersFirstTime) : Math.abs(rawLastNumbersSecondTime - rawLastNumbersFirstTime)

      let timeDifference = +(differenceStartNumbers + '.' + differenceLastNumbers)

      const newPost = {
        id: new Date().valueOf(), 
        data: data, 
        firstTime: firstTime,
        secondTime: secondTime,
        timeDifference: timeDifference,
        countMP: countMP
      }
      
      localStorage.setItem('posts', JSON.stringify([...arrayPosts, newPost]))
      setData('')
      setFirstTime('')
      setSecondTime('')
      setCountMP('')
    }
  }

  const [isCreated, setIsCreated] = useState(false)

  const checkCreatedDB = (ms) => {
    if ((JSON.parse(localStorage.getItem('posts')))) {
      createNewPost()
    } else {
      setIsCreated(true)
      setTimeout(() => {
        setIsCreated(false)
      }, ms)
    } 
  }


  return (
    <div className={workDayStyles.wrapper}>
      <div className={workDayStyles.title}>
        <h1>Рабочий день</h1>
      </div>
      <div className={workDayStyles.data}>
        <input type="text" placeholder='Введите дату:' value={data} onChange={(e) => {setData(e.target.value)}}/>
      </div>
      <div className={workDayStyles.time}>
        <h1>Время</h1>
        <div className={workDayStyles.perfomance}>
          <input type="text" placeholder='Начало:' value={firstTime} onChange={(e) => {setFirstTime(e.target.value)}}/>
          <input type="text" placeholder='Конец:' value={secondTime} onChange={(e) => {setSecondTime(e.target.value)}}/>
        </div>
      </div>
      <div className={workDayStyles.count__mp}>
          <input type="text" placeholder='Количество MP:' value={countMP} onChange={(e) => {setCountMP(e.target.value)}}/>
      </div>
      <button onClick={() => checkCreatedDB(1500)}>Создать</button>
      <p style={{display: isCreated ? 'block' : 'none'}}>Создайте хранилище в настройках!</p>
    </div>
  )
}

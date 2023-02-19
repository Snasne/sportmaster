import React from 'react'
import cardForDelete from './CardForDelete.module.scss'

export default function CardForDelete(props) {

  const changeStateButton = () => {
    props.removePost(props.arrayPost)
    props.changeCircle()
  }

  return (
    <div className={cardForDelete.container}>
        <div className={cardForDelete.containerForInfo}>
            <p>{props.data}</p>
            <p>{props.firstTime} - {props.secondTime}</p>
        </div>
        <div className={cardForDelete.containerForButton}>
            <button onClick={() => changeStateButton()}>X</button>
        </div>
    </div>
  )
}

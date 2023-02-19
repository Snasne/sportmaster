import React from 'react'
import card from './Card.module.scss'

export default function Card(props) {

  let hourSalary = (+localStorage.getItem('hourSalary')) ? (+localStorage.getItem('hourSalary')) : 150
  let priceMP = (+localStorage.getItem('priceMP')) ? (+localStorage.getItem('priceMP')) : 50
  let pricePerTime = Math.round(props.timeDifference * hourSalary)
  let pricePerQuantity = Math.round(+props.countMP * priceMP)
  let totalPrice = Math.round(pricePerTime + pricePerQuantity)

  return (
    <div className={card.container}>
        <p>{props.data}</p>
        <p>{props.firstTime} - {props.secondTime}</p>
        <p>{props.timeDifference} ч.({pricePerTime} руб.)</p>
        <p>MP: {props.countMP}({pricePerQuantity} руб.)</p>
        <div className={card.horizontalLine}></div>
        <p>Всего: {totalPrice} руб.</p>
    </div>
  )
}

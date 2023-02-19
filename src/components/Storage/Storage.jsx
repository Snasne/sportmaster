import React from 'react'
import Card from './Card/Card'
import storage from './Storage.module.scss'

export default function Storage() {

  let arrayPosts = (JSON.parse(localStorage.getItem('posts'))) ? (JSON.parse(localStorage.getItem('posts'))) : []
  let priceForOneMP = (localStorage.getItem('priceMP')) ? localStorage.getItem('priceMP') : 50
  let hourSalary = (localStorage.getItem('hourSalary')) ? localStorage.getItem('hourSalary') : 150

  let countMP = arrayPosts.reduce((acc, arrayPost) => {
    return acc + +arrayPost.countMP
  }, 0)
  let priceMP = countMP * priceForOneMP
  let workHours = (arrayPosts.reduce((acc, arrayPost) => {
    return acc + +(Math.abs(+arrayPost.timeDifference))
  }, 0)).toFixed(2)
  let pricePerTime = workHours * hourSalary
  let totalPrice = priceMP + pricePerTime

  let isDBCreated = (JSON.parse(localStorage.getItem('posts'))) ? true : false

  return (
    <div className={storage.wrapper}>
      <div className={storage.title}>
        <h1>Хранилище</h1>
      </div>
      <div className={storage.container} style={{display: isDBCreated ? 'block' : 'none'}}>
        {
          arrayPosts.map((arrayPost) =>
            <Card key={arrayPost.id} data={arrayPost.data} firstTime={arrayPost.firstTime} secondTime={arrayPost.secondTime} countMP={arrayPost.countMP} timeDifference={arrayPost.timeDifference}/>
          )
        }
        <h1>Всего: {totalPrice} руб.</h1>
        <h1>Из них: </h1>
        <h1>MP: {countMP}({priceMP} руб.)</h1>
        <h1>ЗП: {workHours} ч.({pricePerTime} руб.)</h1>
      </div>
    </div>
  )
}

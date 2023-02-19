import React, { useState } from 'react'
import basket from './Basket.module.scss'
import CardForDelete from './CardForDelete/CardForDelete'

export default function Basket() {

  let arrayPosts = (JSON.parse(localStorage.getItem('posts'))) ? (JSON.parse(localStorage.getItem('posts'))) : []

  const removePost = (post) => {
    localStorage.setItem('posts', JSON.stringify(arrayPosts.filter(p => p.id !== post.id)))
  }

  const [isOpen, setIsOpen] = useState(false)

  const changeCircle = () => {
    setIsOpen(true)
    setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }

  return (
    <div className={basket.wrapper}>
      <div className={basket.title}>
        <h1>Очистка</h1>
      </div>
      <div className={basket.loader} style={{display: isOpen ? 'block' : 'none'}}>

      </div>
      <div className={basket.container} style={{display: isOpen ? 'none' : 'flex'}}>
        {
          arrayPosts.map((arrayPost) =>
            <CardForDelete key={arrayPost.id} data={arrayPost.data} firstTime={arrayPost.firstTime} secondTime={arrayPost.secondTime} arrayPost={arrayPost} removePost={removePost} changeCircle={changeCircle}/>
          )
        }
      </div>
    </div>
  )
}

import React from 'react'
import Header from '../Header/Header'
import WorkDay from '../WorkDay/WorkDay'
import sportmasterStyles from './Sportmaster.module.scss'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Settings from '../Settings/Settings'
import Storage from '../Storage/Storage'
import Basket from '../Basket/Basket'

export default function Sportmaster() {

  return (
    <div className={sportmasterStyles.wrapper}>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<WorkDay/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/storage' element={<Storage/>}/>
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
    </div>
  );
}

import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import SectionLogin from '../components/SectionAccount/SectionLogin'
import SectionRegister from '../components/SectionAccount/SectionRegister'
import SectionContact from '../components/SectionContact/SectionContact'
import { Products } from '../data/Products'
import SectionAboutUs from '../components/SectionAboutUs/SectionAboutUs'
import SectionProducts from '../components/SectionProducts/SectionProducts'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path='*'  element={<Home/>}/>
    <Route path='/'  element={<Home/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/account' >
        <Route path='login' element={<SectionLogin/>}/>
        <Route path='register' element={<SectionRegister/>}/>
    </Route>
    <Route path='/contacto' element={<SectionContact/>}/>
    <Route path='/products'>
      <Route index element={<SectionProducts cat="todo"/>} />
      <Route path='zapatillas' element={<SectionProducts cat="zapatilla"/>}/>
      <Route path='buzos' element={<SectionProducts cat="buzo"/>}/>
      <Route path='joggings' element={<SectionProducts cat="jogging"/>}/>
      <Route path='shorts' element={<SectionProducts cat="short"/>}/>
      <Route path='remeras' element={<SectionProducts cat="remera"/>}/>
      <Route path='hombre' element={<SectionProducts cat="male"/>}/>
      <Route path='mujer' element={<SectionProducts cat="female"/>}/>
      <Route path='encontrados' element={<SectionProducts cat="encontrado"/>}/>
    </Route>
    <Route path='/nosotros' element={<SectionAboutUs/>}/>
    </Routes>
  )
}

export default AllRoutes
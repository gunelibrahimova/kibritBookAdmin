import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateLanguage from '../components/Language/CreateLanguage'
import Language from '../components/Language/Language'
import UpdateLanguage from '../components/Language/UpdateLanguage'

const MyRouter = () => {
  return (
    <Routes>
      <Route path='/language' element={<Language />}/>
      <Route path='/language/create' element={<CreateLanguage />}/>
      <Route path='/language/update/:id' element={<UpdateLanguage />}/>

    </Routes>
  )
}

export default MyRouter
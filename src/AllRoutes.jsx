import React from 'react'
import {Routes , Route } from 'react-router-dom'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import DisplayQuestion from './pages/Question/DisplayQuestion'
import Questions from './pages/Question/Questions'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Auth' Component={Auth}/>
        <Route path='/Questions' Component={Questions}/>
        <Route path='/AskQuestion' Component={AskQuestion}/>
        <Route path='/Questions/:id' Component={DisplayQuestion}/>
        <Route path = '/Tags' Component={Tags}/>  
        <Route path = '/Users' Component={Users}/>  
        <Route path = '/Users/:id' Component={UserProfile}/>  

    </Routes>
  )
}

export default AllRoutes
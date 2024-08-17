import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home,Login,Registrasi, Posts, SinglePost, NotFound } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/login' Component={Login}/>
          <Route path='/register' Component={Registrasi}/>
          <Route path='/posts' Component={Posts}/>
          <Route path='/posts/post' Component={SinglePost}/>
          <Route path='/*' Component={NotFound}/>
        </Routes>
        

    </Router>
  )
}

export default App

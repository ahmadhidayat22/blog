import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home,Login,Registrasi, Posts, SinglePost, NotFound } from './pages'
import { ThemeProvider } from './utils/ThemeContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>

    <div className='dark:bg-gray-800 dark:text-white '>

    <Router>    
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/login' Component={Login}/>
          <Route path='/register' Component={Registrasi}/>
          <Route path='/posts' Component={Posts}/>
          <Route path='/posts/post/:slug' Component={SinglePost}/>
          <Route path='/*' Component={NotFound}/>
        </Routes>
    </Router>
    </div>
    </ThemeProvider>

  )
}

export default App

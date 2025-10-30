import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import AddClasses from './pages/Dashboard/Addclasses'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/addclasses' element={<AddClasses/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import AddClasses from './pages/Dashboard/Addclasses'
import Viewclasses from './pages/Dashboard/ViewClasses'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/addclasses' element={<AddClasses/>} />
          <Route path='/viewclasses' element={<Viewclasses/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
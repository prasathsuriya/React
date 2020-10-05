import React from 'react'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import SearchMeter from './Pages/SearchMeter'
import Addmeter from './Pages/Addmeter'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/' component={Dashboard}/>
          <Route exact path='/pages/SearchMeter' component={SearchMeter}/>
          <Route exact path='/pages/Addmeter' component={Addmeter}/>
        </Switch>
      </Router>
    </div>
  )
}

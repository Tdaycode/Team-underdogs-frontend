import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './containers/home/home'
import Dashboard from './containers/dashboard/dashboard'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

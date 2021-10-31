import { useState } from 'react'
import style from './App.module.scss'
import {
  BrowserRouter as Router, 
  Switch,
  Route
 
} from "react-router-dom";
import {Home} from './pages/Home'

export function App() {
  return (
   <Router>
     <Switch>
       <Route path="/" component={Home} />
     </Switch>
   </Router>
  )
}


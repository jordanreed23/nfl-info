import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Teams from './Teams'
import Playoffs from './Playoffs'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/teams' component={Teams}/>
      <Route path='/playoffs' component={Playoffs}/>
    </Switch>
  </main>
)

export default Main

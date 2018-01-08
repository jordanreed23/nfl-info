import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullTeamList from './FullTeamList'
import Team from './Team'

const Teams = () => (
  <Switch>
    <Route exact path='/teams' component={FullTeamList}/>
    <Route path='/teams/:id' component={Team}/>
  </Switch>
)


export default Teams

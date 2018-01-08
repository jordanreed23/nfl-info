import React from 'react'
import TeamAPI from '../api'
import { Link } from 'react-router-dom'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Team = (props) => {
  const team = TeamAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!team) {
    return <div>Sorry, but the team was not found</div>
  }
  return (
    <div>
      <h1>{team.team}</h1>
      <h2>Super Bowl Wins: {team.superBowlWins}</h2>
      <h2>Super Bowl Appearances: {team.superBowlAppearances}</h2>
      <Link to='/teams'>Back</Link>
    </div>
  )
}

export default Team

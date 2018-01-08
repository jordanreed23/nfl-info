import React from 'react'
import TeamAPI from '../api'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullTeamList = () => (
  <div>
    <ol>
      {
        TeamAPI.all().map(p => (
          <li key={p.id}>
            <Link to={`/teams/${p.id}`}>{p.team}</Link>
          </li>
        ))
      }
    </ol>
  </div>
)

export default FullTeamList

import React from 'react'
import TeamAPI from '../api'
import {Link} from 'react-router-dom'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Playoffs = (props) => {

  return (<div>
    <h1>Teams remaining in the 2018 playoffs</h1>
    {
      TeamAPI.all().map(x => {
        if (x.inPlayoffs === true) {
          return (<h2>
            {x.team}
          </h2>)
        }
      })
    }

    <Link to='/'>Back</Link>
  </div>)
}

export default Playoffs

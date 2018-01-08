const TeamAPI = {
  teams: [
    {
      id: 1,
      team: "New York Giants",
      superBowlWins: 4,
      superBowlAppearances: 5,
      inPlayoffs: false
    }, {
      id: 2,
      team: "New England Patriots",
      superBowlWins: 5,
      superBowlAppearances: 9,
      inPlayoffs: true
    }, {
      id: 3,
      team: "Green Bay Packers",
      superBowlWins: 4,
      superBowlAppearances: 5,
      inPlayoffs: false
    }, {
      id: 4,
      team: "Pittsburgh Steelers",
      superBowlWins: 6,
      superBowlAppearances: 8,
      inPlayoffs: true
    }, {
      id: 5,
      team: "Denver Broncos",
      superBowlWins: 3,
      superBowlAppearances: 8,
      inPlayoffs: false
    }, {
      id: 6,
      team: "Cleveland Browns",
      superBowlWins: 0,
      superBowlAppearances: 0,
      inPlayoffs: false
    }, {
      id: 7,
      team: "San Francisco 49ers",
      superBowlWins: 5,
      superBowlAppearances: 6,
      inPlayoffs: false
    }, {
      id: 8,
      team: "Baltimore Ravens",
      superBowlWins: 2,
      superBowlAppearances: 2,
      inPlayoffs: false
    }, {
      id: 9,
      team: "Miami Dolphins",
      superBowlWins: 2,
      superBowlAppearances: 5,
      inPlayoffs: false
    }, {
      id: 10,
      team: "Jacksonville Jaguars",
      superBowlWins: 0,
      superBowlAppearances: 0,
      inPlayoffs: true
    }, {
      id: 11,
      team: "Detroit Lions",
      superBowlWins: 0,
      superBowlAppearances: 0,
      inPlayoffs: false
    }, {
      id: 12,
      team: "Seattle Seahawks",
      superBowlWins: 1,
      superBowlAppearances: 3,
      inPlayoffs: false
    }, {
      id: 13,
      team: "Minnesota Vikings",
      superBowlWins: 0,
      superBowlAppearances: 4,
      inPlayoffs: true
    }, {
      id: 14,
      team: "Buffalo Bills",
      superBowlWins: 0,
      superBowlAppearances: 4,
      inPlayoffs: false
    }, {
      id: 15,
      team: "Houston Texans",
      superBowlWins: 0,
      superBowlAppearances: 0,
      inPlayoffs: false
    }, {
      id: 16,
      team: "Tampa Bay Buccaneers",
      superBowlWins: 1,
      superBowlAppearances: 1,
      inPlayoffs: false
    }, {
      id: 32,
      team: "New York Jets",
      superBowlWins: 1,
      superBowlAppearances: 1,
      inPlayoffs: false
    }, {
      id: 17,
      team: "Oakland Raiders",
      superBowlWins: 3,
      superBowlAppearances: 5,
      inPlayoffs: false
    }, {
      id: 18,
      team: "Los Angeles Rams",
      superBowlWins: 1,
      superBowlAppearances: 3,
      inPlayoffs: false
    }, {
      id: 19,
      team: "Los Angeles Chargers",
      superBowlWins: 0,
      superBowlAppearances: 1,
      inPlayoffs: false
    }, {
      id: 20,
      team: "Tennessee Titans",
      superBowlWins: 0,
      superBowlAppearances: 1,
      inPlayoffs: true
    }, {
      id: 21,
      team: "Atlanta Falcons",
      superBowlWins: 0,
      superBowlAppearances: 2,
      inPlayoffs: true
    }, {
      id: 22,
      team: "Arizona Cardinals",
      superBowlWins: 0,
      superBowlAppearances: 1,
      inPlayoffs: false
    }, {
      id: 23,
      team: "Washington Redskins",
      superBowlWins: 3,
      superBowlAppearances: 5,
      inPlayoffs: false
    }, {
      id: 24,
      team: "Philadelphia Eagles",
      superBowlWins: 0,
      superBowlAppearances: 1,
      inPlayoffs: true
    }, {
      id: 25,
      team: "Cincinnati Bengals",
      superBowlWins: 0,
      superBowlAppearances: 2,
      inPlayoffs: false
    }, {
      id: 26,
      team: "Dallas Cowboys",
      superBowlWins: 5,
      superBowlAppearances: 8,
      inPlayoffs: false
    }, {
      id: 27,
      team: "Carolina Panthers",
      superBowlWins: 0,
      superBowlAppearances: 2,
      inPlayoffs: false
    }, {
      id: 28,
      team: "Kansas City Chiefs",
      superBowlWins: 1,
      superBowlAppearances: 2,
      inPlayoffs: false
    }, {
      id: 29,
      team: "Indianapolis Colts",
      superBowlWins: 2,
      superBowlAppearances: 4,
      inPlayoffs: false
    }, {
      id: 30,
      team: "New Orleans Saints",
      superBowlWins: 1,
      superBowlAppearances: 1,
      inPlayoffs: true
    }, {
      id: 31,
      team: "Chicago Bears",
      superBowlWins: 1,
      superBowlAppearances: 2,
      inPlayoffs: false
    }
  ],
  all: function() {
    return this.teams.sort(function(a, b) {
      if (a.team < b.team)
        return -1;
      if (a.team > b.team)
        return 1;
      return 0;
    })
  },
  get: function(id) {
    const isTeam = p => p.id === id
    return this.teams.find(isTeam)
  }
}

export default TeamAPI

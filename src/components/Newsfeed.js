import React, { Component } from 'react'
var parseString = require('xml2js').parseString;

class Newsfeed extends Component{
  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    this.getData()
  }

  async getData(){
    var newsObj = {}
    const response  = await fetch('http://api.fantasy.nfl.com/v1/players/news')
    const data = await response.text()
    // .then(response => response.text())
    const xml = parseString(data, function (err, result) {
      newsObj = result
    });
    this.setState({data:newsObj.news.note})
  }

  mapData(){
    return this.state.data.map((news, index) => {
      var imgUrl = "https://content.rotowire.com/images/teamlogo/football/100" + news.$.teamAbbr + ".png"
      return <div className="news-container" key={index}>
        <img src={imgUrl} className="team-logo"/>
        <div className="content">
          <h4 className="player-name">{news.$.firstName} {news.$.lastName} - {news.$.position}</h4>
          <p className="article-body">{news.analysis[0]}</p>
        </div>
      </div>
    })
  }

  render(){
    return (
      <div>
        {this.mapData()}
      </div>
    )
  }
}

export default Newsfeed

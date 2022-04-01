import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {matchList: [], isLoading: true}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    this.setState({
      matchList: data.teams.map(eachMatch => ({
        id: eachMatch.id,
        name: eachMatch.name,
        imageUrl: eachMatch.team_image_url,
      })),
      isLoading: false,
    })
  }

  renderListOfMatches = () => {
    const {matchList} = this.state
    console.log(matchList)
    return (
      <ul className="team-list-items">
        {matchList.map(eachMatch => (
          <TeamCard teamDetails={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <div className="ipl-container">
          <div className="header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="header-heading">IPL DASHBOARD</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderListOfMatches()}
        </div>
      </div>
    )
  }
}

export default Home

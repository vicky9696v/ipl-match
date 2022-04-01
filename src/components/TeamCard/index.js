import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {id, imageUrl, name} = teamDetails
    return (
      <Link to={`/team-matches/${id}`}>
        <li className="list-team-card-container">
          <img src={imageUrl} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard

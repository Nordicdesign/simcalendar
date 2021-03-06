import React, { Component } from 'react';
// import sims from '../../constants/sims.json'
import tracks from '../../constants/tracks.json'
import Tracks from '../../Components/Utils/Tracks'
// import Sims from '../../Components/Utils/Sims'
import AddRaceForm from './components/AddRaceForm'
import Menu from './components/Menu'

class AddRace extends Component {
  state = {
    tracks: new Tracks(tracks),
    // sims: new Sims(sims.sims),
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Admin</h1>
        <div className="admin">
          <Menu />
          <div className="admin-content">
            <h2>Add new race</h2>
            <AddRaceForm tracks={this.state.tracks} />
          </div>
        </div>
      </div>
    )
  }
}

export default AddRace

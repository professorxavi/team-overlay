import 'dotenv/config';
import React, { Component } from 'react';
import axios from 'axios';
import socket from './socket';
import Party from './Party';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: null,
      client: socket(),
    };
    this.updateTeam = this.updateTeam.bind(this);
    this.showTeam = this.showTeam.bind(this);
    this.hideTeam = this.hideTeam.bind(this)
  }

  componentDidMount() {
    this.state.client.updateTeam(this.updateTeam);
    this.state.client.hideTeam(this.hideTeam);
    this.updateTeam();
  }

  async updateTeam() {
    await axios.get(process.env.REACT_APP_TEAM_API_URL)
      .then(response => this.setState(
        { team: response.data }));
        this.showTeam();
        setTimeout(() => {this.hideTeam();}, 30000);
  }

  showTeam() {
    document.getElementById('App').style.opacity = '1';
  }

  hideTeam() {
    document.getElementById('App').style.opacity = '0';
    document.getElementById('App').style.transition = 'opacity 2s';
    setTimeout(() => {
      this.setState({team: { mons:[] }});
    }, 3000);

  }


  render() {
    if (!this.state.team) return (<div></div>);
    const pokemon = this.state.team.mons.map((c, index) => {
      return(
        <li key={c._id}>
          <Party wait={index * 200} index={index} mon={c}/>
        </li>
      );
    });

    return (
      <div id="App">
        <div className="party">
          <ul>
            { pokemon }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

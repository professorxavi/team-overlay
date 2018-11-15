import React, { Component } from 'react';
import axios from 'axios';
import socket from './socket';
import { CSSTransitionGroup } from 'react-transition-group';
import Party from './Party';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: [],
      client: socket(),
    };
    this.updateTeam = this.updateTeam.bind(this);
  }

  componentDidMount() {
    this.state.client.updateTeam(this.updateTeam);
    this.updateTeam();
  }

  updateTeam() {
    axios.get('http://tauntaun.net:7000/party/')
      .then(response => this.setState(
        { queue: response.data }));
  }

  render() {
    const partySize = this.state.queue.length;
    const overlay = {
      backgroundImage: 'url(\'./team/' + partySize + '.png\')',
      backgroundRepeat: 'no-repeat',
      height: '100%'
    };
    const pokemon = this.state.queue.map((c, index) => {
      return(
        <li key={c._id} className={"mon" + index}>
          <Party mon={c}/>
        </li>
      );
    });

    return (
      <div className="App">
        <div style={overlay} className="party">
          <ul>
            <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={1000}>
            { pokemon }
            </CSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

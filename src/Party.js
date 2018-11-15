import React from 'react';
import './Party.css';

class Party extends React.Component {
  render() {
    const mon = this.props.mon;
    const img = './pokemon/' + mon.id + '.png';
    return (
      <div>
          <img src={img} className="pic" alt={mon.name} />
      </div>
    );
  }
}

export default Party;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { lightSpeedIn } from "react-animations";
import './Party.css';

const SlideIn = styled.div`
  animation: 1s ${keyframes`${lightSpeedIn}`};
  `;

class Party extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: 'hidden'
    };
  }

  componentWillMount() {
        var that = this;
		setTimeout(function() {
			that.show();
		}, that.props.wait);
	}

	show() {
		this.setState({hidden : ''});
	}

  render() {
    const mon = this.props.mon;
    const img = `./menu-sprites/b_${mon.number}.png`;
    return (
      <div className={this.state.hidden}>
        <SlideIn>
          <div className="party-member">
            <div className="mon">
              <img src={img} className="pic" alt={mon.name} />
            </div>
          </div>
        </SlideIn>
      </div>
    );
  }
}

export default Party;

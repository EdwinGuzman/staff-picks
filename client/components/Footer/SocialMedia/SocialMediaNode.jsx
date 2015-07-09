// Import libraries
import React from 'react';
import Radium from 'radium';

class SocialMediaNode extends React.Component {
  // Constructor used in ES6
	constructor(props) {
    super(props);
  }
  render () {
			return (
	      <li key='SocialMediaNode' className='SocialMediaNode' style={styles.SocialMediaNode}>
		      <a key='SocialMediaLink' className='SocialMediaLink' href={this.props.link}>
			      <span>
							{this.props.name}
						</span>
					</a>
	      </li>
			);
	};
};

const styles = {
	SocialMediaNode: {
		display: 'inline-block'
	}
}

export default Radium(SocialMediaNode);
// Import libraries
import React from 'react';
import Radium from 'radium';

import FooterLinkListNode from 'components/Footer/FooterLinkLists/FooterLinkListNode.jsx'

class FooterLinkList extends React.Component {
  // Constructor used in ES6
	constructor(props) {
    super(props);
  }

  render () {
  	var FooterLinkListNodes = this.props.data.map ( function ( node ) {
  		return (
				<FooterLinkListNode name={node.name} link={node.link} className={node.className} />
			);
  	});
		return (
			<ul className={this.props.className}>
				{FooterLinkListNodes}
			</ul>
		);
	};
};

export default Radium(FooterLinkList);
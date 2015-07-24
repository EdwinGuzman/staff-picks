import React from 'react';
import Radium from 'radium';
import cx from 'classnames';

// Component import
import BookStore from '../../stores/BookStore.js';
import BookActions from '../../actions/BookActions.js';

class TabElement extends React.Component {
  // Constructor used in ES6
  constructor(props) {
    super(props);
    this.state = { 
      age: BookStore.getAge()
    };
    this._handleClick = this._handleClick.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount () {
    BookStore.addChangeListener(this._onChange);
  }

  componentWillUnmount () {
    BookStore.removeChangeListener(this._onChange);
  }

  _handleClick (age) {
    BookActions.updateFilterAge(age);
  }
  
  _onChange () {
    this.setState({
      age: BookStore.getAge()
    });
  }

  render () {
    let active = this.state.age === this.props.value;

  	return (
  		<li key={`tab-${this.props.name}`} id={this.props.name} 
        className='tab-element' style={[styles.TabElement, 
          active ? styles.TabElementLinkActive : styles.TabElementLinkInactive]}>
          <a 
            onClick={this._handleClick.bind(this, this.props.value)}
            style={styles.TabElementLink}>
            {this.props.name}
          </a>
  		</li>
		);
  }ß
};

const styles = {
  TabElement: {
    backgroundColor: '#ffffff',
    display: 'inline-block',
    margin: '0',
    textTransform: 'uppercase',
    whiteSpace: 'pre',
    width: '33%'
  },
  TabElementLink: {
    color: '#bfbfbf',
    cursor: 'pointer',
    textDecoration: 'none',
    ':hover': {
      color: '#cc1a16'
    }
  },
  TabElementLinkActive: {
    color: '#cc1a16',
    padding: '20px 0 21px 0'
  },
  TabElementLinkInactive: {
    borderBottomStyle: 'solid',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopStyle: 'none',
    padding: '20px 0 20px 0',
  }
}

export default Radium(TabElement);

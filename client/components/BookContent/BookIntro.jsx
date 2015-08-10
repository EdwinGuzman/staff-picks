import React from 'react';
import Radium from 'radium';

import _ from 'underscore';

class TagList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    var tags = this.props.tags.map(tag => {
      return (
        <li>{tag}</li>
      );
    });

    return (
      <div className={this.props.className} style={this.props.style}>
        <p>Filed under:</p>
        <ul>
          {tags}
        </ul>
      </div>
    );
  }
};

class BookIntro extends React.Component {
  // Constructor used in ES6
  constructor(props) {
    super(props);
  }

  render () {
      const book = this.props.book,
      tags = _.chain(book['item']['staff-pick-tag'])
        .pluck('attributes')
        .pluck('tag')
        .flatten()
        .value();

    return (
      <div className='book-modal__book-intro__div'>
        <p className='book-modal__book-intro__div__author'>By {book['staff-pick-item']['attributes']['author']}</p>
        <TagList className='book-modal__book-intro__div__tags' tags={tags} />
      </div>
    );
  }
};

BookIntro.defaultProps = {
  className: 'Booktitle',
  lang: 'en',
  onClick() {}
};

const styles={
  BookIntro: {
  },
  Author: {

  },
  TagList :{
  }
};

export default Radium(BookIntro);

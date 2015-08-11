// Library import
import React from 'react';
import Radium from 'radium';

// Component import
import HeroTitle from './HeroTitle/HeroTitle.jsx';
import HeroImage from './HeroImage/HeroImage.jsx';
import BookStore from '../../stores/BookStore.js';
import API from '../../utils/ApiService.js';

class Hero extends React.Component {
  // Constructor used in ES6
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  render() {    
    return (
      <div key='Hero' className='hero'>
        <div key='HeroContainer' className='hero__container'>
          <div key='TextContainer' className='hero__container__text-container'>
            <HeroTitle className='hero__container__text-container__title' title='staff picks' />
          </div>
          <div key='HeroImageContainer' className='hero__container__image-container'>
            <HeroImage className='hero__container__image-container__image' />
          </div>
        </div>
      </div>
    );
  }
};

const styles = {
};

export default Radium(Hero);

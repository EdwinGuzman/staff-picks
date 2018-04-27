/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import BookList from '../../src/app/components/BookList/BookList';
import About from '../../src/app/components/About/About';

const picks = [
  {
    title: 'first book title',
    tags: ['funny', 'horror'],
  },
  {
    title: 'second book title',
    tags: ['adventure', 'horror'],
  },
  {
    title: 'third book title',
    tags: ['graphic-novels', 'funny'],
  },
];

describe('BookList', () => {
  describe('Default', () => {
    let component;

    before(() => {
      component = shallow(<BookList />);
    });

    it('should be wrapped in an .booklist-section and .nypl-column-three-quarters class', () => {
      expect(component.find('.booklist-section').length).to.equal(1);
      expect(component.find('.nypl-column-three-quarters').length).to.equal(1);
    });

    it('should have an h2', () => {
      expect(component.find('h2').length).to.equal(1);
      expect(component.find('h2').text()).to.equal(' Picks for 0 Books Found');
    });

    it('should not render an ul', () => {
      expect(component.find('ul').length).to.equal(0);
    });

    it('should render an <About> component', () => {
      expect(component.find(About).length).to.equal(1);
    });
  });

  describe('With picks data passed', () => {
    let component;
    const displayInfo = { displayDate: { month: 'Winter', year: 2017 }, displayAge: 'Adult' };

    before(() => {
      component = shallow(<BookList picks={picks} />);
    });

    it('should render the date and age selected for the list', () => {
      expect(component.find('h2').length).to.equal(1);
      expect(component.find('h2').text()).to.equal(' Picks for 0 Books Found');

      component.setProps({ picksCount: 3, displayInfo });
      expect(component.find('h2').text()).to.equal('Winter 2017 Picks for Adult3 Books Found');

      component.setProps({ picksCount: 453 });
      expect(component.find('h2').text()).to.equal('Winter 2017 Picks for Adult453 Books Found');
    });

    it('should render an ul', () => {
      expect(component.find('ul').length).to.equal(1);
    });

    it('should render three <Book /> components', () => {
      expect(component.find('Book').length).to.equal(3);
    });
  });
});

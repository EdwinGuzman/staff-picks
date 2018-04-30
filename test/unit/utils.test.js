/* eslint-env mocha */
import { expect } from 'chai';

import utils from '../../src/app/utils/utils';

describe('Utils functions', () => {
  describe('getPickTags', () => {
    const getPickTags = utils.getPickTags;

    it('should return an empty array', () => {
      expect(getPickTags()).to.eql([]);
    });

    it('should return an array of all the tags in the picks', () => {
      const picks = {
        title: 'third book title',
        tags: ['Graphic-novels', 'Funny'],
      };
      expect(getPickTags(picks)).to.eql(['graphic-novels', 'funny']);
    });
  });

  describe('getSelectedTags', () => {
    const getSelectedTags = utils.getSelectedTags;

    it('should return an empty array', () => {
      expect(getSelectedTags()).to.eql([]);
    });

    it('should return an array of all the tags in the picks', () => {
      const initialTags = ['funny', 'horror', 'adventure', 'offbeat', 'graphic-novels', 'classy'];
      const selectedTags = ['funny', 'offbeat'];
      expect(getSelectedTags(initialTags, selectedTags)).to.eql(['funny', 'offbeat']);
    });
  });


  describe('getAllTags', () => {
    const getAllTags = utils.getAllTags;

    it('should return an empty array', () => {
      expect(getAllTags()).to.eql([]);
    });

    it('should return an array of all the tags in the picks', () => {
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
        {
          title: 'fourth book title',
          tags: [],
        },
      ];
      expect(getAllTags(picks)).to.eql(['adventure', 'funny', 'graphic-novels', 'horror']);
    });
  });

  describe('capitalizeFirstChar', () => {
    const capitalizeFirstChar = utils.capitalizeFirstChar;

    it('should make the first character of a string uppercase.', () => {
      expect(capitalizeFirstChar('audience')).to.equal('Audience');
    });
  });
});

import {
  union as _union,
  contains as _contains,
  each as _each,
  sortBy as _sortBy,
} from 'underscore';
import { gaUtils } from 'dgx-react-ga';
import {
  createHistory,
  useQueries,
  createMemoryHistory,
} from 'history';

function Utils() {
  /**
   * createAppHistory
   * Create a history in the browser or server that coincides with react-router.
   */
  this.createAppHistory = () => {
    if (typeof window !== 'undefined') {
      return useQueries(createHistory)();
    }

    return useQueries(createMemoryHistory)();
  };

  /**
   * trackPicks(action, label)
   * Track a GA click event, where action and label come from
   * the higher level function call from _trackEvent().
   *
   * @param {string} action Action for GA event.
   * @param {string} label Label for GA event.
   */
  this.trackPicks = gaUtils.trackEvent('Staff Picks');

  /**
   * getPickTags(book)
   * Return an array of the pick's tags, lowercased and with a hyphen to easily
   * use as a class or an ID.
   *
   * @param {object} book
   */
  this.getPickTags = (book) => {
    if (!book || !(book.tags && book.tags.length)) {
      return [];
    }
    return book.tags.map(tag => tag.toLowerCase().split(' ').join('-'));
  };

  /**
   * getSelectedTags(tagArray, selectedFilters)
   * Return an array of the filters in a pick's tagArray if the selectedFilters is found.
   *
   * @param {array} tagArray
   * @param {array} selectedFilters
   */
  this.getSelectedTags = (tagArray, selectedFilters) => {
    const selectedTags = [];
    _each(tagArray, (bookTag) => {
      if (_contains(selectedFilters, bookTag)) {
        selectedTags.push(bookTag);
      }
    });

    return selectedTags;
  };

  /**
   * getFiltersMapping(filters)
   * Return mapping of filters
   *
   * @return {Object} filters - A map of id and label key-value pairs of filters
   * @param {array} filters - Array of filters
   */
  this.getFiltersMapping = (filters) => {
    return filters.map(filter => ({
      id: filter.toLowerCase().split(' ').join('-'),
      label: filter,
    }));
  };

  /**
   * getSelectableTags(picks)
   * Get the subset of tags that can be selected based on the subset of picks.
   *
   * @param {array} picks
   */
  this.getSelectableTags = (picks) => {
    let selectableFilters = [];

    _each(picks, (book) => {
      const tagArray = this.getPickTags(book);
      selectableFilters = _union(selectableFilters, tagArray);
    });

    return selectableFilters;
  };

  /**
   * getAllTags(picks)
   * Get all the tags from a pick list without modifying the tag's name,
   * and sorts them alphabetically.
   *
   * @param {array} picks
   */
  this.getAllTags = (picks) => {
    let tags = [];

    _each(picks, (pick) => {
      const pickTags = pick.tags && pick.tags.length ? pick.tags : [];
      tags = _union(tags, pickTags);
    });

    return _sortBy(tags, tag => tag);
  };

  /**
   * capitalize(str)
   * capitalizes a string
   * @param {string} str
   */
  this.capitalize = (str) => {
    return str.replace(/^\w/, function (chr) {
      return chr.toUpperCase();
    });
  };
}

export default new Utils();

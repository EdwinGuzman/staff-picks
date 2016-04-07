import BookActions from '../actions/BookActions';
import { indexOf as _indexOf } from 'underscore';
import alt from 'dgx-alt-center';

class BookStore {
  constructor() {
    this.bindListeners({
      updateBookDisplay: BookActions.UPDATE_BOOK_DISPLAY,
      updateFilterAge: BookActions.UPDATE_FILTER_AGE,
      toggleBookFilter: BookActions.TOGGLE_BOOK_FILTER,
      clearFilters: BookActions.CLEAR_FILTERS,
      updateNewFilters: BookActions.UPDATE_NEW_FILTERS,
      updatePicks: BookActions.UPDATE_PICKS,
      isotopesDidUpdate: BookActions.ISOTOPES_DID_UPDATE,
      updateInitialFilters: BookActions.UPDATE_INITIAL_FILTERS
    });

    this.exportPublicMethods({
      getBookDisplay: this.getBookDisplay,
      getActiveList: this.getActiveList,
      getActiveGrid: this.getActiveGrid,
      getAge: this.getAge,
      getFilters: this.getFilters,
      getUpdatedFilters: this.getUpdatedFilters,
      updateBookDisplay: this.updateBookDisplay
    });

    this.on('init', () => {
      this._bookDisplay =  'grid';
      this._age = 'Adult';
      this._gridDisplay = true;
      this._listDisplay = false;
      this._allFilters = [];
      this._filters = [];
      this._initialFilters = [];
      this._updatedFilters = [];
      this._currentMonthPicks = {};
      this._isotopesDidUpdate = false;
    });
  }

  updateBookDisplay(bookDisplay) {
    this._bookDisplay = bookDisplay;
  }
  updateFilterAge(age) {
    this._age = age;
  }
  toggleBookFilter(filter) {
    var found = _indexOf(this._filters, filter);

    if (found != -1) {
      this._filters.splice(found, 1);
    } else {
      this._filters.push(filter);
    }
  }
  clearFilters() {
    this._filters = [];
  }
  updateNewFilters(updatedFilters) {
    this._updatedFilters = updatedFilters;
  }
  updatePicks(picks) {
    this._currentMonthPicks = picks;
  }
  isotopesDidUpdate(bool) {
    this._isotopesDidUpdate = bool;
  }
  updateInitialFilters(filters) {
    this._initialFilters = filters;
  }


  // Maybe not needed?
  getBookDisplay () {
    return this._bookDisplay;
  }
  getActiveList() {
    return this._listDisplay;
  }
  getActiveGrid() {
    return this._gridDisplay;
  }
  // Gets age from the tabs
  getAge () {
    return this._age;
  }
  getFilters () {
    return this._filters;
  }
  getUpdatedFilters () {
    return this._updatedFilters;
  }
  setActiveDisplay(type) {
    if (type === 'grid') {
      this._gridDisplay = true;
      this._listDisplay = false;
    } else {
      this._gridDisplay = false;
      this._listDisplay = true;
    }
  }
}

export default alt.createStore(BookStore, 'BookStore');

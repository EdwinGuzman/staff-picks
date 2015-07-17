import EventEmitter from 'eventemitter3';
import AppDispatcher from '../dispatcher/AppDispatcher';
import BookConstants from '../constants/BookConstants';
import _ from 'underscore';
// Boolean flag that initially hides the Subscribe Form
let _bookDisplay =  'grid',
    _age = 'adult',
    _gridDisplay = true,
    _listDisplay = false;

// Simple reference to a repetitive non-changing string
const CHANGE_EVENT = 'change';

/* Setters are assigned in non-global scope */
// Sets the boolean value of the Subscribe Form Visibility
function setBookDisplay (bookDisplay) {
  _bookDisplay = bookDisplay;
}

function setActiveDisplay (type) {
  if (type === 'grid') {
    _gridDisplay = true;
    _listDisplay = false;
  } else {
    _gridDisplay = false;
    _listDisplay = true;
  }
}

function setAgeDisplay (age) {
  _age = age;
}

const BookStore = _.extend({}, EventEmitter.prototype, {
  // Gets the state of the Subscribe Form Visibility boolean
  getBookDisplay () {
    return _bookDisplay;
  },
  getActiveList() {
    return _listDisplay;
  },
  getActiveGrid() {
    return _gridDisplay;
  },
  // Gets age from the tabs
  getAge () {
    return _age;
  },
  // Emits change event to all registered event listeners
  emitChange () {
    return this.emit(CHANGE_EVENT);
  },
  // Register a new change event listener
  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

BookStore.dispatchToken = AppDispatcher.register((action) => {

  switch (action.actionType) {
    // Respond to DISPLAY_TYPE action
    case BookConstants.DISPLAY_TYPE:
      setActiveDisplay(action.displayType);
      setBookDisplay(action.displayType);
      BookStore.emitChange();
    break;

    case BookConstants.AGE_TYPE:
      setAgeDisplay(action.age);
      BookStore.emitChange();
    break;
    
    default:
    // Do nothing
  }
});

export default BookStore;

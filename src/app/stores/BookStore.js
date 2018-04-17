import alt from '../alt';

import BookActions from '../actions/BookActions';

class BookStore {
  constructor() {
    this.bindListeners({
      updatePicks: BookActions.UPDATE_PICKS,
      updateFilters: BookActions.UPDATE_FILTERS,
      updateCurrentSeason: BookActions.UPDATE_CURRENT_SEASON,
      updateCurrentAudience: BookActions.UPDATE_CURRENT_AUDIENCE,
      setIsJsEnabled: BookActions.SET_IS_JS_ENABLED,
      setSelectableFilters: BookActions.SET_SELECTABLE_FILTERS,
    });

    this.state = {
      filters: [],
      currentPicks: {},
      isJsEnabled: false,
      selectableFilters: [],
      currentSeason: '',
      currentAudience: '',
    };
  }

  updatePicks(currentPicks) {
    this.setState({ currentPicks });
  }

  updateFilters(filters) {
    this.setState({ filters });
  }

  updateCurrentSeason(currentSeason) {
    this.setState({ currentSeason });
  }

  updateCurrentAudience(currentAudience) {
    this.setState({ currentAudience });
  }

  setIsJsEnabled(isJsEnabled) {
    this.setState({ isJsEnabled });
  }

  setSelectableFilters(selectableFilters) {
    this.setState({ selectableFilters });
  }
}

export default alt.createStore(BookStore, 'BookStore');

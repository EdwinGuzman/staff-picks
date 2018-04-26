import alt from '../alt';

import BookActions from '../actions/BookActions';

class BookStore {
  constructor() {
    this.bindListeners({
      updatePicksData: BookActions.UPDATE_PICKS_DATA,
      updateFilters: BookActions.UPDATE_FILTERS,
      updateCurrentSeason: BookActions.UPDATE_CURRENT_SEASON,
      updateCurrentAudience: BookActions.UPDATE_CURRENT_AUDIENCE,
      setListOptions: BookActions.SET_LIST_OPTIONS,
      setIsJsEnabled: BookActions.SET_IS_JS_ENABLED,
      setSelectableFilters: BookActions.SET_SELECTABLE_FILTERS,
    });

    this.state = {
      filters: [],
      picksData: {},
      isJsEnabled: false,
      listOptions: {},
      selectableFilters: [],
      currentSeason: '',
      currentAudience: '',
    };
  }

  updatePicksData(picksData) {
    this.setState({ picksData });
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

  setListOptions(listOptions) {
    this.setState({ listOptions });
  }

  setSelectableFilters(selectableFilters) {
    this.setState({ selectableFilters });
  }
}

export default alt.createStore(BookStore, 'BookStore');

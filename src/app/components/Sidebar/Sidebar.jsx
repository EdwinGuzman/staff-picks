import React from 'react';
import PropTypes from 'prop-types';
import { LeftWedgeIcon, ListIcon } from '@nypl/dgx-svg-icons';
import { isEmpty as _isEmpty } from 'underscore';

import BookFilters from '../BookFilters/BookFilters';
import ListSelector from '../ListSelector/ListSelector';
import ListTitle from '../ListTitle/ListTitle';
import config from '../../../../appConfig';

const Sidebar = (props) => {
  /**
   * updateCurrentListSelectorValues(data)
   * Updates the current values in the passed down list options
   * @param {object} data
   */
  const updateCurrentListSelectorValues = (data) => {
    // Deep clones the object of props.listOptions to a new object so the update later will not
    // affect the original props.listOptions
    const listOptions = (data.listOptions && !_isEmpty(data.listOptions)) ?
      JSON.parse(JSON.stringify(props.listOptions)) : config.staffPicksListOptions;

    listOptions.season.currentValue = data.currentSeason;
    listOptions.type = data.type;

    if (data.currentAudience && listOptions.type === 'staff-picks') {
      listOptions.audience.currentValue = data.currentAudience;
    }

    return listOptions;
  };

  /**
   * renderBookFilters(shouldDisplay)
   * Renders book filters
   * @param {boolean} shouldDisplay
   */
  const renderBookFilters = (shouldDisplay = false) => {
    if (!shouldDisplay) {
      return null;
    }
    return (
      <BookFilters
        filters={props.filters}
        selectableFilters={props.selectableFilters}
        setSelectedFilter={props.setSelectedFilter}
        clearFilters={props.clearFilters}
        selectedFilters={props.selectedFilters}
      />
    );
  };

  /**
   * renderListSelector(data)
   * Renders list selector
   * @param {object} data
   */
  const renderListSelector = data =>
    <ListSelector fieldsetProps={data} isJsEnabled={props.isJsEnabled} />;

  return (
    <div className="sidebar nypl-column-one-quarter">
      <nav aria-label="Breadcrumbs" className="book-filters-heading">
        <a href={config.recommendationsLink.url} className="back-link">
          <LeftWedgeIcon ariaHidden />
          {config.recommendationsLink.label}
        </a>
      </nav>
      <div className="book-filters-heading">
        {
          props.isMobile &&
            <ListTitle
              displayInfo={props.displayInfo}
              displayType={props.type}
              picksCount={props.picksCount}
              idPrefix="sidebar"
            />
        }
        <h3><ListIcon /><span>Select a List</span></h3>
        {renderListSelector(updateCurrentListSelectorValues(props))}
        {renderBookFilters(props.isJsEnabled)}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  selectableFilters: PropTypes.arrayOf(PropTypes.string),
  setSelectedFilter: PropTypes.func,
  clearFilters: PropTypes.func,
  isJsEnabled: PropTypes.bool,
  listOptions: PropTypes.object,
  selectedFilters: PropTypes.arrayOf(PropTypes.object),
  displayInfo: PropTypes.object,
  type: PropTypes.string,
  picksCount: PropTypes.number,
  isMobile: PropTypes.bool,
};

Sidebar.defaultProps = {
  filters: [],
  selectableFilters: [],
  setSelectedFilter: () => {},
  clearFilters: () => {},
  isJsEnabled: false,
  listOptions: {},
  selectedFilters: [],
  isMobile: false,
};

export default Sidebar;

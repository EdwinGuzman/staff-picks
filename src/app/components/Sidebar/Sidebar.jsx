import React from 'react';
import PropTypes from 'prop-types';
import { LeftWedgeIcon } from '@nypl/dgx-svg-icons';

import BookFilters from '../BookFilters/BookFilters';
import ListSelector from '../ListSelector/ListSelector';
import config from '../../../../appConfig';

// This data is a temporary dummy data for creating the season list
const fieldsetProps = {
  season: {
    fieldsetName: 'season',
    options: [
      { name: '2018 Spring', value: '2018-03-01' },
      { name: '2018 Winter', value: '2018-01-01' },
      { name: '2017 Fall', value: '2017-09-01' },
      { name: '2017 Summer', value: '2017-06-01' },
    ],
  },
  audience: {
    fieldsetName: 'audience',
    options: [
      { name: 'Adult', value: 'adult' },
      { name: 'Teen', value: 'ya' },
      { name: 'Children', value: 'children' },
    ],
  },
};

const Sidebar = (props) => {
  const renderBookFilters = (shouldDisplay) => {
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
        picksCount={props.picksCount}
      />
    );
  };

  const renderListSelector = (data) =>
    <ListSelector fieldsetProps={data} isJsEnabled={props.isJsEnabled} router={props.router} />;

  return (
    <div className="sidebar nypl-column-one-quarter">
      <nav aria-label="Breadcrumbs">
        <a href={config.recommendationsLink.url} className="back-link">
          <LeftWedgeIcon ariaHidden />
          <span className="replaced-text visuallyHidden">Return to </span>
          {config.recommendationsLink.label}
        </a>
      </nav>
      {renderListSelector(fieldsetProps)}
      {renderBookFilters(props.isJsEnabled)}
    </div>
  );
};

Sidebar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object),
  selectableFilters: PropTypes.arrayOf(PropTypes.object),
  setSelectedFilter: PropTypes.func,
  clearFilters: PropTypes.func,
  isJsEnabled: PropTypes.bool,
  selectedFilters: PropTypes.arrayOf(PropTypes.object),
  picksCount: PropTypes.number,
  router: PropTypes.object,
};

Sidebar.defaultProps = {
  filters: [],
  selectableFilters: [],
  setSelectedFilter: () => {},
  clearFilters: () => {},
  isJsEnabled: false,
  selectedFilters: [],
  picksCount: 0,
};

export default Sidebar;

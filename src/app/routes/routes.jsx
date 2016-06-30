// React library
import React from 'react';
// Import Router
import { Route } from 'react-router';

// Import components
import App from '../components/Application/Application.jsx';
import BookModal from '../components/BookModal/BookModal.jsx';

// Routes we need
const routes = {
  client: (
    <Route path="/browse/recommendations/staff-picks" component={App}>
      <Route path="/browse/recommendations/staff-picks/annual">
        <Route path="/browse/recommendations/staff-picks/annual/:type">
          <Route path="/browse/recommendations/staff-picks/annual/:type/:year">
            <Route
              component={BookModal}
              path="/browse/recommendations/staff-picks/annual/:type/:year/:id"
            />
          </Route>
        </Route>
      </Route>
      <Route path="/browse/recommendations/staff-picks/:month">
        <Route path="/browse/recommendations/staff-picks/:month/:id" component={BookModal} />
      </Route>
    </Route>
  ),
  server: (
    <Route path="/" component={App}>
      <Route path="/annual/:type" />
      <Route path="/annual/:type/:year" />
      <Route path="/annual/:type/:year/:id" component={BookModal} />
      <Route path="/:month" />
      <Route path="/:month/:id" component={BookModal} />
    </Route>
  ),
};

export default routes;

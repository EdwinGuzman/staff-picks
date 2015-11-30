import React from 'react/addons';
import Router from 'react-router';

import App from './components/Application/Application.jsx';
import BookModal from './components/BookModal/BookModal.jsx';
import Error404Page from './components/Error404Page/Error404Page.jsx';
import Footer from './components/Footer/Footer.jsx';

import alt from 'dgx-alt-center';
import Iso from 'iso';

import ga from 'react-ga';

import './styles/main.scss';

let Route = Router.Route,
  NotFoundRoute = Router.NotFoundRoute,
  DefaultRoute = Router.DefaultRoute,
  RouteHandler = Router.RouteHandler;

let routes = (
    <Route name='home' path='/recommendations/staff-picks/' handler={App} ignoreScrollBehavior>
      <Route name='month' path='/recommendations/staff-picks/:month?/?' ignoreScrollBehavior/>
      <Route name='modal' path='/recommendations/staff-picks/:month/:id?/?' handler={BookModal} ignoreScrollBehavior>
        <NotFoundRoute handler={Error404Page} />
      </Route>
    </Route>
  );


window.onload = () => {
  Iso.bootstrap((state, meta, container) => {
    alt.bootstrap(state);

    if (!window.ga) {
      console.log('Analytics not available - loading through React.');
      let gaOpts = { debug: false };
      ga.initialize('UA-1420324-3', gaOpts);
    }

    Router.run(routes, Router.HistoryLocation, (Root, state) => {
      let lastCharIndex = state.pathname.length - 1,
        pageview = state.pathname;

      if (state.pathname[lastCharIndex] === '/') {
        pageview = state.pathname.substring(0, lastCharIndex);
      }

      ga.pageview(pageview);
      React.render(<Root />, container);
    });

    React.render(<Footer />, document.getElementById('footer-container'));
  });
};

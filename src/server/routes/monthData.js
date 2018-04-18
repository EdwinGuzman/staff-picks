import nyplApiClient from '../helper/nyplApiClient.js';
import config from '../../../appConfig';

const getLatestSeason = () => {
  //this function should return the latest season by current month
  return '';
}

const nyplApiClientGet = (endpoint) =>
  nyplApiClient().then(client => client.get(endpoint, { cache: false }));

/* currentMonthData
 * Get the default/latest monthly staff pick list.
 */
function currentMonthData(req, res, next) {
  // should get the latest list from the function getLatestSeason()
  nyplApiClientGet('/book-lists/staff-picks/2018-01')
    .then(data => {
      res.locals.data = {
        BookStore: {
          filters: [],
          currentPicks: data,
          selectableFilters: [],
          isJsEnabled: false,
          currentSeason: getLatestSeason(),
          currentAudience: 'adult',
        },
        pageTitle: '',
        metaTags: [],
      };

      next();
    })
    .catch(error => {
      console.error(`Status Code: ${error.statusCode}, Error Message: ${error.code}`);

      res.locals.data = {
        BookStore: {
          filters: [],
          currentPicks: {},
          selectableFilters: [],
          isJsEnabled: false,
          currentSeason: getLatestSeason(),
          currentAudience: 'adult',
        },
      };

      next();
    });
}

/* selectMonthData
 * Get a specific month's or season's staff pick list.
 */
function selectMonthData(req, res, next) {
  // Checks if the URL input fits season's convention
  const seasonMatches = req.params.month.match(/^(\d{4})\-(\d{2})\-(\d{2})$/);
  const audience = req.query.audience;
  let requestedSeason = '';

  // should add a check for req.query.audience here

  // If no, throw an error
  if (!seasonMatches) {
    console.error('Status Code: 400, Error Message: Invalid season.');

    res.locals.data = {
      BookStore: {
        filters: [],
        currentPicks: {},
        selectableFilters: [],
        isJsEnabled: false,
        currentSeason: getLatestSeason(),
        currentAudience: 'adult',
      },
    };

    next();
  } else {
    requestedSeason = `${seasonMatches[1]}-${seasonMatches[2]}`;
  }

  nyplApiClientGet(`/book-lists/staff-picks/${requestedSeason}?audience=${audience}`)
    .then(data => {
      res.locals.data = {
        BookStore: {
          filters: [],
          currentPicks: data,
          selectableFilters: [],
          isJsEnabled: false,
          currentSeason: requestedSeason,
          currentAudience: audience,
        },
        pageTitle: '',
        metaTags: [],
      };

      next();
    })
    .catch(error => {
      console.error(`Status Code: ${error.statusCode}, Error Message: ${error.code}`);

      res.locals.data = {
        BookStore: {
          filters: [],
          currentPicks: {},
          selectableFilters: [],
          isJsEnabled: false,
          currentSeason: getLatestSeason(),
          currentAudience: 'adult',
        },
      };

      next();
    });
}

/**
 * selectClientMonthData(req, res, next)
 * Gets a specific month's or season's staff pick list on the client side.
 */
function selectClientMonthData(req, res) {
  const seasonMatches = req.params.month.match(/^(\d{4})\-(\d{2})$/);

  if (!seasonMatches) {
    console.error('Status Code: 400, Error Message: Invalid season.');

    res.json({
      statusCode: 400,
      errorMessage: 'Invalid season.',
    });
  }

  nyplApiClientGet(`/book-lists/staff-picks/${req.params.month}`)
    .then(data => {
      res.json({
        title: data.title,
        date: data.date,
        currentPicks: {
          picks: data.picks,
        },
      });
    })
    .catch(error => {
      console.error(`Status Code: ${error.statusCode}, Error Message: ${error.code}`);

      res.json({
        statusCode: error.statusCode || 500,
        errorMessage: error.code,
      });
    });
}

/**
 * selectClientMonthDataPost(req, res, next)
 * Handles the requests from the form submit button (when no JS).
 * It redirects to the route to execute the function for server side requesting.
 */
function selectClientMonthDataPost(req, res) {
  const season = (req.body.season) ? `${req.body.season}-01` : '';
  const audience = (req.body.audience) ? `?audience=${req.body.audience}` : '';

  if (!season || !audience) {
    console.log(
      `Form data of season or audience is undefined. season: ${season}, audience: ${audience}`
    );
  }

  res.redirect(
    `${config.baseMonthUrl}${season}${audience}`
  );
}

export default {
  currentMonthData,
  selectMonthData,
  selectClientMonthData,
  selectClientMonthDataPost,
};

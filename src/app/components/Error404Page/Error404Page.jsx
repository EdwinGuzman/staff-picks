import React from 'react';
import config from '../../../../appConfig';

const Error404Page = () => (
  <div className="error-container">
    <h1 className="error-title">404 | Not Found</h1>
    <p>
      We’re sorry. The page you were looking for doesn’t exist.
    </p>
    <p>
      Ready to discover your next great read? Browse and filter our&nbsp;
      <a href={`${config.baseUrl}/staff-picks`}>
        Staff Picks.
      </a>
    </p>
    <p>
      Need help or have a question?&nbsp;
      <a href="https://www.nypl.org/get-help/contact-us">
        Contact us.
      </a>
    </p>
  </div>
);

export default Error404Page;

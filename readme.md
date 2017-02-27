# Staff Picks

# To set up

- Clone repository
- `npm install`
- `npm start`
- Navigate to http://localhost:3001/books-music-dvds/recommendations/staff-picks/

# To promote code

Feature branches are branched off from the `development` branch and then merged back into the `development` branch. Then it merges up to `master`.

```
master ---------------- ---------------- ---------------- ----------------master
development -------------------------------->development /^
   \ ----------> feature branch -/^
```

# To create a release

- Go to Bamboo http://bamboo.nypl.org/browse/NA-SWR
- Click on Deployments in the secondary navigation panel
- Click on chosen environment (development, qa, production)
- Click the ... on top right (under Search) and select 'Create release'
- Select 'Create new release from build result'
- Name release according to local naming conventions (e.g. master-v2.15)
- Create release

# To deploy to branch from release

- Go to Bamboo http://bamboo.nypl.org/browse/NA-SWR
- Click on Deployments in the secondary navigation panel
- Click on chosen environment (development, qa, production)
- Click Deploy on top right (under Search) and again select environment
- Select 'Promote existing release to this environment'
- Select release and start deployment

## Changelog

### v2.1.9
> Updated the Header Component to v1.5.4. The update is to integrate the log in related functions with beta-ouath server.

> Updated the Header Component to v1.5.3. The update is to remove console loggings for patron token expiration.

> Updated the Header Component to v1.5.2. The update is to turn off the feature flag of OAuth Login and set it as default.

### v2.1.8
> Updated the Header Component to v1.5.1. The update includes HTTPS fix and the JavaScript fallback for the log in button on the Header Component.

### v2.1.7
#### Added
- Enabled Feature Flags plugin on the client-side and added Optimizely script in the index.ejs file.

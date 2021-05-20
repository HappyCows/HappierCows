
# HappyCows/HappierCows

This is a full rewrite of the application HappyCows, a project sponsored by [Mattanjah de Vries, Distingished Professor of Chemistry at UC Santa Barbara](https://www.chem.ucsb.edu/people/mattanjah-s-de-vries).


The application is a simulation game that gives players (typically students in Prof. de Vries' courses) an opportunity to learn about the [Tragedy of the Commons](https://en.wikipedia.org/wiki/Tragedy_of_the_commons).

This rewrite uses the new tech stack being developed for [CMPSC 156](https://ucsb-cs156.github.io).    This tech stack uses:
* Spring Boot (Java) for the backend
* React (JavaScript) for the frontend
* Spring Security plus Google OAuth for authentication/authorization
  - This last point is what distinguishes this tech stack from the one currently in use (as S21) for the three legacy code apps in
    CMPSC 156: the current apps use Auth0 with JWTs as the authentication/authorization mechanism.

Storybook is here:
* Production: <https://happycows.github.io/HappierCows-docs/>
* QA: <https://happycows.github.io/HappierCows-docs-qa/>

# Setup before running application

* Obtain a Google client id and client secret
  - This is done at the Google Developer Console <https://console.cloud.google.com/> via the left navigation under `APIs and Services`, then `Credentials`, then `Create Credentials`
  - The callback url should be: `http://localhost:8080/login/oauth2/code/google`.  (Note: `http` not `https` for localhost).
  - You will also need to add a callback URL for Heroku if you are deploying there, e.g. `https://myappname.herokuapp.com/login/oauth2/code/google` (Note the `https` in the Heroku case.)


# Getting Started on localhost

* The backend and frontend should be run separately, so first start by opening two separate terminal windows.
* In the first window, start up the backend with `mvn spring-boot:run`
* In the second window, `cd frontend` then:
  - If running for the first time, do `npm install` to install dependencies.
  - After that, do `npm start`
* Then, the app should be available on <http://localhost:8080>

# Deployment on Heroku

> TODO: Add more detailed deployment documentation

Run the following commands to update the Heroku configuration 
```bash
heroku config:set $(cat .env) --app <heroku app name>
heroku config:set PRODUCTION=true --app <heroku app name>
```

# To run React Storybook

* cd into frontend
* use: npm run storybook
* This should put the storybook on http://localhost:6006
* Additional stories are added under frontend/src/stories

* For documentation on React Storybook, see: https://storybook.js.org/

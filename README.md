# weatherapp

You need to make sure you have the latest versions of Node/NPM:
node --version
v6.3.0
npm --version
3.10.3

To install all the npm dependencies you need to run:

npm install

Then to start up webpack dev server run:

npm start

Then open a browser and open: http://localhost:8080/
Or if you want hot-reloading: http://localhost:8080/webpack-dev-server/
(Try this, then make a change to one of the React-files, HMR is awesome)

To run the tests run:

npm test

Given more time I would:
 - Add more tests
 - Maybe port tests to Karma/PhantomJS so that you can simulate some user interactions (i.e. autocomplete)
 - Fix up the UI to look nice, it's very skeletal as it is.
 - Fix annoying bug with type-ahead when you select with keyboard then click somewhere on page
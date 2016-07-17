# weatherapp

To install all the npm dependencies you need to run:

npm install

Then to start up webpack dev server run:

npm start

Then open a browser and open: http://localhost:8080/

To run the tests run:

npm test

Given more time I would:
 - Fix the webpack hot-reloading (it's pernickety and I couldn't get it to work quite right)
 - Add more tests
 - Maybe port tests to Karma/PhantomJS so that you can simulate some user interactions (i.e. autocomplete)
 - Fix up the UI to look nice, it's very skeletal as it is.
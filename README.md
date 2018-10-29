# phone-catalog
React web page for displaying several mobile phones

## How to run API

### Step 1
After downloading the repository the your computer, open the terminal, enter the project folder, then run `cd server` to enter the serve folder, then run `npm install` in order to install all the dependencies.

### step 2
After installing all the dependecies, run `node index.js`to initialize the server. Now you can type http://localhost:4000/api/phones in the broswer to see the all the products.

You also can change parameters to see a specific brand, or model, for example, you can only see apple´s products with url  http://localhost:4000/api/apple, and http://localhost:4000/api/apple/iphone-xs to see all the iphone xs. Or use http://localhost:4000/api/watch to see all the watches.
(Only exists four brands: apple,samsung,huawei,xiaomi and three types of product: mobile, tablet and watch)

## How to run phone catalog app
Now you have initialized the serve, our app can get the data from API throught the server.

### Step 1
back to the project root folder, run `cd client` to enter the client folder, then run `npm install` in order to install all the dependenciesfor the App.

### Step 2
After installing all the dependecies, run `npm start`to run the App.

## About the App
It´s a simple web page to display products, using react adn redux.
Youcan click the menu "mobile tablet watch" to the products of each category, you also can click the logo on the right side of the navbar the see the products of a speific brand.

## End to End Testing
I use cypress to run the E2E testing, I have writen some script to test the front end side, the script is inside the cypress folder--->intergration---->phoneCatalogApp_spec.js

Back to the project root folder, run `npm install` in order to install cypress. 
Then In the terminal run `./node_modules/.bin/cypress open` to open the cypress CLI, then select phoneCatalogApp_spec.js to run the test.

I hope you like this project !



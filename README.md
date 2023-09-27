# TProTestSuite
TProTestSuite enables you to test the application's ("TPro app") login functionality. The suite changes the password and validates the error message when a wrong password is entered.

# Prerequisites

* NodeJS and NPM

# Setup

To setup:
* Clone this repo

# Running 

* This repo has url and the login details. To get the test up and running do the following:
* You should run each "IT" block one at a time by adding "only" as follows: it.only('LoggingTest'), ()=>{}
* In the command line at the cloned repo directory, Run:  npx cypress run --headed --browser chrome --spec "cypress/e2e/MyTProTestSuite.cy.js".


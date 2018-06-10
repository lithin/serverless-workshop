# Serverless Basics

## What can serverless framework do for us?

* Check all that serverless framework cli can do `sls -h`

## How do we define a simple service?

* Use `sls create -t aws-nodejs` to set up serverless framework configuration
* Define service name, framework version, provider (in our case AWS) in `serverless.yml`
* Point function to `getUser` in `index.js`
* Invoke your function locally `sls invoke local -f getUser -p event.json`

## How do we deploy?

* Deploy service `sls deploy` and check all resources that have been created
* Use `sls info` to learn more about your deployed service
* Use `sls invoke -f getUser -p event.json` to invoke the deployed function

## How do we add an event & check it works?

* Add an http event
* `sls deploy` again, find your url and use `curl`, your browser, or postman to hit the endpoint with user id 1
* Hit the endpoint with a different user id and check why request failed using `sls logs -f getUser`
* Make a change to code and deploy with `sls deploy -f getUser`

## How do we make it work with FE app?

* Add CORS
* Re-deploy

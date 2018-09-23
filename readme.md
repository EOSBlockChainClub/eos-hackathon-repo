# Prepare it

Create Docker containers and smart contract:

```sh
$ source scripts/clean.sh
$ source scripts/start.sh
$ source scripts/deploy.sh
```

# To add dummy test data

If you want.

```sh
$ source scripts/testacc.sh
$ source scripts/testdata.sh
```

# Run the UI

```sh
$ cd react-app
$ npm install
$ npm start
```

# Use it

## Request for data

* Click on "Send Agreement"
* Enter the hash of an agreement
* Click "Submit"
* Refresh the page

You should see your agreement without the data.

## Send data to a request

* Click on "Send Data"
* Enter the primary key of the agreement to which you answer
* Enter the hash of the data to send
* Click "Submit"
* Refresh the page

You should see the agreement and the data listed.

## Get a data trace

Make sure you have added the dummy data, as mentioned higher up.

* Click on "Trace Data"
* Enter the hash of a data piece to trace
* Enter the original requester account name
* Click "Submit"

You should see a modal window that list the succession of transfers.
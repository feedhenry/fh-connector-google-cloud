# FeedHenry Google APIs Connector

[![Dependency Status](https://img.shields.io/david/feedhenry-templates/fh-connector-google-cloud.svg?style=flat-square)](https://david-dm.org/feedhenry-templates/fh-connector-google-cloud)

The FeedHenry Google APIs Connector. For more information on Google APIs see: [https://github.com/google/google-api-nodejs-client](https://github.com/google/google-api-nodejs-client).

## Group Google APIs Connector API

### Shorten a url using Google's URL shortening API

|              |                   |
|--------------|-------------------|
| Endpoint     | /cloud/googleapis |
| HTTP Method  | POST              |


#### Request (application/json)

```json
{
    "url": "http://google.ie"
}
```

#### Response 200 (application/json)

```json
{
}
```

## Tests

All the tests are in the "test/" directory. The cloud app is using mock as the test runner. 

### Unit tests

```shell
npm run unit
```

### Unit coverage

```shell
npm run coverage
```
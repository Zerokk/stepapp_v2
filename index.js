"use strict";
const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const app = express();
const api = new ParseServer({
    databaseURI: 'mongodb://localhost:27017/dev',
    cloud: '/home/dev/cloud/cloud.js',
    appId: 'stepapp2',
    masterKey: '0jKgwr,5rp.359Gt$k1qA',
    fileKey: 'optionalFileKey',
    serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});
// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);
app.listen(1337, function () {
    console.log('parse-server-example running on port 1337.');
});

const express = require('express');

module.exports = {
    express: require('express'),
    bodyParser: require('body-parser'),
    http: require('http'),
    app: express(),
    fs: require('fs'),
};
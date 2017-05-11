const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
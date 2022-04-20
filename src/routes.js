const express = require('express');
const fileUpload = require('express-fileupload');

const CompanyController = require('./controllers/CompanyController');

const routes = express.Router();

routes.post('/companies/import-file', fileUpload(), CompanyController.importFromCsv);
routes.post('/companies/merge-file', fileUpload(), CompanyController.mergeWithCsv);
routes.get('/companies', CompanyController.query);

module.exports = routes;
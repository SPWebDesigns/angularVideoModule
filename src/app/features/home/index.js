import angular from 'angular';
import uirouter from 'angular-ui-router';

import ngSanitize from 'angular-sanitize';

import routing from './home.routes';
import HomeController from './home.controller';
import './home.css'




export default angular.module('app.home', [])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
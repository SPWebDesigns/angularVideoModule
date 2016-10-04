import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './home';

import videoJs from 'vjs.video'

angular.module('app', [uirouter, home, videoJs])
  .config(routing);
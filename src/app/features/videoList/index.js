import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './videoList.routes';
import VideoList from './videoList.controller';

import './videoList.css'

export default angular.module('app.videoList', [uirouter])
  .config(routing)
  .controller('VideoList', VideoList)
  .name;
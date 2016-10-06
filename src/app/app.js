import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import ngSanitize from 'angular-sanitize';
import routing from './app.config';
import home from './features/home/';
import videoList from './features/videoList/';

import videoJs from 'vjs-video'
import 'videojs-contrib-hls'



angular.module('app', [uirouter, ngSanitize, videoList, home])
  .config(routing);
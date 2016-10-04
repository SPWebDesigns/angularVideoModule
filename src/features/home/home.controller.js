import videoList from './videoList.js';

//const videoList =  require('./videoList.js');

export default class HomeController {
  constructor() {
    this.name = 'World';
    this.videoList;
  }

  changeName() {
    this.name = 'angular-tips';
  }
}
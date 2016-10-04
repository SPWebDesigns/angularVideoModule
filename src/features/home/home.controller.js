const videoList = require("./videoList.json");
import ngSanitize from 'angular-sanitize';

//const videoList =  require('./videoList.js');

export default class HomeController {
  constructor() {
    this.name = 'World';
    this.videoList = videoList;
    this.$sce = ngSanitize;
  }

  trustSrc(src) {
    console.log($sce.trustAsResourceUrl(src));
    return $sce.trustAsResourceUrl(src);
  }

  changeName() {
    this.name = 'angular-tips';
  }
}

//HomeController.$inject = ['$sce'];
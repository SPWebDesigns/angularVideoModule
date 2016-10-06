const videoList = require("./videoList.json");

export default class VideoList {
  constructor($scope, $state, $sce) {
    this.name = 'World';
    this.videoList = videoList;
    this.$sce=$sce;
    //this.player = videojs('example-video');
    //this.player.play();
    let player = videojs('my-video');
    player.playlist(myplaylist);
    player.thumbnail(myThumbnailConfig);
  }

  trustSrc(src) {
    console.log('here');
    console.log(src);
    return this.$sce.trustAsResourceUrl(src);
  }

  changeName() {
    this.name = 'angular-tips';
  }
}

VideoList.$inject = ['$scope','$state', '$sce'];

//import ngSanitize from 'angular-sanitize';
//const videoList =  require('./videoList.js');



class HomeController {
  //blic $state;
  constructor($scope, $state, $sce) {
    this.name = 'World';
    this.$state = $state;
    //this.ngSanitize=ngSanitize;
    //this.$sce = ngSanitize;
    console.log($sce)

  }

  goVideoList() {
    this.$state.go('videoList');
  }

  changeName() {
    this.name = 'angular-tips';
  }
}

HomeController.$inject = ['$scope','$state', '$sce'];

export default HomeController;
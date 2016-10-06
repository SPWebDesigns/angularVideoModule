routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('videoList', {
      url: '/videoList',
      template: require('./videoList.html'),
      controller: 'VideoList',
      controllerAs: 'vl'
    });
}
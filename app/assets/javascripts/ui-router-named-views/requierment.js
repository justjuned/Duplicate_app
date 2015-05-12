angular.module('named-views.requierment', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.requierment', {
        url: 'requierment',
        views: {
          'header@': {
            templateUrl: 'AdminHeader.html'
          },
          'content@': {
            templateUrl: 'requierment.html',
            controller: 'RequiermentCtrl'
          }
        }
      }
    )
  })
;


angular
.module('app')
.config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: true
  });

  $breadcrumbProvider.setOptions({
    prefixStateName: 'app.main',
    includeAbstract: true,
    template: '<li class="breadcrumb-item" ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li>'
  });

  $stateProvider
  .state('app', {
      abstract: true,
      //templateUrl: 'Content/views/common/layouts/full.html',
      //page title goes here
      ncyBreadcrumb: {
          label: 'Root',
          skip: true
      },
      resolve: {
          loadCSS: ['$ocLazyLoad', function ($ocLazyLoad) {
              // you can lazy load CSS files
              return $ocLazyLoad.load([{
                  serie: true,
                  name: 'Font Awesome',
                  files: ['Content/css/font-awesome.min.css']
              }, {
                  serie: true,
                  name: 'Simple Line Icons',
                  files: ['Content/css/simple-line-icons.css']
              }]);
          }]
      }
  })
  .state('app.main', {
      url: '/upload',
      templateUrl: 'Home/UploadPartial',
      controller: 'eventCtrl',
      ncyBreadcrumb: {
          label: 'Home',
      }
  })
  .state('appSimple', {
      abstract: true,
      templateUrl: 'Content/views/common/layouts/simple.html',
      resolve: {
          loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
              // you can lazy load files for an existing module
              return $ocLazyLoad.load([{
                  serie: true,
                  name: 'Font Awesome',
                  files: ['Content/css/font-awesome.min.css']
              }, {
                  serie: true,
                  name: 'Simple Line Icons',
                  files: ['Content/css/simple-line-icons.css']
              }]);
          }],
      }
  })
 .state('app.search', {
     url: '/SearchMedia',
     templateUrl: 'Media/SearchPartial',
     controller:'ctrlContact',
     //page title goes here
     ncyBreadcrumb: {
         label: 'Search',
     },
 })
  // Additional Pages
  .state('appSimple.login', {
      url: '/login',
      templateUrl: 'Content/views/pages/login.html'
  })
  .state('appSimple.register', {
      url: '/register',
      templateUrl: 'Content/views/pages/register.html'
  })
  .state('appSimple.404', {
      url: '/404',
      templateUrl: 'Content/views/pages/404.html'
  })
  .state('appSimple.500', {
      url: '/500',
      templateUrl: 'Content/views/pages/500.html'
  });

     $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});

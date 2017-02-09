var app = angular.module('app',['ngMaterial']);
// app.config(function($routeProvider){
//   $routeProvider.when('root',{
//     templateUrl:"/partials/partial1.html"
//   })
//   .when('/partial2',{
//     templateUrl:"/partials/partial2.html"
//   })
//   .when('/partial3',{
//     templateUrl:"/partials/partial3.html"
//   })
//   .otherwise({redirectTo:'root'})
// });
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('green')
    .warnPalette('blue');
});
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});

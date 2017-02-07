app.controller('myController',['$scope','$mdDialog',function($scope,$mdDialog){
  $scope.showDetail = function(ev){
    $mdDialog.show(
      $mdDialog.alert()
      .parent(angular.element(document.querySelector('#popUpContainer1')))
      .clickOutsideToClose(true)
      .title("Details")
      .textContent(" User can log in  and list their product for sale and other users can buy products thats avaliable. Technologies used: MongoDB, Express.js, Angular.js, Node.js")
      .ariaLabel('Alert Dialog Demo')
      .ok('Close')
      .targetEvent(ev)
    )
  }
}])

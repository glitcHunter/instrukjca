app.controller("myCtrl",function($scope)
{
  $scope.name ="asda";
  
  $scope.boo = false;
  
  $scope.foo = function()
  {
    return $scope.boo = !$scope.boo;
  };
  
});
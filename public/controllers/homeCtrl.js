angular.module('myApp').controller('homeCtrl', function($scope, authService) {
       
    authService.getCurrentUser().then(function(user) {
        $scope.user = user;
    });
    
});
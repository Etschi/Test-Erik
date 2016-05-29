angular.module('app.controllers', [])
  
.controller('willkommenCtrl', function($scope) {

})
   
.controller('startseiteCtrl', function($scope) {

})
   
.controller('messwerteCtrl', function($scope) {

})
   
.controller('notfallCtrl', function($scope) {

})
   
.controller('medikamenteCtrl', function($scope) {

})
   
.controller('notizenCtrl', function($scope, $ionicPopup) {

$scope.tasks =	[ 

{title: "Beispiel"},
			
				];

$scope.newTask = function() {
      $ionicPopup.prompt({
        title: "Neue Notiz",
        template: "Notiz eingeben:",
        inputPlaceholder: "Notiz",
        okText: 'Erstelle Notiz'
      }).then(function(res) {    // promise 
        if (res) $scope.tasks.push({title: res});
      })
    };




})



   
.controller('erinnerungenCtrl', function($scope) {

})
 
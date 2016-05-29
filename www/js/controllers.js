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
   
.controller('notizenCtrl', function($scope, $ionicPopup, $ionicListDelegate) {

$scope.tasks =
      [
        {title: "Beispiel Notiz"},
      
      ];

$scope.newTask = function() {
      $ionicPopup.prompt({
        title: "Neue Notiz",
        template: "Notiz eingeben:",
        inputPlaceholder: "Notiz",
        okText: 'Notiz erstellen',
        cancelText: 'Abbruch'
      }).then(function(res) { 
        if (res) $scope.tasks.push({title: res});
      })
    };
$scope.edit = function(task) {
      $scope.data = { response: task.title };
      $ionicPopup.prompt({
        title: "Edit Task",
        scope: $scope
      }).then(function(res) {    // promise 
        if (res !== undefined) task.title = $scope.data.response;
        $ionicListDelegate.closeOptionButtons();
      })
    };

})
   
.controller('erinnerungenCtrl', function($scope) {

})
 
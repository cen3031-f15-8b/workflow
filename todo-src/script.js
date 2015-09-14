// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){

  $scope.todos = [
    {
      text: "Learn Angular"
    },
    {
      text: "Learn node"
    }
  ];

  $scope.newItem = "";

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push({
        text: $scope.newItem,
      });
      $scope.newItem = "";
    }
  }
    
  $scope.deleteItem = function(index){
    console.log("in delete");
    $scope.todos.splice(index, 1);
  }
    
  
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/
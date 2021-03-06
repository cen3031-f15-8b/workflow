// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  var priority = {
    NOW: 0,
    TOMORROW: 1,
    SOMEDAY: 2
  };

  $scope.todos = [
    {
      text: "Learn Angular",
      priority: priority.NOW
    },
    {
      text: "Learn node",
      priority: priority.NOW
    }
  ];
  $scope.priorities = priority;

  $scope.completeItems = [];

  $scope.newItem = "";
  $scope.newItemPriority = priority.NOW;

  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push({
        text: $scope.newItem,
        priority: $scope.newItemPriority
      });
      $scope.newItem = "";
      $scope.newItemPriority = priority.NOW;
    }
  };

  $scope.toggleEditMode = function(){
    console.log("in edit");
    $scope.editmode = !($scope.editmode);
  };

  $scope.deleteItem = function(index){
    console.log("in delete");
    $scope.todos.splice(index, 1);
  };

  $scope.completeItem = function(index){
    console.log("in complete");
    $scope.completeItems.push($scope.todos[index]);
    $scope.deleteItem(index);
  };

  $scope.clearCompletedItems = function(){
    console.log("in clearCompletedItems");
    $scope.completeItems.length = 0;
  };

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

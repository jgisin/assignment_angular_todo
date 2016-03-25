todoApp.controller('TodoCtrl', [
  '$scope', 'todoService', function($scope, todoService){

    $scope.items = todoService.getItems();
    $scope.filters = todoService.getFilters();

    $scope.test = '-date';

    $scope.createTodo = function(text, date) {
      todoService.createTodo(text, date);
      $scope.text = '';
      $scope.date = '';
    };

    $scope.deleteTodo = function($index){
      todoService.deleteTodo($index);
    };

    $scope.clearCompleted = function(){
      todoService.clearCompleted();
    };

    $scope.showHide = true;

    $scope.showHidden = function() {
      if ($scope.showHide) {
        $scope.showHide = false;
      } else {
        $scope.showHide = true;
      }
    };
  }
]);

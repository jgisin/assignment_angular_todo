todoApp.controller('TodoCtrl', [
  '$scope', '$window', function($scope, $window){
    $scope.items = [{ text: "Get groceries from the store",
                dueDate: new Date(),
                completed: false }];

    $scope.createTodo = function(text, date) {
      var todoObj = {text: text, dueDate: date, completed: false};
      $scope.text = '';
      $scope.date = '';
      $scope.items.push(todoObj);
    };

    $scope.deleteTodo = function($index){
      $scope.items.splice($index, 1);
    };

    $scope.clearCompleted = function(){
      var counter = 0;
      var length = $scope.items.length;
      for(var i=0; i < length; i++){
        if($scope.items[i - counter].completed){
          $scope.deleteTodo(i - counter);
          counter++;
        }
      }
    };

    $scope.showHide = true;

    $scope.showHidden = function() {
      if ($scope.showHide) {
        $scope.showHide = false;
      } else {
        $scope.showHide = true;
      }
    }
  }
]);

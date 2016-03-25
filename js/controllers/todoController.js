todoApp.controller('TodoCtrl', [
  '$scope', '$window', function($scope, $window){
    $scope.items = [{ text: "Get groceries from the store",
                dueDate: new Date(),
                completed: false }];

    $scope.createTodo = function(text, date) {
      var todoObj = {text: text, dueDate: date, completed: false}
      $scope.text = '';
      $scope.date = '';
      $scope.items.push(todoObj);
    }
  }
]);

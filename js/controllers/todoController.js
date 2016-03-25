todoApp.controller('TodoCtrl', [
  '$scope', function($scope){
    $scope.items = [{ text: "Get groceries from the store",
                dueDate: new Date(),
                completed: false }];
  }
]);

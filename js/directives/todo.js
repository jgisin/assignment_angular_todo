todoApp.directive('todoListItem', function(){
  return {
    templateUrl: "js/directives/todo.html",
    restrict: "A",
    scope: {
      item: "=",
      deleteTodo: "&"
    }
  };
});

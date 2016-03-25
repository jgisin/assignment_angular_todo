todoApp.factory('todoService', function(){
  var obj = {};

  obj.filters = ['None', 'Completed on Top', 'Completed on Bottom', 'Due Date Ascending', 'Due Date Descending'];

  obj.getFilters = function(){
    return obj.filters;
  };

  obj.items = [{ text: "Get groceries from the store",
              dueDate: new Date(),
              completed: false }];

  obj.createTodo = function(text, date) {
    var todoObj = {text: text, dueDate: date, completed: false};
    obj.items.push(todoObj);
  };

  obj.deleteTodo = function($index){
    obj.items.splice($index, 1);
  };

  obj.clearCompleted = function(){
    for(var i=obj.items.length - 1; i >= 0; i--){
      if(obj.items[i].completed){
        obj.deleteTodo(i);
      }
    }
  };

  obj.getItems = function(){
    return obj.items;
  };

  return obj;
});

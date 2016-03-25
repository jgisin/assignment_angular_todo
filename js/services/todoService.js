todoApp.factory('todoService', function(){
  var obj = {};

  obj.filters = [{name: 'None', value: ''}, 
              {name: 'Completed on Top', value: "'completed': false"}, 
              {name: 'Completed on Bottom', value: "'completed': true"}, 
              {name: 'Due Date Ascending', value: 'date'}, 
              {name: 'Due Date Descending', value: '-date'}
              ];

  obj.getFilters = function(){
    return obj.filters;
  };

  obj.items = [{ text: "Get groceries from the store",
              dueDate: new Date(),
              completed: false },
              { text: "apples",
              dueDate: new Date() - 20000 * 3600,
              completed: false },
              { text: "oranges",
              dueDate: new Date() - 60000 * 3600,
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

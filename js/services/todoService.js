todoApp.factory('todoService', function(){
  var obj = {};

  obj.filters = [{name: 'None', value: ''},
              {name: 'Completed on Top', value: "-completed"},
              {name: 'Completed on Bottom', value: "completed"},
              {name: 'Due Date Ascending', value: 'dueDate'},
              {name: 'Due Date Descending', value: '-dueDate'}
              ];

  obj.getFilters = function(){
    return obj.filters;
  };

  var _items = [{ text: "Get groceries from the store",
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
    _items.push(todoObj);
  };

  obj.deleteTodo = function($index){
    _items.splice($index, 1);
  };

  obj.clearCompleted = function(){
    for(var i=_items.length - 1; i >= 0; i--){
      if(_items[i].completed){
        obj.deleteTodo(i);
      }
    }
  };

  obj.getItems = function(){
    return _items;
  };

  return obj;
});

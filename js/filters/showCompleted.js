todoApp.filter('showCompleted', function() {

  return function(collection) {
    collection.forEach(function(element){
      if (!element.completed) {
        return element;
      }
    })
  }
})
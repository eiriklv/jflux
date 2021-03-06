define(['jflux', 'AppState'], function ($$, AppState) {

  return $$.component(function () {

    this.listenTo(AppState, this.update);
    this.render = function (compile) {

      var createRemainingText = function () {
        var remaining = AppState.getRemainingCount();
        return remaining + (remaining === 1 ? ' item' : ' items') + ' remaining';
      };

      this.allClass = {selected: $$.path() === '/'};
      this.activeClass = {selected: $$.path() === '/active'};
      this.completedClass = {selected: $$.path() === '/completed'};
      return compile(
        '<div>',
          '<span id="todo-count">',
            '<strong>',
              createRemainingText(),
            '</strong>',
          '</span>',
          '<ul id="filters">',
            '<li>',
              '<a href="/" $$-class="allClass">All</a>',         
            '</li>',
            '<li>',
              '<a href="/active" $$-class="activeClass">Active</a>',
            '</li>',
            '<li>',
              '<a href="/completed" $$-class="completedClass">Completed</a>',
            '</li>',
          '</ul>',
        '</div>'
      );

    };

  });

});
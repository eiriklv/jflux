var Constructor = require('./../Constructor.js');

var removeFromList = function (renders, initialRenders) {

  var rendersIds = renders.map(function (render) {
    return render[0] instanceof Constructor ? render[0].props.id || render[0]._jfluxIndex : render[0].attr('id') || render[0]._jfluxIndex;
  });

  var initialRendersIds = initialRenders.map(function (initialRender) {
    return initialRender[0] instanceof Constructor ? initialRender[0].props.id || initialRender[0]._jfluxIndex : initialRender[0].attr('id') || initialRender[0]._jfluxIndex;
  });

  // Go through list backwards and remove item
  for (var x = initialRendersIds.length - 1; x >= 0; x--) {
    var id = initialRendersIds[x];
    if (rendersIds.indexOf(id) === -1) {

      // Use _remove if it is a component or remove if it is a jQuery object
      initialRenders[x][0] instanceof Constructor ? initialRenders[x][0]._remove() : initialRenders[x][0].remove();
      initialRenders.splice(x, 1);

    }
  }

};

module.exports = removeFromList;
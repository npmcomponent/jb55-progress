
var hasClass = require('jb55-has-class');

module.exports = Progress;

function Progress(el) {
  if (!(this instanceof Progress)) return new Progress(el);

  // we always want to adjust the width of the bar element...
  this.el = hasClass(el, "progress")? el.querySelector("bar") : el;
}

Progress.prototype.update = function(percent) {
  this.el.style.width = percent + "%";
};


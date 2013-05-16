
/*
 * create new instance of Child
 */
function Child(el) {
  this.el = el;
  return this;
};

/*
 * return the child at a given index
 * or all, if no index is defined
 */
Child.prototype.get = function (index) {
  return index !== undefined ? this.el.childNodes[index] : this.el.childNodes;
};

/*
 * return all child nodes
 */
Child.prototype.getAll = function () {
  return this.get();
};

/*
 * add an element to a given index
 * if no index is defined: append it
 */
Child.prototype.add = function (element, index) {
  var referenceElement;
  if (index === null || index === undefined) {
    this.el.appendChild(element);
  }else if (index === 0) {
    referenceElement = this.get(index);
    this.el.insertBefore(element, referenceElement);
  } else {
    referenceElement = this.get(index-1);
    this.el.insertAfter(element, referenceElement);
  }
  return this;
};

/*
 * remove a child at given index or
 * remove given child element or
 * remove all child nodes
 */
Child.prototype.remove = function (arg) {
  var children,
      element = arg;
  if (arg === undefined) {
    children = this.get();
    for (var i = 0; i < children.length; i++) {
      this.el.childNodes.removeChild(children[i]);
    }
  } else {
    if (arg == arg*1)
      element = this.get(arg);
    this.el.childNodes.removeChild(element);
  }
  return this;
};

/*
 * remove all child nodes
 */
Child.prototype.removeAll = function () {
  return this.remove();
};

module.exports = function (el) {
  return new Child(el);
};

# child

  A simple component to add/remove/get child nodes.

## Installation

    $ component install mikanda/child


## Examples

    var c = child(el)
      .add(child1)
      .add(child2, 0);
    console.log(c.getAll());
    c.removeAll();


## API

### child(el)

Returns a new instance of ``Child``.

#### child#get(index)

Returns the child at ``index``.

#### child#getAll()

Returns all child nodes.

#### child#add(element[, index])

Adds the ``element`` as child node at the given index or appends it to the end.

#### child#remove(element)

Removes the given ``element`` from the child nodes.

#### child#remove(index)

Removes the element at the given ``index`` from the child nodes.

#### child#removeAll()

Removes all child nodes.

## License

  LGPL

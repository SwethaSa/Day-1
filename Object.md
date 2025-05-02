# JavaScript Objects and Their Internal Representation

In JavaScript, everything that is not a simple value (like string, number, boolean, null, undefined, symbol or bigint) is called an object. An object is a collection of named values (properties), where each name is a string (or symbol) and the value can be anything, even another object or a function.

 Example:
--------------------------------------------
".js
const person = {
  name: "Swetha",
  age: 24,
  welcome() {
    console.log("Hi, I’m " + this.name);
  }
};

person.welcome(); // Hi, I’m Swetha"

----------------------------------------------

## How Engines Store Objects
Modern JavaScript engines ( V8 in Chrome) makes objects work fast. They use:

| Features            | Uses                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| Hidden Classes     | Engine gives each object a “shape” based on its properties and order.                              |
| Inline Cache       | Engine remembers where it found a property last time, so it can go there directly.                 |
| Fast vs Dictionary | Small, stable objects keep data in quick slots; very dynamic objects switch to a map-like storage. |


=>Hidden Classes
While writing const obj = { a: 1, b: 2 }, the engine assigns it shape A.
If you then do obj.c = 3, it changes to shape B.
Objects with the same properties in the same order share one shape, which makes accessing properties faster.

=>Inline Cache
The first time you do obj.b, the engine finds where “b” is stored. Next time, it skips the search and goes straight to that place—until the object shape changes.

=>Fast vs Dictionary Storage
If you keep adding or removing properties a lot, the engine may switch the object into a slower, but more flexible one.


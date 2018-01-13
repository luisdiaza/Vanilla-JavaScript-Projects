# **Houses multiple vanilla JavaScript projects.**

- **To Do List:** A To Do List that dynamically inserts tasks into the DOM. Users are able to delete tasks entered as well as search for them. Application persists to local storage. Uses the **Materialize CSS framework**.

- **Loan Calculator:** An application that calculates how long it would take to repay back a loan as well as the total amount. Uses **Bootstrap**.

- **Number Guesser:** A game that asks user to guess a number between a certain range with limited guesses. Uses **Skeleton CSS**.  

## Purpose:

To master the language to prevent an over reliance on frameworks and libraries.

## Concepts learned:

**Event Bubbling:** When an event is  triggered, the event bubbles up from the originating element all the way up to the top of the DOM tree.

**Event Delegation:** A simple technique by which we add a single event handler to a parent element in order to avoid having to add event handlers to multiple child elements.  Using event delegation, it is possible to add an event handler to an element, wait for the event to bubble up from a child element and easily determine from which element the event originated from.

- **Note:** For event listeners to be bounded on elements, they **MUST BE PRESENT AT PAGE LOAD.** This becomes an issue when dynamically inserting elements to DOM.

**Object Oriented JavaScript:** Javascript is known as a **prototype based language**. It uses special functions called **constructor functions** to define objects and their features. Each object has a prototype object which acts as a template from which it inherits its methods and properties from. When those object instances are created, a link is made between the object instance and its prototype and the properties and methods are "accessed" by walking up the chain of prototypes.

- **Note:** This is different from "classic" Object Oriented languages where core functionality is copied over from one class to another.  (Ie from a parent class to a child class)

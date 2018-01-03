# **Houses multiple vanilla JavaScript projects.**

- **To Do List:** A To Do List that dynamically inserts tasks into the DOM. Users are able to delete tasks entered as well as search for          them. Application persists to local storage. Uses the Materialize CSS framework.

- **Loan Calculator:** An application that calculates how long it would take to repay back a loan as well as the total amount. Uses Bootstrap.

## Purpose:

To master the language to prevent an over reliance on frameworks and libraries.

##Concepts learned:

**Event Bubbling:** When an event is  triggered, the event bubbles up from the originating element all the way up to the top of the DOM tree.

**Event Delegation:** A simple technique by which we add a single event handler to a parent element in order to avoid having to add event handlers to multiple child elements.  Using event delegation, it is possible to add an event handler to an element, wait for the event to bubble up from a child element and easily determine from which element the event originated from.

For event listeners to be bounded on elements, they **MUST BE PRESENT AT PAGE LOAD.** This becomes an issue when dynamically inserting elements to DOM.

## Answers to Questions

### 1. 
## getElementById

1.selects one element by its unique id.
2.return- element, and that is one element
3.Performance-Fastest
4.Use it--when we selecting one known id.

## getElementsByClassName

1.selects all elements with a given class name.
2.return- HTMLCollection, and that is Multiple elements
3.Performance-Fast
4.Use it--when we need live class list

## querySelector

1.Selects the first element that matches a CSS selector
2.return- Element, and First matching element only
3.Performance-Slightly slower
4.Use it--when we want flexibility

## querySelectorAll

1.Selects all elements matching a CSS selector.
2.return- NodeList, All matching elements
3.Performance-Slightly slower
4.Use it--when we selecting multiple elements with CSS selectors

### 2. How do you create and insert a new element into the DOM?
Create the element

Add content / attributes

Insert it into the DOM

### 3. What is Event Bubbling? And how does it work?

Event Bubbling:- Event Bubbling is a type of event propagation in JavaScript where an event starts from the target element and bubbles up to its parent elements in the DOM tree.

	It work-----
1.An event happens on a child element.

2.The event first runs on that element.

3.Then it moves upward to its parent.

4.It continues until it reaches the root (document).

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation in JavaScript :--Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of attaching separate event listeners to multiple child elements.

	useful------
1/Better Performance,  2/Works for Dynamically Added Elements,  3/Cleaner and Shorter Code
Create the element

Add content / attributes

Insert it into the DOM
### 5. What is the difference between preventDefault() and stopPropagation() methods?

Stops default browser action?	✅ Yes	❌ No

Stops event bubbling?	❌ No	✅ Yes

Common use case	Forms, links	Nested elements
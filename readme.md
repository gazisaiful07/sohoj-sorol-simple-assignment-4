What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans:- 
getElementById is a  selector which does select and element by ID. if it doesn't found any single element, it's show "null".

How do you create and insert a new element into the DOM?

ans:-
To create and insert a new element into the DOM, using document.createElement() , add content/attributes and insert it into the DOM using child like appendChild().
as exaple: 
const div = document.createElement("div");
div.textContent = "Hello";
document.body.appendChild(div);

What is Event Bubbling? And how does it work?

ans:-
Event Bubbling is a process where an event starts from the target element and propagates upward to its parent elements in the DOM.

If a button into a div and if they have click event in both than the button is clicked first on the target element, then the event bubbles up to parrent <div> and after it continues upward.




What is Event Delegation in JavaScript? Why is it useful?

ans:-
Event Delegation is a system where  a single event listener to a parent element instead of adding event listeners to multiple child elements.

most commonly used for better performance, fewer event listeners, less repetation and easier to use.


What is the difference between preventDefault() and stopPropagation() methods?

ans:-

Both are event methods in javascript, but they do completely different things.
preventDefault() stops the browser's defaults behaviour. And stopPropagation() stops the event from the bubbleing up.


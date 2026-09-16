# What are Events in JavaScript?

Events do not only exist in JavaScript but in all programming languages. The primary idea behind events in JavaScript is the ability to run code when a certain event happens. This could be a user clicking a button or any other events you might think of that could trigger some code to run.

Although there’s a distinct difference between events on the browser and server side of JavaScript, the core idea remains the same.

As events transport data, an object is created and given as an argument to the function you set as an event handler. When events occur in JavaScript, an object that contains information about that event gets created. This object will then be passed as an argument to the event handler function. This gives you easy access to the event data and makes it easy to respond as well.

### Here's a more detailed explanation:

* An event can be called by different actions. Examples are clicks, mouse movements, and time intervals.
* Javascript creates an event object whenever an event occurs. This object has properties and methods, and provides details about the event.
* You can set a function that will be executed whenever the event occurs with event handlers in JavaScript.
* The event object is automatically created whenever the event is triggered. This object is therefore passed as an argument to the event handler function.

Let's see what this looks like in code:

const button = document.getElementById('check')


button.addEventListener('click', (e) => {
  console.log('Event type: ' + e.type);
  console.log('Target element: ' + e.target);
});


//  The answer

// Event type: click
// Target element: [object HTMLButtonElement]
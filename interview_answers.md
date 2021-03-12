# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
stateful components keep track of dynamic data while function components get their data through props
2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount runs after the first render, and componentWillUpdate runs after the render finishes loading
3. Define stateful logic.
any code that uses state or the behavior caused by the use of one or more hooks
4. What are the three step of creating a successful test? What is done in each phase?
arrange: renders stuff to the dom
act: queries the dom for the selected element
assert: check that the queried element exists in the dom 
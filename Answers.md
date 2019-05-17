1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  .map(), .concat(), Object.assign(), spread operator...., not clear on second part of question 
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions: Just objects dispatching data (payload)and type of action to reducers 
reducers: Updates store with with payload from actions
store: single source of truth where we store our data 
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Applcation State: global state that can be accessed by the component tree. 
Component State: local state managed within a component/outside of redux store. Have to be passed down as props to other components that needs it
4.  What is middleware?
is a third party extension or a function that adds functionality to redux. 
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
a middleware that allows us to write action creators that return a function instead of an action
6.  Which `react-redux` method links up our `components` with our `redux store`?
connect()


CLASS COMPONENTS:::

1.Greet.js -- functional component

2.Message.js -- Class Stateful component (change state on button click)

3.Counter.js-- Implementing Counter
#always make use of setState and never modify state directly.
#Code has to be executed after the state has been updated? Place the code in the callback function which is the 2nd argument to the setstate method.
# when uou have to update state based on the prevstate value, pass in a function as an argument instead of the regular object.

4.EventBind.js -- Bind events in 4 possible ways in Class components (using bind, arrow func, etc)

5. ParentComponent && ChildComponent -- Called a method in the ParentComponent through the button in ChildComponent as props.
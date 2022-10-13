# Deel - React Part 2

## What is the difference between Component and PureComponent? give an example where it might break my app

They are almost the same. The only difference is Pure Components handle shouldcomponentUpdate method themselves.

## Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

ShouldComponentUpdate method could break context propagation.

## Describe 3 ways to pass information from a component to its PARENT

- Using Context

- Using a state management library such as Redux

- Using local storage

## Give 2 ways to prevent components from re-rendering

- Using memoization hooks like useMemo and useCallback

- Using React fragments

## What is a fragment and why do we need it? Give an example where it might break my app

Fragments lets you group a list of children without adding extra nodes to the DOM.

## Give 3 examples of the HOC pattern

A HOC is a function that takes a component and returns a component. It is used to reuse component logic.

This would be the most basic example:

```
const withNothing = Component => ({ ...props }) => (
  <Component {...props} />
);
```

It can be invoked like this:

```
const ComponentWithNothing = withNothing(Component);
const instance = <ComponentWithNothing someProp="test" />;
```

Using class components:

```
const higherOrderComponent = WrappedComponent => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />
    }
  }
  return HOC
}
```

```
const SimpleHOC = higherOrderComponent(MyComponent);
```

## What's the difference in handling exceptions in promises, callbacks and async...await

Promises and callbacks can handle exceptions within the catch method. When using async/await you need to use a try/catch block to handle exceptions.

## How many arguments does setState take and why is it async

It has two parameters, the state to set as the first one and an optional callback as the second one. It is async because it could be an expensive operation and could block the app.

## List the steps needed to migrate a Class to Function Component

1. Change the class to a function
2. Remove the render method
3. Convert all methods to functions
4. Remove references to this
5. Remove constructor
6. Remove event handler bindings
7. Replace this.setState
8. Use useEffect for state update side effects

## List a few ways styles can be used with components

- Using styled components
- Inline CSS
- CSS in JS with classnames

## How to render an HTML string coming from the server

It is possible to use dangerouslySetInnerHTML property to prevent cross site scripting.
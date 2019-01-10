# react-redux-scaffold
A **WIP** project to learn React+Redux concepts, and setup a project scaffold.

Largely adopted from: https://www.valentinog.com/blog/redux/

## Install, run
```javascript
npm install
npm start
```

## Next
- Add some example UI components with Material UI.
  - [Docs](https://material-ui.com/)
  - [Tutorial](https://medium.freecodecamp.org/meet-your-material-ui-your-new-favorite-user-interface-library-6349a1c88a8c)
  - [Icons](https://material.io/tools/icons/?style=baseline)
- Add Routing example

## File structure:

- `/src`
  - `/js`
    - `/actions` action object definitions
    - `/components` react UI components
    - `/constants` e.g. action type string defs
    - `/middleware` custom middleware components, e.g. to validate an action payload before it's passed to a reducer
    - `/reducers` redux reducer components
    - `/store` redux store definition
    - `index.js` initialises react app wired to redux (Provider wraps up your React application and makes it aware of the entire Redux’s store)
  - `index.html` root html entry point
  - `index.js` root js entry point


## Oversimplified explanation of concepts

- `React`
  - Rendering of UI components
    - Ideally I want to move to use the [Presentation/Container pattern](https://medium.com/@learnreact/container-components-c0e67432e005), but first - baby steps.
  - Wiring of events and state to Redux components
  - Routing (react-router)
- `Redux`
  - All the state things
  - `Store`
    - The redux store is fundamental: **the state of the whole application lives inside the store.**
  - `Reducers`
    - The state in redux comes from reducers, **reducers produce the state of your application**
    - A reducer is just a JavaScript function. A reducer takes two parameters: the current **state** and an **action**
    - The reducer calculates the next state depending on the **action type**. Moreover, it should return at least the initial state when no action type matches.
  - `Actions` and `Action creators`
    - In redux, an **action** is a simple object with a type, and a payload, e.g.
      - `{ type: 'LIKE_POST', payload: { POST_ID: 123 }`
    - An **action creator** is a function that may contain some logic, which is called by a reducer `/src/js/actions/**.js`
  - `Middleware`
    - A Redux middleware is a function that is able to intercept, and act accordingly, our actions, before they reach the reducer.
    - Middlewares in Redux are super important because they will hold the bulk of your application’s logic. 
    The nice thing is that while inside the middleware you can access `getState` and `dispatch`
  - `react-thunk`
    - By default, we can’t use action creators for **async** tasks because they are expected to return an object (i.e. not a promise/callback function).
    - [redux-thunk](https://github.com/reduxjs/redux-thunk) middleware is used to solve this problem.
}`


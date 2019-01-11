# react-redux-scaffold

A **WIP** project to learn React+Redux concepts, and setup a project scaffold.

Largely adopted from: https://www.valentinog.com/blog/redux/

## Install, run

```javascript
npm install
npm start
```

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

## Resources

- [Redux testing with Jest](https://redux.js.org/recipes/writing-tests)
- [React Web Router](https://reacttraining.com/react-router/web/guides/quick-start)

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
      - `{ type: 'LIKE_POST', payload: { POST_ID: 123 } }`
    - An **action creator** is a function that may contain some logic, which is called by a reducer `/src/js/actions/**.js`
  - `Middleware`
    - Redux middleware is code (a funciton) that intercepts actions coming into the store via the dispatch() method.
    - Middlewares in Redux are super important because **they will hold the bulk of your application’s logic.**
      The nice thing is that while inside the middleware you can access `getState` and `dispatch`
  - `react-thunk`
    - By default, we can’t use action creators for **async** tasks because they are expected to return an object (i.e. not a promise/callback function).
    - [redux-thunk](https://github.com/reduxjs/redux-thunk) middleware is used to solve this problem.

**What is actually happening when I add a post?**

- The `PostForm` component is connected to Redux
  - It maps the `addArticle` action to the Redux `dispatch` API method and binds to the forms `onSubmit` event.
- When you click the submit button:
  - `onSubmit` event fired, triggers `handleSubmit`
  - `handleSubmit` uses a local (non Redux) state to grab the post title and use to trigger the `addArticle` action in its `props`
  - `this.props.addArticle` is mapped to Redux dispatch method so it triggers the `addArticle` action
  - the store has been configured with `forbiddenWordsMiddleware`, so the action is processed here first.
    - if a forbidden word is detected, adding the article is blocked and a message shown
    - else if valid article
      - the action passed through to the reducer, which returns a new copy of the state which contains the new article paylod (no mutation!)

## Tip: use Redux DevTools

- Great tool to allow you to see exactly what's happnening under the hood
- Timetravel!

![Screenshot](/screenshots/debug.png?raw=true)

# react-redux-scaffold
A **WIP** project to learn React+Redux concepts, and setup a project scaffold.
Lagely adopted from: https://www.valentinog.com/blog/redux/

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
    - `/components` react components
      - `/container` stateful component wrappers
      - `/presentation` stateless components
    - `/constants` e.g. action type string defs
    - `/middleware` custom middleware components, e.g. to validate an action payload before it's passed to a reducer
    - `/reducers` redux reducer components
    - `/store` redux store definition
    - `index.js` initialises react app wired to redux (Provider wraps up your React application and makes it aware of the entire Redux’s store)
  - `index.html` root html entry point
  - `index.js` root js entry point
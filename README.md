# react-redux-scaffold
Adopted from: https://www.valentinog.com/blog/redux/

## Install, run
```javascript
npm install
npm start
```

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
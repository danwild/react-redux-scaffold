import { ADD_ARTICLE, HANDLE_BAD_WORD } from "../constants/ActionTypes";
const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ getState, dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          return dispatch({
            type: HANDLE_BAD_WORD,
            payload: action.payload.title
          });
        }
      }

      // !IMPORTANT
      // you should always return next(action) in your middlewares.
      // If you forget to return next(action) the application will
      // stop, and no other action will reach the reducer.
      return next(action);
    };
  };
}

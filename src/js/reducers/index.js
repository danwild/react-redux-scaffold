import { ADD_ARTICLE, HANDLE_BAD_WORD, DATA_LOADED } from "../constants/action-types";
import uuidv1 from "uuid";

const initialState = {
    articles: [],
    messages: [],
    remoteArticles: []
  };
  function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    } 
    
    if (action.type === HANDLE_BAD_WORD) {
      return Object.assign({}, state, {
        messages: state.messages.concat({
          id: uuidv1(),
          message: `Found bad word in: ${action.payload}`
        })
      });
    }

    if (action.type === DATA_LOADED) {
      return Object.assign({}, state, {
        remoteArticles: state.remoteArticles.concat(action.payload)
      });
    }

    return state;
  }
  export default rootReducer;
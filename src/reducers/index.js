import {combineReducers} from "redux";

function comments(state = [], action) {
  if (action.type === "COMMENTS_LOADED") {
    return action.value;
  }
  return state;
}


function contacts(state = [], action) {
  if (action.type === "CONTACTS_LOADED") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  comments, contacts
});



export default rootReducer;



 

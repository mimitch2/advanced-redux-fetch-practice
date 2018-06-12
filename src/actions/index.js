export function loadContacts() {
  return function (dispatch) {
    fetch("/contacts")
      .then( (response) => {
        return response.json();
      }).then((contacts) => {
        dispatch(contactsLoaded(contacts));
      });
  };
}

export function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  };
}

export function loadComments() {
  return function (dispatch) {
    fetch("/comments")
        .then( (response) => {
          return response.json();
        }).then((comments) => {
          dispatch(commentsLoaded(comments));
        });
  };
}

export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
}





   

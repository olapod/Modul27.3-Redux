import uuid from uuid;

//typ akcji
const ADD_COMMENT = 'ADD_COMMENT';
//kreator akcji
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
        votes: 0
    }
}

const REMOVE_COMMENT = 'REMOVE_COMMENT';

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}
const EDIT_COMMENT = 'EDIT_COMMENT';

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

function thumbUpComment(votes, id) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        votes: votes++
    }
}
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
function thumbDownComment(votes, id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        votes: votes--
    }
}


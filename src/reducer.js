import {
  GET_POSTS,
  GET_POST,
  GET_TAGS,
  GET_TAG,
  GET_USERS,
  GET_USER,
} from './action-types';

const initialState = {
  posts: { data: null, error: null, loading: false },
  post: { data: null, error: null, loading: false },
  tags: { data: null, error: null, loading: false },
  tag: { data: null, error: null, loading: false },
  users: { data: null, error: null, loading: false },
  user: { data: null, error: null, loading: false },
};

const createStateHandler = (state, action) => {
  return (key) => {
    const statusHandlers = {
      error: () => ({
        ...state,
        [key]: {
          ...state[key],
          data: null,
          error: action.error || 'Unknown Error',
          loading: false,
        },
      }),
      loading: () => ({
        ...state,
        [key]: {
          ...state[key],
          loading: true,
          error: null,
        },
      }),
      success: () => ({
        ...state,
        [key]: {
          ...state[key],
          data: action.data,
          error: null,
          loading: false,
        },
      }),
    };

    return statusHandlers[action.status] ? statusHandlers[action.status]() : state;
  }
};

const reducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  const updateKey = createStateHandler(state, action);

  const reducers = {
    [GET_POSTS]: () => updateKey('posts'),
    [GET_POST]: () => updateKey('post'),
    [GET_TAGS]: () => updateKey('tags'),
    [GET_TAG]: () => updateKey('tag'),
    [GET_USERS]: () => updateKey('users'),
    [GET_USER]: () => updateKey('user'),
  };

  return reducers[action.type] ? reducers[action.type]() : state;
}

export default reducer;

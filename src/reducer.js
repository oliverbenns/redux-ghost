import {
  GET_POSTS,
  GET_POST,
  GET_POST_SLUG,
  GET_TAGS,
  GET_TAG,
  GET_TAG_SLUG,
  GET_USERS,
  GET_USER,
  GET_USER_SLUG,
  RESET,
} from './action-types';

const initialData = { data: null, error: null, loading: false, meta: null };

const initialState = {
  posts: initialData,
  post: initialData,
  tags: initialData,
  tag: initialData,
  users: initialData,
  user: initialData,
};

const createStateHandler = (state, action) => (key) => {
  const isSingle = !(key.substr(key.length - 1) === 's');

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
        data: isSingle ? action.data[isSingle ? `${key}s` : key][0] : action.data[isSingle ? `${key}s` : key],
        meta: action.data.meta || null,
        error: null,
        loading: false,
      },
    }),
  };

  return statusHandlers[action.status] ? statusHandlers[action.status]() : state;
};

const reducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  const updateKey = createStateHandler(state, action);

  const reducers = {
    [GET_POSTS]: () => updateKey('posts'),
    [GET_POST]: () => updateKey('post'),
    [GET_POST_SLUG]: () => updateKey('post'),
    [GET_TAGS]: () => updateKey('tags'),
    [GET_TAG]: () => updateKey('tag'),
    [GET_TAG_SLUG]: () => updateKey('tag'),
    [GET_USERS]: () => updateKey('users'),
    [GET_USER]: () => updateKey('user'),
    [GET_USER_SLUG]: () => updateKey('user'),
    [RESET]: () => ({
      ...initialState,
    }),
  };

  return reducers[action.type] ? reducers[action.type]() : state;
};

export default reducer;

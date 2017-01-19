import fetch from 'isomorphic-fetch';
import { request } from './lib/api';
import { isId } from './lib/utils';
import { GET_POSTS, GET_POST, GET_TAGS, GET_TAG, GET_USERS, GET_USER, RESET } from './action-types';

const pending = (type) => ({
  type,
  status: 'loading',
});

const success = (type, data) => ({
  type,
  status: 'success',
  data,
});

const fail = (type, error) => ({
  type,
  status: 'error',
  error,
});

const getData = (type, uri, options) => {
  return (dispatch) => {
    dispatch(pending(type));

    return request(uri, options)
      .then(data => dispatch(success(type, data)))
      .catch(error => dispatch(fail(type, error)));
  }
}

// Posts
const getPosts = (options) => getData(GET_POSTS, '/posts/', options);
const getPost = (id, options) => {
  if (!isId(id)) {
    return fail(GET_POST, 'Invalid Id');
  }

  return getData(GET_POST, `/posts/${id}/`, options);
}

// Tags
const getTags = (options) => getData(GET_TAGS, '/tags/', options);
const getTag = (id, options) => {
  if (!isId(id)) {
    return fail(GET_TAG, 'Invalid Id');
  }

  return getData(GET_TAG, `/tags/${id}/`, options);
}

// Users
const getUsers = (options) => getData(GET_USERS, '/users/', options);
const getUser = (id, options) => {
  if (!isId(id)) {
    return fail(GET_USER, 'Invalid Id');
  }

  return getData(GET_USER, `/users/${id}/`, options);
}

const reset = () => ({
  type: RESET,
});

export default {
  getPosts,
  getPost,
  getTags,
  getTag,
  getUsers,
  getUser,
  reset,
};

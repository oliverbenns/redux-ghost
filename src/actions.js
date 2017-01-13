import api from './api';

import fetch from 'isomorphic-fetch';

import {
  GET_POSTS,
  GET_POST,
  GET_TAGS,
  GET_TAG,
  GET_USERS,
  GET_USER,
} from './action-types';

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

const request = (type, uri, options) => {
  const url = api.constructUrl(uri, options);

  return (dispatch) => {
    dispatch(pending(type));

    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(success(type, json)))
      // @TODO: How can I get http error message? Move .catch() above?
      .catch(error => dispatch(fail(type, error.message)));
  }
}

const isId = (id) => typeof id === 'string' || typeof id === 'number';

const getPosts = (options) => {
  return request(GET_POSTS, '/posts/', options);
}

const getPost = (id, options) => {
  if (!isId(id)) {
    return fail(GET_POST, 'Invalid Id');
  }

  return request(GET_POST, `/posts/${id}/`, options);
}
const getTags = (options) => {
  return request(GET_TAGS, '/tags/', options);
}

const getTag = (id, options) => {
  if (!isId(id)) {
    return fail(GET_TAG, 'Invalid Id');
  }

  return request(GET_TAG, `/tags/${id}/`, options);
}

const getUsers = (options) => {

  return request(GET_USERS, '/users/', options);
}

const getUser = (id, options) => {
  if (!isId(id)) {
    return fail(GET_USER, 'Invalid Id');
  }

  return request(GET_USER, `/users/${id}/`, options);
}

export default {
  getPosts,
  getPost,
  getTags,
  getTag,
  getUsers,
  getUser,
};

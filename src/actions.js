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

const request = (type, url) => {
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
  const url = api.constructUrl('/posts/', options);

  return request(GET_POSTS, url);
}

const getPost = (id) => {
  if (!isId(id)) {
    return fail(GET_POST, 'Invalid Id');
  }

  const url = api.constructUrl(`/posts/${id}`);

  return request(GET_POST, url);
}
const getTags = (options) => {
  const url = api.constructUrl('/tags/', options);

  return request(GET_TAGS, url);
}

const getTag = (id) => {
  if (!isId(id)) {
    return fail(GET_TAG, 'Invalid Id');
  }

  const url = api.constructUrl(`/tags/${id}`);

  return request(GET_TAG, url);
}

const getUsers = (options) => {
  const url = api.constructUrl('/users/', options);

  return request(GET_USERS, url);
}

const getUser = (id) => {
  if (!isId(id)) {
    return fail(GET_USER, 'Invalid Id');
  }

  const url = api.constructUrl(`/users/${id}`);

  return request(GET_USER, url);
}

export default {
  getPosts,
  getPost,
  getTags,
  getTag,
  getUsers,
  getUser,
};

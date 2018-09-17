import 'isomorphic-fetch';
import { request } from './lib/api';
import { isId } from './lib/utils';
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

const getData = (type, uri, options) => (dispatch) => {
  dispatch(pending(type));

  return request(uri, options)
    .then(data => dispatch(success(type, data)))
    .catch(error => dispatch(fail(type, error)));
};

// Posts
const getPosts = (options) => getData(GET_POSTS, '/posts/', options);
const getPost = (id, options) => {
  if (!isId(id)) {
    return fail(GET_POST, 'Invalid Id');
  }

  return getData(GET_POST, `/posts/${id}/`, options);
};

const getPostBySlug = (slug, options) => {
  if (!slug) {
    return fail(GET_POST_SLUG, 'Slug parameter is null');
  }

  return getData(GET_POST_SLUG, `/posts/slug/${slug}/`, options);
};

// Tags
const getTags = (options) => getData(GET_TAGS, '/tags/', options);
const getTag = (id, options) => {
  if (!isId(id)) {
    return fail(GET_TAG, 'Invalid Id');
  }

  return getData(GET_TAG, `/tags/${id}/`, options);
};

const getTagBySlug = (slug, options) => {
  if (!slug) {
    return fail(GET_TAG_SLUG, 'Slug parameter is null');
  }

  return getData(GET_TAG_SLUG, `/tags/slug/${slug}/`, options);
};

// Users
const getUsers = (options) => getData(GET_USERS, '/users/', options);
const getUser = (id, options) => {
  if (!isId(id)) {
    return fail(GET_USER, 'Invalid Id');
  }

  return getData(GET_USER, `/users/${id}/`, options);
};

const getUserBySlug = (slug, options) => {
  if (!slug) {
    return fail(GET_USER_SLUG, 'Slug parameter is null');
  }

  return getData(GET_USER_SLUG, `/users/slug/${slug}/`, options);
};

const reset = () => ({
  type: RESET,
});

export default {
  getPosts,
  getPost,
  getPostBySlug,
  getTags,
  getTag,
  getTagBySlug,
  getUsers,
  getUser,
  getUserBySlug,
  reset,
};

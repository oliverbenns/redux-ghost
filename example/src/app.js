import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from 'redux-ghost';

import JsonTree from 'react-json-tree';

import './app.css';

const App = ({ actions, blog }) => {
  return (
    <div className="wrapper">
      <h1>Redux Ghost Blog</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <h2>Posts</h2>
      <button onClick={() => actions.getPosts()}>Load Posts</button>
      <button onClick={() => actions.getPosts({ fields: 'title, slug' })}>Load Posts (title & slug only)</button>
      <button onClick={() => actions.getPost('1')}>Load Single Post</button>
      <button onClick={() => actions.getPost('1', { include: 'authors' })}>Load Single Post (with author data)</button>
      <button onClick={() => actions.getPostBySlug('my-post')}>Load Single Post by giving the slug</button>

      <h2>Tags</h2>
      <button onClick={() => actions.getTags()}>Load Tags</button>
      <button onClick={() => actions.getTag(1)}>Load Single Tag</button>
      <button onClick={() => actions.getTagBySlug('my-tag')}>Load Single Tag by giving the slug</button>

      <h2>Users</h2>
      <button onClick={() => actions.getUsers()}>Load Users</button>
      <button onClick={() => actions.getUser(1)}>Load Single User</button>
      <button onClick={() => actions.getUserBySlug('my-user')}>Load Single User by giving the slug</button>

      <h2>Reset</h2>
      <button onClick={() => actions.reset()}>Reset</button>

      <JsonTree data={blog} theme="monokai" />
    </div>
  );
}

const mapStateToProps = ({ blog }) => ({
  blog,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

# redux-ghost
[![npm version](https://badge.fury.io/js/redux-ghost.svg)](https://badge.fury.io/js/redux-ghost)
## Installation
```npm install --save redux-ghost```

## Getting Started

### Step 1
Enable your Ghost blog to expose a public api following [this tutorial](http://api.ghost.org/docs/ajax-calls-from-an-external-website). Make note of your `client_id`, `client_secret` and `host` (e.g. `http://localhost:2368`).

### Step 2
For a quick test, follow the [example](https://github.com/oliverbenns/redux-ghost/tree/master/example), otherwise configure redux ghost with your credentials in `step 1` and give the Ghost reducer to redux. Ensure you also include the [thunk middleware](https://github.com/gaearon/redux-thunk).

```
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReduxGhost, { reducer as ghostReducer } from 'redux-ghost';

ReduxGhost.config({
  host: '', // e.g. http://localhost:2368
  clientId: '', // e.g. ghost-frontend
  clientSecret: '', // e.g. 4837a41df11b
});

const rootReducer = combineReducers({
  blog: ghostReducer,
});

const store = createStore(rootReducer, null, applyMiddleware(thunk));
```

### Step 3
Set up your store as you normally would, and fire off those actions.
```
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from 'redux-ghost';

const App = ({ actions, blog }) => {
  return (
    <div>
      <button onClick={() => actions.getPosts()}>Load Posts</button>
      {blog.posts.data && blog.posts.data.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>Published on: {post.published_at}</p>
          <p>Slug: {post.slug}</p>
        </div>
      ))}
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

```

## Actions

Call your actions how you like, I prefer binding mine to props using [bindActionCreators](http://redux.js.org/docs/api/bindActionCreators.html).

Actions available:

| Action        | Arguments                                                                     |
| ------------- | ----------------------------------------------------------------------------- |
| getPosts      | [options (object)](https://api.ghost.org/docs/posts)                          |
| getPost       | id (string / integer), [options (object)](https://api.ghost.org/docs/postsid) |
| getPostBySlug | slug (string), [options (object)](https://api.ghost.org/docs/postsslugslug)   |
| getTags       | [options (object)](https://api.ghost.org/docs/tags)                           |
| getTag        | id (string / integer), [options (object)](https://api.ghost.org/docs/tagsid)  |
| getTagBySlug  | slug (string), [options (object)](https://api.ghost.org/docs/tagsslugslug)    |
| getUsers      | [options (object)](https://api.ghost.org/docs/users)                          |
| getUser       | id (string / integer), [options (object)](https://api.ghost.org/docs/usersid) |
| getUserBySlug | slug (string), [options (object)](https://api.ghost.org/docs/usersslugslug)   |
| reset         |                                                                               |

## Development

### Build
Run `nvm use; redux-ghost; npm install; npm run build`. Any further file changes will require another `npm run build`.

### Example
`nvm use; npm link; cd example; npm link redux-ghost; npm install; npm start`.

Open [`http://localhost:3030/`](http://localhost:3030/).

Any new builds will automatically refresh the example with updates.


# redux-ghost

## Installation
```npm install --save redux-ghost```

### Setup

Enable your Ghost blog to expose a public api following [this tutorial](http://api.ghost.org/docs/ajax-calls-from-an-external-website). Make note of your `client_id`, `client_secret` and `host` (e.g. `http://localhost:2368`).

### Actions

Call your actions how you like, I prefer binding mine to props using [bindActionCreators](http://redux.js.org/docs/api/bindActionCreators.html).

Actions available:

| Action   | Arguments                                                                     |
| -------- | ----------------------------------------------------------------------------- |
| getPosts | [options (object)](https://api.ghost.org/docs/posts)                          |
| getPost  | id (string / integer), [options (object)](https://api.ghost.org/docs/postsid) |
| getTags  | [options (object)](https://api.ghost.org/docs/tags)                           |
| getTag   | id (string / integer), [options (object)](https://api.ghost.org/docs/tagsid)  |
| getUsers | [options (object)](https://api.ghost.org/docs/users)                          |
| getUser  | id (string / integer), [options (object)](https://api.ghost.org/docs/usersid) |

## Development

### Build
Set up config in `config.js` with your api details. Run `nvm use; npm link redux-ghost; npm install; npm run build`. Any further file changes will require another `npm run build`.

### Example
`nvm use; cd example; npm link; npm install; npm start`.
Any new builds will automatically refresh the example with updates.

## Notes
This is a work in progress. I'm hoping to creating an npm package with the next week or 2.

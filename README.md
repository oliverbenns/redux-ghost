# redux-ghost

## Installation
```npm install --save redux-ghost```

## Documentation

Enable your Ghost blog to expose a public api following [this tutorial](http://api.ghost.org/docs/ajax-calls-from-an-external-website). Make note of your `client_id`, `client_secret` and `host` (e.g. `http://localhost:2368`).

## Build
Go to root directory. Set up config you need to in `config.js` with your api details. Run `npm link redux-ghost; npm install; npm run build`. Any further file changes will require another `npm run build`.

# Example

`cd example; npm link; npm install; npm start`.
Any new builds will automatically refresh the example with updates.

# redux-ghost

## Installation
```npm install --save redux-ghost```

## Documentation

Enable your Ghost blog to expose a public api following [this tutorial](http://api.ghost.org/docs/ajax-calls-from-an-external-website). Make note of your `client_id`, `client_secret` and `host` (e.g. `http://localhost:2368`).

## Build
Set up config in `config.js` with your api details. Run `nvm use; npm link redux-ghost; npm install; npm run build`. Any further file changes will require another `npm run build`.

## Example
`nvm use; cd example; npm link; npm install; npm start`.
Any new builds will automatically refresh the example with updates.

## Notes
This is a work in progress. I'm hoping to creating an npm package with the next week or 2.

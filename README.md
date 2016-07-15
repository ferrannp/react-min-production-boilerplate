# React Min Production Boilerplate

This boilerplate includes:
 
1. Production ready configuration:
    - Splitting JS and CSS into separated files
    - *Minification* of JS and CSS
    - Using a [hash] for generated JS and CSS files + html template to include them
    - Using the Express [compression](https://github.com/expressjs/compression) middleware
2. [React Hot Loader](https://github.com/gaearon/react-hot-loader) for development
3. [Connect Webpack Dev Server to Backend API](http://nikolay.rocks/2016-01-13-connect-webpack-to-backend)
4. [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme) for testing
5. [SASS](http://sass-lang.com/), [CCS Modules](https://github.com/css-modules/css-modules) and [autoprefixer](https://github.com/postcss/autoprefixer) for styling

## Development

```
npm start
```

- Webpack dev server with hot reloading will be running on http://localhost:3000
- Express server will be running on http://localhost:2999. See: http://localhost:2999/api/

## Production

To build the production bundle:

```
npm run dist
```

To run the project in production mode (after running the previous command):

```
NODE_ENV=production npm start
```

## Tests

For running your Jest tests: 

```
npm test
```

With coverage:

```
npm test -- --coverage
```

Specific test (in this case for the App-test.js):

```
npm test -- App
```
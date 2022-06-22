# GIPHY Clone

A GIPHY Search Engine Application

[Imgur](https://i.imgur.com/qs9mQYf.png)

## Overview

This web app was built using React.js. The app uses GIPHY's API to power the data that runs the app.

On the initial page load, the app fetches `greetings`, which renders a bunch of GIFs greeting the user. The header has three buttons to do a quick search of trending, motivating, or random GIFs. Users are able to search what ever comes to mind. If they're search returns no items, they will be alerted.

The app was deployed via AWS, which can be previewed [here](https://main.d32rj9bwp7yvm3.amplifyapp.com/).

## Technologies Used

- [React.js](https://reactjs.org/docs/getting-started.html)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Material UI](https://mui.com/material-ui/getting-started/overview/)
- [AXIOS](https://axios-http.com/docs/intro)
- [GIPHY API](https://developers.giphy.com/docs/api#quick-start-guide)
- [AWS Amplify](https://aws.amazon.com/amplify/?c=m&sec=srv)

## Avaliable Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

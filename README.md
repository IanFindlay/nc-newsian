# NC-Newsian - A Northcoders' Bootcamp Front-End Portfolio Piece

## Summary

As part of the Northcoders' Bootcamp I created [this back-end project](https://github.com/IanFindlay/nc-news) - a restful API that uses a postgreSQL database of generated news data. NC-Newsian is the front-end to this project. Built using the React framework and styled with custom CSS, it serves as an illustration of how I would implement and design a site used to deliver written content in an appealing, user-focused and performant way. It was built using the mobile-first design paradigm with user stories driving the features and accessibility considerations made throughout. Some of the aspects I wish to highlight are:

- The ability to filter articles by topic, sort and order them in various ways and decide upon how many articles to display per page
- The ability to set the above queries via buttons and dropdowns or directly in the URL
- Closing an article returns you to the page or results you were previously on with all of the above queries as you left them
- The ability to post a new comment and delete any of your comments
- The ability to up/down vote the articles and comments of other users
- A 'Random Article' button
- The ability to up/down vote articles

## View a live version of the application

You can view these, and other, features for yourself by visiting this [deployment of the app via Netlify](https://vibrant-jepsen-229497.netlify.app/).

## Run a local version

### Requirements

Whilst earlier versions than those below may still work they have not been tested. This application was developed using:

- Node version 17
- npm version 8
- react version 17
- react-router-dom version 6
- axios version 0.26

### Cloning the repository and installing the modules

You can clone this repository via one of the three links shown in the 'Code' button dropdown near the top of this page - I'll show the HTTPS option as an example:

```
git clone https://github.com/IanFindlay/nc-news.git
```

Once cloned, navigate to the directory in you terminal and run the following command to install all of the applications dependencies - a list of which can be found in the package.json file:

```
npm i
```

In order to view the application locally in your browser, run the following command:

```
npm start
```

This should automatically open a window in your default browser to the NC-Newsian homepage. If for some reason this does not happen navigate to http://localhost/3000 and explore it from there. Please note, whilst the app is running locally it is still making calls to a publicly available, Heroku-hosted API.

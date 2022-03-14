# NC-Newsian - A Northcoders' Bootcamp Front-End Portfolio Piece

## Summary

As part of the Northcoders' Bootcamp I created [this back-end project](https://github.com/IanFindlay/nc-news) - a restful API that uses a postgreSQL database of generated
news data. NC-Newsian is the front-end to this project. Built using the React framework and styled with custom CSS, it serves as an illustration of how I would implement and design a site used to deliver written content in an appealing, user-focused and performant way. It was built using the mobile-first design paradigm with user stories driving the features and accessibility considerations made throughout. Some of the aspect I wish to highlight are:

- The ability to filter articles by topic, sort and order them in various ways and decide upon how many articles to display per page
- The above can be directly manipulated via the URL which dynamically updates to represent any non-default search parameters
- The ability to read an article and return to the page you came from with the search parameters you set still in place
- The ability to post a comment, delete one of your comments and further interact with the content via up/down votes

## View a live version of the application

You can view these, and other, features for yourself by visiting this [deployment of the app via Netlify]().

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

## TODO Notes on the limitations of this example app

Need to finalise design decisions before writing this section

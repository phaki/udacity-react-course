<<<<<<< HEAD
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Display a list of movies where each movie contains a list of users that favorited it.
=======
import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';

/*
Use React and the data below to display a list of users alongside their favorite movies.
>>>>>>> 56ba9a536a96d4accdfb3d924f0304e926789ca2

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
<<<<<<< HEAD
    name: 'Jane Jones',
=======
    name: 'Jane Cruz',
>>>>>>> 56ba9a536a96d4accdfb3d924f0304e926789ca2
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
<<<<<<< HEAD
    id: 3,
=======
    id: 4,
>>>>>>> 56ba9a536a96d4accdfb3d924f0304e926789ca2
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
<<<<<<< HEAD
    name: 'Planet Earth',
=======
    name: 'Planet Earth 1',
>>>>>>> 56ba9a536a96d4accdfb3d924f0304e926789ca2
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class App extends Component {
<<<<<<< HEAD
  
  getMoviesList(profile) {
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
      </div>
=======

  getFavoriteMovie(profile) {
    const user = profile.userID.valueOf();
    const movie = profile.favoriteMovieID.valueOf();
    const userName = users[user].name;
    const movieName = movies[movie].name;
    return <li key={profile.id}>{userName}'s favorite movie is {movieName}.</li>
  }

  render() {
    return (
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">ReactND - Coding Practice</h1>
          </header>
          <h2>Favorite Movies</h2>
          <ul>
            {profiles.map((profile) => this.getFavoriteMovie(profile))}
          </ul>
        </div>
>>>>>>> 56ba9a536a96d4accdfb3d924f0304e926789ca2
    );
  }
}

export default App;

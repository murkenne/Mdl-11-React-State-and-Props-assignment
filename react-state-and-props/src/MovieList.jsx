import React, { useState } from 'react';
import './MovieList.css';

function MovieList() {
  // Task 1: Initializing and Displaying a List
  // Initialize state with a hardcoded list of movie titles and descriptions
  const [movies, setMovies] = useState([
    { title: 'Scream 6', description: 'Slasher, Horror, Suspense, Thriller', showDetails: false },
    { title: 'Kiss of the Dragon', description: 'Action, Violence, Sexual content', showDetails: false },
    { title: 'Alien Ramulous', description: 'Sci-fi Horror, Graphic Violence, Offensive Language', showDetails: false },
    { title: 'Home Alone', description: 'Cruel Humor, Comedy, Language', showDetails: false },
    { title: 'Top Gun', description: 'Military, Thriller, Action', showDetails: false },
  ]);

  // Task 4: Toggling List View
  // State to toggle between showing all movies and action movies
  const [showAction, setShowAction] = useState(false);

  // Task 2: Conditional Rendering of Movie Details
  // Function to toggle the 'showDetails' state for a specific movie
  const toggleDetails = (index) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie, i) => (i === index ? { ...movie, showDetails: !movie.showDetails } : movie))
    );
  };

  // Task 3: Implementing Movie Removal
  // Function to remove a movie from the list
  const removeMovie = (index) => {
    setMovies((prevMovies) => prevMovies.filter((_, i) => i !== index));
  };

  // Task 4: Toggling List View
  // Function to toggle between showing all movies and only action movies
  const toggleView = () => {
    setShowAction((prev) => !prev);
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      {/* Task 4: Button to toggle list view */}
      <button onClick={toggleView}>{showAction ? 'Show All Movies' : 'Show Action Movies'}</button>
      <ul>
        {/** Task 1: Render the movie list */}
        {/** Task 4: Filter movies based on the toggle state */}
        {movies
          .filter((movie) => !showAction || movie.description.includes('Action'))
          .map((movie, index) => (
            <li key={index} style={{ cursor: 'pointer' }}>
              {/* Task 2: Movie title with toggle functionality */}
              <strong onClick={() => toggleDetails(index)}>{movie.title}</strong>
              {/** Task 2: Conditionally render the movie description */}
              {movie.showDetails && <p>{movie.description}</p>}
              {/* Task 3: Remove button */}
              <button onClick={() => removeMovie(index)}>Remove</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MovieList;

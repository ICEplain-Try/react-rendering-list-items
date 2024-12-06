import "./App.css";
import movies from "./data/movies.jsx"; // Import ข้อมูลภาพยนต์จากไฟล์ movies.jsx

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1 className="section-title">Movie List Section</h1>
        <div className="movie-list">
          {movies.map(function (movie, index) {
            return (
              <div key={index} className="movie-item">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="movie-image"
                />
                <div className="movie-details">
                  <h2 className="movie-title">Title: {movie.title}</h2>
                  <p>Year: {movie.year}</p>
                  <p>Runtime: {movie.runtime}</p>
                  <p>
                    Genres:{" "}
                    {movie.genres.map(function (genre, genreIndex) {
                      return (
                        <span key={genreIndex} className="genre-badge">
                          {genre}
                        </span>
                      );
                    })}
                  </p>
                  <p>IMDB Ratings: {movie.imdbRating}</p>
                  <p>IMDB Votes: {movie.imdbVotes}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
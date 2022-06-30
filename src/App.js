import Navbar from './Navbar';
import Home from './Home';
import MovieList from './MovieList';
import Footer from './Footer';

function App() {

  const movies = [
    { title: "Dune", description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.", length: "156 minutes", director: "Denis Villeneuve", cast: "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac, Zendaya, ...", genre: "Action, Adventure, Drama", year: "2021", rating: "PG-13", screencap: "./assets/dune_screencap.jpg", poster: "./assets/dune_poster.jpg", id: 1},
    { title: "Ferris Bueller's Day Off", description: "A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.", length: "103 minutes", director: "John Hughes", cast: "Matthew Broderick, Alan Ruck, Mia Sara, ...", genre: "Comedy", year: "1986", rating: "PG-13", screencap: "./assets/ferris_bueller_screencap.jpg", poster: "./assets/ferris_bueller_poster.jpg", id: 2},
    { title: "Before Sunrise", description: "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.", length: "101 minutes", director: "Richard Linklater", cast: "Ethan Hawke, Julie Delpy, ...", genre: "Romance, Drama", year: "1995", rating: "R", screencap: "./assets/before_sunrise_screencap.jpg", poster: "./assets/before_sunrise_poster.jpg", id: 3}
  ];

  return (
    <div className="App">
      <Navbar></Navbar>
      <Home one = {movies.filter((movie) => movie.id === 1)} two = {movies.filter((movie) => movie.id === 2)} three = {movies.filter((movie) => movie.id === 3)}></Home>
      <MovieList movies = {movies}></MovieList>
      <Footer></Footer>
    </div>
  );
}

export default App;

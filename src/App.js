import Navbar from './Navbar';
import Home from './Home';
import MovieList from './MovieList';
import Footer from './Footer';

function App() {

  const movies = [
    { title: "Before Sunrise", description: "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.", length: "101 minutes", director: "Richard Linklater", cast: "Ethan Hawke, Julie Delpy, ...", genre: "Drama, Romance", year: "1995", rating: "R", screencap: "./assets/before_sunrise_screencap.jpg", poster: "./assets/before_sunrise_poster.jpg", id: 1 },
    { title: "Ferris Bueller's Day Off", description: "A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.", length: "103 minutes", director: "John Hughes", cast: "Matthew Broderick, Alan Ruck, Mia Sara, ...", genre: "Comedy", year: "1986", rating: "PG-13", screencap: "./assets/ferris_bueller_screencap.jpg", poster: "./assets/ferris_bueller_poster.jpg", id: 2 },
    { title: "Dune", description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.", length: "156 minutes", director: "Denis Villeneuve", cast: "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac, Zendaya, ...", genre: "Action, Adventure, Drama", year: "2021", rating: "PG-13", screencap: "./assets/dune_screencap.jpg", poster: "./assets/dune_poster.jpg", id: 3 },
    { title: "Spider-Man: No Way Home", description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.", length: "148 minutes", director: "Jon Watts", cast: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, ...", genre: "Action, Adventure, Fantasy", year: "2021", rating: "PG-13", screencap: "", poster: "./assets/spider-man-no-way-home-poster.jpg", id: 4 },
    { title: "Top Gun", description: "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.", length: "110 minutes", director: "Tony Scott", cast: "Tom Cruise, Kelly McGillis, Val Kilmer, ...", genre: "Action, Drama", year: "1986", rating: "PG", screencap: "", poster: "./assets/top_gun_poster.jpg", id: 5 }
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

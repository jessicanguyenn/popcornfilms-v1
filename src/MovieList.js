const MovieList = ({movies}) => {
    return ( 
        <div className="container py-5">
            <h1 className={"text-center text-color-3 fw-bold"}>Movies</h1>
            <div className={"container movie-container"}>
                <div className={"row justify-content-center px-5 py-3 m-0"}>
                    {movies.map((movie) => (
                        <div className="col-md-3" key = {movie.id}>
                            <img className="movie-poster" src={require(`${movie.poster}`)} alt=""/>
                            <p className="text-center text-color-3">{movie.title + " (" + movie.year + ")"}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default MovieList;
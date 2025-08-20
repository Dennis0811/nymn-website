import MovieCard from "./MovieCard";

const MovieCards = () => {
  const movies = [
    {
      title: "Troy",
      image: "https://image.tmdb.org/t/p/w500/a07wLy4ONfpsjnBqMwhlWTJTcm.jpg",
      likes: 324,
      url: "/movies/troy",
      year: 1999,
      runtime: "2h 43m",
    },
    {
      title: "Dune",
      image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      likes: 261,
      url: "/movies/dune",
      year: 2021,
      runtime: "2h 35m",
    },
    {
      title: "Gladiator",
      image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      likes: 9999,
      url: "/movies/gladiator",
      year: 2000,
      runtime: "2h 37m",
    },
    {
      title: "The Lord of the Rings: The Two Towers",
      image: "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
      likes: 231,
      url: "/movies/tlotr",
      year: 2002,
      runtime: "2h 59m",
    },
    {
      title: "Blade Runner",
      image: "https://image.tmdb.org/t/p/w500/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
      likes: 88,
      url: "/movies/blade-runner",
      year: 1982,
      runtime: "1h 58m",
    },
    {
      title: "The Mask",
      image: "https://image.tmdb.org/t/p/w500/xbbXp9px4o8Oe7IbGd0yIbla8mZ.jpg",
      likes: 86,
      url: "/movies/the-mask",
      year: 1994,
      runtime: "1h 41m",
    },
    {
      title: "The Dark Knight Rises",
      image: "https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
      likes: 56,
      url: "/movies/dark-knight-rises",
      year: 2012,
      runtime: "2h 45m",
    },
    {
      title: "Inception",
      image: "https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
      likes: 9999,
      url: "/movies/inception",
      year: 2010,
      runtime: "2h 28m",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
      {movies.slice(0, 8).map((movie) => (
        <MovieCard
          key={`${movie.title}-${movie.year}-${movie.runtime}`}
          title={movie.title}
          movieImageLink={movie.image}
          likes={movie.likes}
          url={movie.url}
          year={movie.year}
          runtime={movie.runtime}
        />
      ))}
    </div>
  );
};

export default MovieCards;

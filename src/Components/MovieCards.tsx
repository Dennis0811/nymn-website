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

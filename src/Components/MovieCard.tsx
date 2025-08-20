import { HeartIcon } from "../Icons";
import AccentedDot from "./AccentedDot";

const MovieCard = ({
  title,
  movieImageLink,
  likes,
  url,
  year,
  runtime,
}: {
  title: string;
  movieImageLink: string;
  likes: number;
  url: string;
  year: number;
  runtime: string;
}) => {
  return (
    <div className="flex flex-col bg-primary-bg p-2 pb-3 rounded-lg text-secondary-text shadow-lg">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden w-full aspect-2/3"
      >
        <img
          src={movieImageLink}
          alt={`${title} Cover Image`}
          className="object-cover rounded w-full hover:scale-110 transition-transform"
        />
      </a>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg hover:underline max-w-min mt-2 truncate"
        title={title}
      >
        {title}
      </a>
      <div className="flex flex-row space-x-1 text-sm">
        <p>{year}</p>
        <AccentedDot />
        <p>{runtime}</p>
      </div>

      <div className="flex items-center space-x-2 mt-2" title="Likes">
        <HeartIcon className="text-accent" filled />
        <span className="normal-nums">{likes}</span>
      </div>
    </div>
  );
};
export default MovieCard;

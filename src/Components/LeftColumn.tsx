import { InstagramIcon, TwitchIcon, XIcon, YoutubeIcon } from "../Icons";
import LeftColumnSection from "./LeftColumnSection";
import LeftColumnSections from "./LeftColumnSections";

const iconMap = {
  twitch: TwitchIcon,
  youtube: YoutubeIcon,
  twitter: XIcon,
  instagram: InstagramIcon,
};

const LeftColumn = () => {
  const friends = [
    {
      name: "Yabbe",
      links: [
        { twitch: "https://www.twitch.tv/yabbe" },
        { youtube: "https://www.youtube.com/yabbe" },
        { twitter: "https://x.com/imyabbe" },
        { instagram: "https://www.instagram.com/yabbegram" },
      ],
    },
    {
      name: "Forsen",
      links: [
        { twitch: "https://www.twitch.tv/forsen" },
        { twitter: "https://x.com/forsen" },
      ],
    },
    {
      name: "Erobb",
      links: [
        { twitch: "https://www.twitch.tv/erobb221" },
        { youtube: "https://www.youtube.com/@erobb2213" },
        { twitter: "https://x.com/Erobb221" },
      ],
    },
    {
      name: "Elajjaz",
      links: [
        { twitch: "https://www.twitch.tv/elajjaz" },
        { youtube: "https://www.youtube.com/elajjaz" },
        { twitter: "https://x.com/elajjaz" },
      ],
    },
  ];

  const getNextMovieNightDate = () => {
    const date = new Date();

    const day = date.getDay();
    const daysUntilSunday = (7 - day) % 7 || 7;
    date.setDate(date.getDate() + daysUntilSunday);

    // Set time to 18:00 in UTC+2
    // UTC+2 means 16:00 UTC
    date.setUTCHours(16, 0, 0, 0);

    return date;
  };

  const formatMovieNightString = (date: Date) => {
    const userLocale = navigator.language; // user’s locale
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const movieDate = new Intl.DateTimeFormat(userLocale, {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: userTimezone,
    }).format(date);

    const movieTime = new Intl.DateTimeFormat(userLocale, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: userTimezone,
      timeZoneName: "short",
    }).format(date);

    return { movieDate, movieTime };
  };

  const movieNight = formatMovieNightString(getNextMovieNightDate());

  return (
    <>
      <LeftColumnSections>
        <LeftColumnSection title="Next Movie Night">
          <p className="ml-2">
            {movieNight.movieDate}
            <br />
            {movieNight.movieTime}
          </p>
        </LeftColumnSection>
        <LeftColumnSection title="Family and Friends" className="overflow-auto">
          {friends.map((friend) => (
            <div
              key={friend.name}
              className="flex flex-row items-center justify-between text-lg font-semibold hover:bg-hover-bg hover:text-primary-text transition p-2 space-x-2 rounded"
            >
              <div className="flex items-center space-x-2 min-w-fit">
                <img
                  src={`${friend.name.toLowerCase()}-logo.png`}
                  alt={`${friend.name} Logo`}
                  className="h-10 w-10 rounded-full"
                />
                <p>{friend.name}</p>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-end gap-2">
                {friend.links &&
                  friend.links.length > 0 &&
                  friend.links.map((link) => {
                    const [type, url] = Object.entries(link)[0];
                    const Icon = iconMap[type as keyof typeof iconMap];

                    return (
                      <a
                        key={type + url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition"
                        aria-label={type}
                      >
                        {Icon && <Icon className="w-5 h-5" />}
                      </a>
                    );
                  })}
              </div>
            </div>
          ))}
        </LeftColumnSection>
      </LeftColumnSections>
    </>
  );
};

export default LeftColumn;

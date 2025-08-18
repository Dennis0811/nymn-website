import {
  InstagramIcon,
  RedditIcon,
  TwitchIcon,
  XIcon,
  YoutubeIcon,
} from "../Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitch", link: "https://www.twitch.tv/nymn", icon: TwitchIcon },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@LibraryofNymn",
      icon: YoutubeIcon,
    },
    { name: "X", link: "https://x.com/nymnion", icon: XIcon },
    {
      name: "Instagram",
      link: "https://www.instagram.com/nymnion",
      icon: InstagramIcon,
    },
    {
      name: "Reddit",
      link: "https://www.reddit.com/r/RedditAndChill",
      icon: RedditIcon,
    },
  ];

  return (
    <footer className="bg-primary-bg text-secondary-text shadow">
      <div className="mx-auto w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between px-8 py-6">
        <span className="text-sm">© {currentYear} NymN</span>
        <div className="flex mt-4 md:mt-0 space-x-5">
          {socialLinks.map(({ name, link, icon: Icon }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
              aria-label={name}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import {
  GameIcon,
  HomeIcon,
  JukeboxIcon,
  MovieIcon,
  NymptsIcon,
  ReviewIcon,
  TwitchIcon,
  MenuIcon,
} from "../Icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerElements = [
    { name: "Home", link: "/", icon: HomeIcon },
    { name: "Movie Night", link: "/movies", icon: MovieIcon },
    { name: "Games", link: "/games", icon: GameIcon },
    { name: "Friday Reviews", link: "/review", icon: ReviewIcon },
    { name: "Jukebox", link: "/jukebox", icon: JukeboxIcon },
    { name: "Nympts", link: "/nympts", icon: NymptsIcon },
  ];

  const currentPath = window.location.pathname;

  return (
    <header className="flex flex-col xl:flex-row items-center justify-between px-8 py-2 bg-primary-bg relative shadow">
      {/* Left section: Logo + Nav */}
      <div className="flex flex-row items-center w-full xl:w-auto justify-between">
        {/* Logo */}
        <a href="/" className="shrink-0 mr-6">
          <img
            src="/nymn-logo-transparent.png"
            alt="Nymn Logo"
            className="h-12 w-12 object-contain"
          />
        </a>

        {/* Burger menu button - only below xl */}
        <button
          className="xl:hidden p-2 rounded hover:bg-hover-bg transition hover:cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon className="w-6 h-6 text-secondary-text" />
        </button>

        {/* Navigation - shown on xl+ */}
        <nav className="hidden xl:flex flex-nowrap items-baseline space-x-2 text-secondary-text">
          {headerElements.map((element) => {
            const isActive = currentPath === element.link;
            return (
              <a
                href={element.link}
                className={`flex items-center h-full py-2 px-5 rounded-sm transition ${
                  isActive
                    ? "bg-secondary-bg text-primary-text"
                    : "hover:bg-hover-bg hover:text-primary-text"
                }`}
                key={element.name}
              >
                {element.icon && <element.icon className="mr-2" />}
                {element.name}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Twitch login button - shown on xl+ */}
      <button className="hidden xl:flex rounded px-5 py-2 flex-row items-center space-x-2 cursor-pointer bg-primary-twitch-purple hover:bg-secondary-twitch-purple transition text-primary-text mt-2 xl:mt-0">
        <TwitchIcon />
        <p>Login with Twitch</p>
      </button>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-primary-bg text-secondary-text shadow-lg flex flex-col p-4 space-y-2 z-50">
          {headerElements.map((element) => {
            const isActive = currentPath === element.link;
            return (
              <a
                href={element.link}
                className={`flex items-center py-2 px-4 rounded transition ${
                  isActive
                    ? "bg-secondary-bg text-primary-text"
                    : "hover:bg-hover-bg hover:text-primary-text"
                }`}
                key={element.name}
              >
                {element.icon && <element.icon className="mr-2" />}
                {element.name}
              </a>
            );
          })}

          {/* Twitch login button in mobile menu */}
          <button className="rounded px-4 py-2 flex flex-row items-center space-x-2 cursor-pointer bg-primary-twitch-purple hover:bg-secondary-twitch-purple transition text-primary-text mt-2">
            <TwitchIcon />
            <p>Login with Twitch</p>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

import AccentedDot from "./Components/AccentedDot";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LeftColumn from "./Components/LeftColumn";
import MovieCards from "./Components/MovieCards";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <main
        className="
          flex grow flex-col lg:p-8
          bg-[url(/mountain-landscape.png)] bg-cover bg-no-repeat bg-fixed
          "
      >
        {/* Three columns */}
        <div className="flex flex-row lg:space-x-4 xl:space-x-8 max-h-[70vh]">
          <section className="hidden xl:flex flex-col basis-2xs min-w-3xs rounded p-5 bg-primary-bg text-secondary-text shadow-lg">
            <LeftColumn />
          </section>
          <section className="flex grow min-w-0 rounded shadow-lg aspect-video">
            <iframe
              src="https://player.twitch.tv/?channel=nymn&parent=dennis0811.github.io"
              height="100%"
              width="100%"
              allowFullScreen
              frameBorder="0"
              className="lg:rounded"
              title="Twitch Stream"
            />
          </section>
          <section className="hidden lg:flex rounded min-w-3xs max-w-2xs shadow-lg">
            <iframe
              src="https://www.twitch.tv/embed/nymn/chat?parent=dennis0811.github.io"
              height="100%"
              width="100%"
              frameBorder="0"
              className="rounded"
              title="Twitch Chat"
            />
          </section>
        </div>

        <section className="flex flex-col space-y-4 my-6 sm:my-12">
          {/* Section Title */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex flex-row space-x-2 text-primary-text text-2xl font-thin">
              <AccentedDot />
              <a href="/movies" className="hover:underline">
                Movie Night Picks
              </a>
            </div>
            <a
              className="bg-hover-bg rounded py-2 px-5 text-secondary-text hover:bg-secondary-bg hover:cursor-pointer hover:text-primary-text transition text-sm"
              href="/movies"
            >
              View All
            </a>
          </div>
          {/* Section Content */}
          <MovieCards />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

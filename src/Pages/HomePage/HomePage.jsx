import React, { useEffect, useState, useRef } from "react";
import { TopNavigation } from "../../_components";
import { Footer } from "../../_components";
import { MapScroll } from "../../_components";
import { useDispatch, useSelector } from "react-redux";
import { homepageActions } from "../../_actions";

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center gap-4">
    <div className="w-16 h-16 border-4 border-t-[#ffd943] border-r-[#b69200] border-b-[#ffd943] border-l-[#b69200] rounded-full animate-spin" />
    <div className="text-lg text-[#ffd943] font-medium animate-pulse">
      Loading...
    </div>
  </div>
);

export const HomePage = () => {
  const dispatch = useDispatch();
  const managerListRef = useRef(null);
  const { loading, error, data } = useSelector((state) => state.homepageData);
  const [showLoading, setShowLoading] = useState(true);
  const [dataReady, setDataReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(homepageActions.getHomepageData());
        setDataReady(true);

        setTimeout(() => {
          setShowLoading(false);
        }, 100);
      } catch (err) {
        console.error("Error fetching homepage data:", err);
        setShowLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (showLoading || !dataReady) {
    return (
      <div className="bg-black text-white min-h-screen">
        <TopNavigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  // Rest of your existing code remains the same...
  if (error) {
    return (
      <div className="bg-black text-white min-h-screen">
        <TopNavigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <h1 className="text-red-500">Error loading data: {error}</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const scrollLeft = () => {
    if (managerListRef.current) {
      managerListRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (managerListRef.current) {
      managerListRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrimEvents = data?.scrimEvents ?? [];
  const clanManagers = data?.clanManagers ?? [];
  const maps = data?.maps ?? [];

  return (
    <div className="bg-black text-white min-h-screen">
      <TopNavigation />

      <div className="relative h-40 md:h-56 lg:h-96 w-full mb-8 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/epr-banner.jpg')" }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        {/* Slogan Text */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-end p-4 md:mr-64 lg:p-8">
          <p className="text-center md:text-right text-[#ceccc1] text-lg lg:text-4xl font-semibold font-slogan max-w-md px-4 md:px-0">
            <span className="text-[#ffd943]">Euphonius Rivals:</span> Where
            Fierce Battles Meet Unbreakable{" "}
            <span className="text-[#ffd943]">Bonds</span>
          </p>
        </div>
      </div>

      {/* Scrim Events Section */}
      <section className="mb-12 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">SCRIM EVENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {scrimEvents.length > 0 ? (
            scrimEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-[#b69200] p-4 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-white mb-1">{`${event.team1} vs ${event.team2}`}</h3>
                <p className="text-gray-200 mb-1">{event.rule}</p>
                <p className="text-gray-300">{event.time}</p>
              </div>
            ))
          ) : loading ? (
            <div className="col-span-3 text-center">Loading...</div>
          ) : (
            <div className="col-span-3 text-center">No events available</div>
          )}
        </div>
      </section>

      {/* Clan Managers Section */}
      <section className="mb-12 max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold mb-6 text-center">
          CLAN MANAGEMENT TEAM
        </h2>
        <div className="relative flex items-center">
          {clanManagers.length > 0 && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 -ml-10 top-1/2 transform -translate-y-1/2 text-4xl text-gray-400 hover:text-gray-500 transition-colors duration-300 z-10"
            >
              &lt;
            </button>
          )}
          <div
            ref={managerListRef}
            className="flex space-x-6 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
          >
            {loading ? (
              <div className="w-full text-center">Loading...</div>
            ) : error ? (
              <div className="w-full text-center text-red-500">
                Error: {error}
              </div>
            ) : clanManagers.length > 0 ? (
              clanManagers.map((manager, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 bg-gray-900 rounded-lg overflow-hidden border border-gray-700"
                >
                  <div className="bg-white h-80 flex items-center justify-center">
                    <img
                      src={manager.image}
                      alt={manager.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/kanye-avatar.jpg";
                      }}
                      loading="lazy" // Lazy loading the image
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-lg">{manager.name}</p>
                    <p className="text-sm text-gray-400">{manager.role}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full text-center">No managers available.</div>
            )}
          </div>
          {clanManagers.length > 0 && (
            <button
              onClick={scrollRight}
              className="absolute right-0 -mr-10 top-1/2 transform -translate-y-1/2 text-4xl text-gray-400 hover:text-gray-500 transition-colors duration-300"
            >
              &gt;
            </button>
          )}
        </div>
      </section>

      {/* Selecting Favorite Map Section */}
      <section className="mb-12 max-w-6xl mx-auto px-4">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            WHAT'S YOUR FAVORITE MAP? VOTE NOW!
          </h2>
          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500 py-8">Error: {error}</div>
          ) : maps.length > 0 ? (
            <MapScroll maps={maps} />
          ) : (
            <div className="text-center py-8">No maps available</div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;

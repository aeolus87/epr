import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getHomepageData } from "../../_actions";
import { TopNavigation } from "../../_components";
import { Footer } from "../../_components/Footer";

const HomePage = ({ homepage, getHomepageData }) => {
  const { loading, data, error } = homepage;
  const managerListRef = useRef(null);

  useEffect(() => {
    getHomepageData();
  }, [getHomepageData]);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { scrimEvents = [], clanManagers = [] } = data || {};

  return (
    <div className="bg-black text-white min-h-screen">
      <TopNavigation />
      <div className="pb-12">
        <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 w-full mb-8">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/epr-banner.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Scrim Events Section */}
        <section className="mb-12 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            SCRIM EVENTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scrimEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                <h3 className="text-base sm:text-lg font-semibold mb-1">{`${event.team1} vs ${event.team2}`}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-1">
                  {event.rule}
                </p>
                <p className="text-sm sm:text-base text-gray-500">
                  {event.time}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Clan Managers Section */}
        <section className="mb-12 max-w-6xl mx-auto px-4 relative">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            CLAN MANAGEMENT TEAM
          </h2>
          <div className="relative flex items-center">
            <button
              onClick={scrollLeft}
              className="hidden md:block absolute left-0 -ml-10 top-1/2 transform -translate-y-1/2 text-4xl text-gray-400 hover:text-gray-500 transition-colors duration-300 z-10"
            >
              &lt;
            </button>
            <div
              ref={managerListRef}
              className="flex space-x-4 md:space-x-6 overflow-x-auto pb-4 scroll-smooth"
            >
              {clanManagers.map((manager, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 sm:w-56 md:w-64 bg-gray-900 rounded-lg overflow-hidden border border-gray-700"
                >
                  <div className="bg-white h-56 sm:h-64 md:h-80 flex items-center justify-center">
                    <img
                      src={manager.image}
                      alt={manager.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="font-semibold text-base sm:text-lg">
                      {manager.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {manager.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={scrollRight}
              className="hidden md:block absolute right-0 -mr-10 top-1/2 transform -translate-y-1/2 text-4xl text-gray-400 hover:text-gray-500 transition-colors duration-300"
            >
              &gt;
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

// Map state to props
const mapState = (state) => ({
  homepage: state.homepage,
});

// Action creators
const actionCreators = {
  getHomepageData,
};

export default connect(mapState, actionCreators)(HomePage);

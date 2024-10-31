import React, { useState } from "react";
import { TopNavigation, Footer } from "../../_components";
import { useDispatch } from "react-redux";
import { applicationActions } from "../../_actions"; // Import the actions

export const ApplicationPage = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    age: "",
    facebookLink: "",
    gender: "",
    uid: "",
    ign: "",
    streamerMode: "",
    gameMode: "",
    gamePreference: "",
    birthday: "",
    profile: "",
    selfie: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      selfie: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the form data to the Redux action
    dispatch(applicationActions.submitApplication(formData));
    console.log(formData); // You can remove this line later
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <TopNavigation />

      {/* Banner Section */}
      <div className="relative h-40 md:h-56 w-full mb-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/epr-banner.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffd943]">
            Player Application Form
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-br from-gray-900 to-[#1a1a1a] rounded-lg p-6 shadow-xl border border-[#ffd943]/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-[#ffd943] font-medium mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#ffd943] transition"
                onChange={handleInputChange}
                value={formData.email}
                placeholder="Enter your email"
              />
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-[#ffd943] font-medium mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#ffd943] transition"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block text-[#ffd943] font-medium mb-2"
                >
                  Age *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Enter your age"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#ffd943] transition"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="facebookLink"
                  className="block text-[#ffd943] font-medium mb-2"
                >
                  Facebook Link (main acc) *
                </label>
                <input
                  type="url"
                  id="facebookLink"
                  name="facebookLink"
                  placeholder="Enter your facebook link"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#ffd943] transition"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-[#ffd943] font-medium mb-2">
                  Gender *
                </label>
                <div className="flex space-x-8">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="form-radio text-[#ffd943] w-6 h-6"
                      onChange={handleInputChange}
                    />
                    <span className="ml-2 text-lg">Male</span>{" "}
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="form-radio text-[#ffd943] w-6 h-6"
                      onChange={handleInputChange}
                    />
                    <span className="ml-2 text-lg">Female</span>{" "}
                  </label>
                </div>
              </div>

              <div>
                <label
                  htmlFor="uid"
                  className="block text-[#ffd943] font-medium mb-2"
                >
                  UID *
                </label>
                <input
                  type="text"
                  id="uid"
                  name="uid"
                  placeholder="Enter your uid"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#ffd943] transition"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="ign"
                  className="block text-[#ffd943] font-medium mb-2"
                >
                  IGN (In-Game Name) *
                </label>
                <input
                  type="text"
                  id="ign"
                  name="ign"
                  required
                  placeholder="Enter your in-game name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#ffd943] transition"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="profile"
                  className="block text-[#ffd943] font-medium mb-2"
                >
                  Your profile in CODM *
                  <span className="block text-sm text-gray-400">
                    (If you're competitive, kindly upload screenshots of your
                    profile and stats)
                  </span>
                </label>

                <input
                  type="file"
                  id="profile"
                  name="profile"
                  accept="image/*"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#ffd943] transition mb-4"
                  onChange={handleInputChange}
                />

                <input
                  type="file"
                  id="stats"
                  name="stats"
                  accept="image/*"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#ffd943] transition"
                  onChange={handleInputChange}
                />

                <p className="mt-2 text-sm text-gray-400">
                  Please upload clear screenshots of your in-game profile and
                  stats.
                </p>
              </div>

              <div>
                <label
                  htmlFor="selfie"
                  className="block text-[#ffd943] font-medium mb-2"
                >
                  Selfie *
                </label>
                <input
                  type="file"
                  id="selfie"
                  name="selfie"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#ffd943] transition"
                  onChange={handleFileChange}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#ffd943] text-black font-semibold rounded-md px-4 py-2 hover:bg-[#b69200] transition"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApplicationPage;

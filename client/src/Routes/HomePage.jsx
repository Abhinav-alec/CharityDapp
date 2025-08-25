import React from "react";
import Navbar from "../components/Navbar";
import DonationForm from "../components/DonationForm";

// Icon components for the "How It Works" section
const TransparencyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 mx-auto mb-4 text-green-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-7a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const SecurityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 mx-auto mb-4 text-green-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 20h5V4H2v16h5m10-4H7"
    />
  </svg>
);

const ImpactIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 mx-auto mb-4 text-green-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const HomePage = ({ buyChai, state, connectWallet }) => {
  const scrollToDonation = (e) => {
    e.preventDefault();
    document
      .getElementById("donate-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  // Define the background style as a constant
  const pageStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1578836537282-37b68193ae35?q=80&w=2574&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="min-h-screen font-sans" style={pageStyle}>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex h-[500px] flex-col justify-center items-center text-center px-6 text-white overflow-hidden bg-gray-900"
        >
          {/* Animated Glow Effects */}
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[800px] h-[800px] bg-green-500/30 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

          <div className="relative z-10 max-w-4xl mx-auto p-8 rounded-2xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg animate-fade-in-up bg-gradient-to-r from-green-300 via-cyan-300 to-green-300 bg-clip-text text-transparent">
              Make a Difference with Every Donation
            </h1>
            <p
              className="text-lg md:text-xl mb-10 drop-shadow-md animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Support causes you care about using our blockchain-powered,
              transparent donation system.
            </p>
            <a
              href="#donate-section"
              onClick={scrollToDonation}
              className="inline-flex items-center gap-3 
             bg-gradient-to-r from-green-500 to-teal-600 
             hover:from-green-600 hover:to-teal-700 
             text-white px-8 py-4 rounded-full font-bold text-lg 
             transition-all duration-300 ease-in-out 
             transform hover:scale-105 hover:-translate-y-1 
             shadow-xl hover:shadow-2xl hover:shadow-green-500/30 
             animate-fade-in-up"
            >
              Donate Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="about-section"
          className="py-20 bg-white/90 backdrop-blur-sm"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Why Choose Our Charity DApp?
            </h2>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div className="p-8 bg-gray-50/90 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-2">
                <TransparencyIcon />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Complete Transparency
                </h3>
                <p className="text-gray-600">
                  All donations are tracked on-chain, providing a public and
                  immutable record of every transaction.
                </p>
              </div>
              <div className="p-8 bg-gray-50/90 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-2">
                <SecurityIcon />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Blockchain Secured
                </h3>
                <p className="text-gray-600">
                  Your funds are secured through robust smart contracts,
                  eliminating intermediaries and reducing risk.
                </p>
              </div>
              <div className="p-8 bg-gray-50/90 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-2">
                <ImpactIcon />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Direct & Impactful
                </h3>
                <p className="text-gray-600">
                  Every donation directly supports verified charitable causes,
                  ensuring your contribution makes a real difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Form Section */}
        <section
          id="donate-section"
          className="py-20 bg-gray-50/90 backdrop-blur-sm"
        >
          <DonationForm buyChai={buyChai} state={state} />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto py-10 px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold">CharityDapp</h3>
            <p className="mt-2 text-gray-400">
              Decentralized giving for a better world.
            </p>
          </div>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#home" className="hover:text-green-500 transition">
              Home
            </a>
            <a href="/donation" className="hover:text-green-500 transition">
              Donations
            </a>
            <a href="/about" className="hover:text-green-500 transition">
              About
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 text-center py-5">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CharityDapp. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

import React, { useState, useEffect } from "react";

// --- SVG Icons (Colors adjusted for the new theme) ---

const QuoteIcon = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="currentColor"
    // Watermark for the new gradient background
    className="absolute top-4 right-4 text-white opacity-10 transform rotate-12"
  >
    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l-1.964 2.26c-3.122.835-5.036 3.6-5.036 5.865h3.983v8.6h-7v-5zm-13 0c0-5.141 3.892-10.519 10-11.725l-1.964 2.26c-3.122.835-5.036 3.6-5.036 5.865h3.983v8.6h-7v-5z" />
  </svg>
);

const VerifiedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    // A light green that pops on the dark gradient
    className="inline-block ml-1.5 text-green-300"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

// --- Helper Components (Colors adjusted) ---

const UserAvatar = ({ name }) => (
  // Contrasting white avatar with a green initial and a subtle border
  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center font-bold text-3xl text-green-600 shadow-lg border-4 border-green-400">
    {name.charAt(0).toUpperCase()}
  </div>
);

// --- Main Donations Page Component ---

const DonationsPage = ({ state }) => {
  const [donations, setDonations] = useState([]);
  const [copiedAddress, setCopiedAddress] = useState(null);
  const { contract } = state || {};

  const truncateAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleCopy = (address, index) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(index);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const fetchDonations = async () => {
    if (contract) {
      try {
        const donationsFromChain = await contract.getMemos();
        const formattedDonations = donationsFromChain.map((donation) => ({
          name: donation.name,
          message: donation.message,
          timestamp: donation.timestamp.toNumber(),
          from: donation.from,
        }));
        setDonations(formattedDonations.reverse());
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    }
  };

  useEffect(() => {
    fetchDonations();
  }, [contract]);

  useEffect(() => {
    if (!contract) {
      setDonations([
        {
          name: "Alice",
          message:
            "Happy to support this wonderful cause! Transparency is everything.",
          timestamp: Math.floor(Date.now() / 1000) - 3600,
          from: "0x1234567890abcdef1234567890abcdef12345678",
        },
        {
          name: "Bob",
          message:
            "Keep up the great work. This is the future of charitable giving.",
          timestamp: Math.floor(Date.now() / 1000) - 86400,
          from: "0xabcdef1234567890abcdef1234567890abcdef12",
        },
        {
          name: "Charlie",
          message:
            "My first donation on the blockchain. So cool to see it appear instantly!",
          timestamp: Math.floor(Date.now() / 1000) - 172800,
          from: "0x7890abcdef1234567890abcdef1234567890abcd",
        },
      ]);
    }
  }, [contract]);

  return (
    // Using a slightly darker background to make the cards pop
    <div className="w-full bg-slate-100 text-gray-800 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 animate-fade-in-down">
          Latest Donations
        </h2>
        <p
          className="text-center text-gray-600 mb-16 animate-fade-in-down"
          style={{ animationDelay: "0.2s" }}
        >
          See the real-time impact of our community's generosity.
        </p>

        {donations.length === 0 ? (
          <p className="text-center text-gray-500">
            No donations found yet. Be the first to contribute!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {donations.map((donation, index) => (
              <div
                key={index}
                // --- NEW DYNAMIC CARD DESIGN ---
                className="relative bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-2xl pt-12 p-6 shadow-xl hover:shadow-2xl hover:shadow-teal-500/40 transform hover:-translate-y-2 transition-all duration-300 flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Overlapping Avatar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <UserAvatar name={donation.name} />
                </div>

                <div className="relative text-center flex-grow">
                  <QuoteIcon />
                  <h3 className="font-bold text-2xl text-white">
                    {donation.name}
                    <VerifiedIcon />
                  </h3>
                  <p className="text-xs text-green-200 mb-4">
                    {new Date(
                      Number(donation.timestamp) * 1000
                    ).toLocaleString()}
                  </p>
                  <p className="text-green-100 leading-relaxed italic text-lg">
                    "{donation.message}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/20">
                  <span className="text-xs font-semibold text-green-200 uppercase">
                    From Address
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-white font-mono">
                      {truncateAddress(String(donation.from))}
                    </p>
                    <button
                      onClick={() => handleCopy(donation.from, index)}
                      className="px-2 py-1 text-xs text-white hover:bg-white/20 rounded-md transition-colors"
                    >
                      {copiedAddress === index ? (
                        <span className="font-bold">Copied!</span>
                      ) : (
                        <CopyIcon />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationsPage;

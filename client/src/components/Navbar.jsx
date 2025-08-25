import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

// Green heart logo
const Logo = () => (
  <svg
    className="h-8 w-auto text-green-600"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  // Connect wallet function
  const connectWallet = async () => {
    if (!window.ethereum) {
      setError("MetaMask is not installed!");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);

      // Listen for account changes
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0] || null);
      });

      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to connect wallet.");
    }
  };

  // ✅ Auto-check if wallet is already connected on mount
  useEffect(() => {
    const checkWallet = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }

          // Listen for account changes
          window.ethereum.on("accountsChanged", (accounts) => {
            setAccount(accounts[0] || null);
          });
        } catch (err) {
          console.error(err);
        }
      }
    };

    checkWallet();
  }, []);

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className="relative text-gray-600 font-medium group"
      onClick={() => setIsOpen(false)}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );

  return (
    <nav className="bg-white/80 shadow-md fixed w-full top-0 left-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
            <Logo />
            <span className="text-xl font-bold text-gray-800">CharityDapp</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/donation">All Donations</NavLink>
            <NavLink to="/about">About Us</NavLink>

            {/* Connect Wallet */}
            {account ? (
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
                {account.slice(0, 6)}...{account.slice(-4)}
              </span>
            ) : (
              <button
                onClick={connectWallet}
                className="px-5 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Connect Wallet
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white shadow-lg ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-green-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/donation"
            className="block text-gray-700 hover:text-green-600"
            onClick={() => setIsOpen(false)}
          >
            All Donations
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-green-600"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>

          {account ? (
            <span className="block w-full px-5 py-2 bg-green-100 text-green-800 rounded-full text-center">
              {account.slice(0, 6)}...{account.slice(-4)}
            </span>
          ) : (
            <button
              onClick={connectWallet}
              className="w-full mt-2 px-5 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>

      {/* Display error if MetaMask is not installed */}
      {error && (
        <div className="fixed top-20 right-4 bg-red-100 text-red-700 p-3 rounded-md shadow-md">
          {error}
        </div>
      )}
    </nav>
  );
}

import React, { useState } from "react";
import { ethers } from "ethers";

const DonationForm = ({ buyChai, state }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state?.contract) {
      alert("Contract is not available.");
      return;
    }

    try {
      setLoading(true);
      const amount = { value: ethers.utils.parseEther("0.001") }; // 0.001 ETH
      const tx = await state.contract.buychai(name, message, amount);
      await tx.wait();
      alert("Donation successful! 💚");
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Donation failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md transform transition-all hover:scale-[1.01]">
        {/* Form Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Make a Donation
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Your support makes a world of difference.
        </p>

        {/* Donation Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="peer w-full p-3 pt-5 border border-gray-300 rounded-lg outline-none bg-gray-50 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all text-gray-800"
              placeholder=" "
            />
            <label className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-700">
              Your Name
            </label>
          </div>

          {/* Message Input */}
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="peer w-full p-3 pt-5 border border-gray-300 rounded-lg outline-none bg-gray-50 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all text-gray-800"
              placeholder=" "
            />
            <label className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-700">
              Leave a Message
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={!state?.contract || loading}
              className={`w-full mt-2 px-5 py-2 rounded-full shadow-lg transition duration-300 ${
                state?.contract
                  ? "bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl hover:shadow-green-500/30 cursor-pointer hover:scale-105 hover:-translate-y-1"
                  : "bg-green-300 text-white cursor-not-allowed"
              }`}
            >
              {loading ? "Processing..." : "Donate Now 💚"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;

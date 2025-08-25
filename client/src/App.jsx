import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ethers } from "ethers";
import Navbar from "./components/Navbar";
import HomePage from "./Routes/HomePage";
import DonationsPage from "./Routes/DonationsPage";
import AboutPage from "./Routes/AboutPage";
import BuyChaiABI from "./contract.json/chai.json"; // your ABI file

const CONTRACT_ADDRESS = "0xE340626E30159e68e1d35A3ddb3C8bcc0911eeDb";

const App = () => {
  const [state, setState] = useState({ contract: null, provider: null });

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []); // request wallet access
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          BuyChaiABI.abi,
          signer
        );
        setState({ provider, contract });
      } else {
        alert("Please install MetaMask!");
      }
    };

    init();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage state={state} />} />
        <Route path="/donation" element={<DonationsPage state={state} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;

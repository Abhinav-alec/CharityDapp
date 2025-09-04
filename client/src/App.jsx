import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ethers } from "ethers";
import Navbar from "./components/Navbar";
import HomePage from "./Routes/HomePage";
import DonationsPage from "./Routes/DonationsPage";
import AboutPage from "./Routes/AboutPage";
import BuyChaiABI from "./contract.json/chai.json"; // your ABI file

const CONTRACT_ADDRESS = "0xE340626E30159e68e1d35A3ddb3C8bcc0911eeDb";
const SEPOLIA_CHAIN_ID = "0xaa36a7"; // 11155111 in hex

const App = () => {
  const [state, setState] = useState({ contract: null, provider: null });

  useEffect(() => {
    const init = async () => {
      if (!window.ethereum) {
        alert("Please install MetaMask!");
        return;
      }

      try {
        // Check current network
        const currentChainId = await window.ethereum.request({
          method: "eth_chainId",
        });

        if (currentChainId !== SEPOLIA_CHAIN_ID) {
          try {
            // Ask MetaMask to switch to Sepolia
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: SEPOLIA_CHAIN_ID }],
            });
          } catch (switchError) {
            // If Sepolia isn’t added, add it
            if (switchError.code === 4902) {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: SEPOLIA_CHAIN_ID,
                    chainName: "Sepolia Test Network",
                    nativeCurrency: {
                      name: "SepoliaETH",
                      symbol: "ETH",
                      decimals: 18,
                    },
                    rpcUrls: ["https://sepolia.infura.io/v3/YOUR_INFURA_KEY"],
                    blockExplorerUrls: ["https://sepolia.etherscan.io"],
                  },
                ],
              });
            } else {
              throw switchError;
            }
          }
        }

        // Setup provider, signer, and contract
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          BuyChaiABI.abi,
          signer
        );
        setState({ provider, contract });

        // Reload when user changes network
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
      } catch (err) {
        console.error("Wallet connection error:", err);
        alert(
          "Please connect to Sepolia Test Network in MetaMask and refresh the website."
        );
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

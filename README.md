# 🌍 Charity DApp

A decentralized charity application where people can **donate Ether** and see **all donation records** on a dedicated page.  
Built using **Ethereum smart contracts** with **Hardhat, Solidity, and Ethers.js**, and powered by a modern **React + Vite frontend** with **Tailwind CSS** for styling.

---

## 🚀 Features

- 💸 **Donate Ether** securely via MetaMask or any Ethereum wallet.
- 📜 **View All Donations** in real time on the "All Donations" page.
- 🔗 **Smart Contract Powered** – donations are stored on the blockchain.
- ⚡ **Fast Frontend** with React + Vite.
- 🎨 **Responsive UI** styled with Tailwind CSS.
- 🧪 **Tested** using Mocha & Chai for contract reliability.

---

## 🛠️ Tech Stack

### Blockchain & Backend

- [Hardhat](https://hardhat.org/) – Ethereum development environment
- [Solidity](https://soliditylang.org/) – Smart contract language
- [Ethers.js](https://docs.ethers.io/) – Blockchain interaction
- [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/) – Contract testing

### Frontend

- [React](https://react.dev/) + [Vite](https://vitejs.dev/) – Fast frontend development
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) – Core frontend logic
- [Tailwind CSS](https://tailwindcss.com/) – Modern styling
- [React Router DOM](https://reactrouter.com/) – Navigation

---

## 📂 Project Structure

```
CharityDapp/
│── artifacts/         # Compiled contract artifacts
│── cache/             # Hardhat cache
│── client/            # React + Vite frontend
│── contracts/         # Solidity smart contracts
│── ignition/          # Hardhat Ignition deployment scripts
│── test/              # Mocha & Chai test cases
│── hardhat.config.js  # Hardhat configuration
│── package.json       # Node dependencies
│── README.md          # Project documentation
```

---

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Abhinav-alec/CharityDapp.git
cd CharityDapp
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Compile the smart contracts

```bash
npx hardhat compile
```

### 4️⃣ Run tests

```bash
npx hardhat test
```

### 5️⃣ Deploy the contract (using Hardhat Ignition or scripts)

```bash
npx hardhat ignition deploy ./ignition/modules/Charity.js --network <network_name>
```

### 6️⃣ Start the frontend

```bash
cd client
npm install
npm run dev
```

---

## 🌐 Usage

1. Connect your MetaMask wallet.
2. Enter an amount of Ether and click **Donate**.
3. View all donations on the **All Donations** page.

---

## 🧪 Testing

Smart contracts are tested with **Mocha + Chai**:

```bash
npx hardhat test
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit PRs.

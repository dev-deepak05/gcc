import Web3 from "web3";


export async function connectToMetaMask() {
    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
      try {
        const chainId = await web3.eth.getChainId();
        if (chainId !== "0x61") {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x61",
                chainName: "Binance smartBNB Smart Chain",
                rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
                nativeCurrency: {
                  name: "Binance ",
                  symbol: "BNB",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://testnet.bscscan.com/"],
              },
            ],
          });
        }
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        return accounts;
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
        return false;
      }
    } else {
      console.error("MetaMask is not installed");
      return false;
    }
  }


  
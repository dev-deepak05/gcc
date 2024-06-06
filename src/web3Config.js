import Web3 from "web3";

export async function connectToMetaMask() {
  if (typeof window.ethereum !== "undefined") {
    const web3 = new Web3(window.ethereum);
    try {
      const chainId = await web3.eth.getChainId();
      console.log(chainId, "chainId");
      if (chainId != "0x1EF3") {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x1EF3",
              chainName: "dotblox",
              rpcUrls: ["https://rpc.dotblox.io"],
              nativeCurrency: {
                name: "DotBlox",
                symbol: "DTBX",
                decimals: 18,
              },
              blockExplorerUrls: ["https://explorer.dotblox.io/"],
            },
          ],
        });
      }
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts;
    } catch (error) {
      alert("Error connecting to MetaMask:", error);
      return false;
    }
  } else {
    alert("MetaMask is not installed");
    return false;
  }
}

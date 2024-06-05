import Web3 from "web3";
import { contactAbi, contactAddress } from "./helper2";
const web3Instance = new Web3(window.ethereum);
const contractInstance = new web3Instance.eth.Contract(
  contactAbi,
  contactAddress
);

export const getName=async(address)=>{
    try{
        const res=contractInstance.methods.name(address).call();
        return res;
    }catch(e){
        console.log(e,"from getname");
        return false;
    }
}
export const getSymbol=async(address)=>{
    try{
        const res=contractInstance.methods.symbol(address).call();
        return res;
    }catch(e){
        console.log(e,"from getsymbol");
        return false;
    }

}
export const getDecimal=async(address)=>{
    try{
        const res=contractInstance.methods.decimals(address).call();
        return res;
    }catch(e){
        console.log(e,"from getdecimal");
        return false;
    }
}
export const getTotalSupply=async(address)=>{
    try{
        const res=contractInstance.methods.totalSupply(address).call();
        return res;
    }catch(e){
        console.log(e,"from getTotalSupply");
        return false;
    }
}


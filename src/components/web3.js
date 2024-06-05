import Web3 from "web3";
import { contactAbi, contactAddress } from "./helper";
const web3Instance = new Web3(window.ethereum);
const contractInstance = new web3Instance.eth.Contract(
  contactAbi,
  contactAddress
);



export const getUserData=async(address)=>{
    try{
        const res=contractInstance.methods.UserData(address).call();
        return res;
    }catch(e){
        console.log(e,"from getUserData");
        return false;
    }
}

export const getTokenDetail=async(address)=>{
    try{
        const res=contractInstance.methods._GDC(address).call();
        return res
    }catch(e){
        console.log(e,'form Token Detail')
        return false;        
    }
}

export const getClaimReward=async(token)=>{

    console.log(token)  
    console.log(contractInstance)
    try{
        let res=await contractInstance.methods.claimSponseringIncome().send({
            from:token
        })
        console.log(res)
    }catch(e){
        console.log(e)
    }
    
}
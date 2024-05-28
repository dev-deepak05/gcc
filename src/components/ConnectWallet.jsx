import { FaCircle } from "react-icons/fa";
function ConnectWallet(){
return <>
    <div className="wallet-first"  style={{backgroundColor:'#FEFBFE'}}>
        <div className="container">
        <div className="row">
            <div className="col-lg-5">
                <img src="images/social.png" alt="" className="img-fluid"/>
            </div>
            <div className="col-lg-7">
                <div className="title">
                    <div className="sub-title">
                        <h4>CONNECT WALLET TO</h4>
                    </div>
                    <h1 className="title" style={{marginTop:'1.2rem'}}>Unlock the <span class="word">Benefits<br/></span> of GCC</h1>
                </div>
                <div className="desc">
                <p><span style={{fontWeight: '400'}}>Global Crypto Community (GCC) is a secure online community where you can connect with other crypto enthusiasts using your digital wallet (like MetaMask or Trust Wallet) – privacy guaranteed. Here, you’ll find tons of opportunities to grow your crypto knowledge and holdings. Participate in airdrops, which are basically free crypto giveaways, or invest in new projects through ICOs (Initial Coin Offerings). You can even earn rewards through staking programs and explore innovative DeFi (Decentralized Finance) solutions.</span></p>
                </div>
                <div className="container text-icon">
                    <div className="row mb-3 mt-5">
                        <div className="col-md-6">
                            <FaCircle className="circle-icon" />
                            <span>Stunning ICO's</span>
                        </div>
                        <div className="col-md-6">
                            <FaCircle className="circle-icon" />
                            <span>Higher Staking Reward</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <FaCircle className="circle-icon" />
                            <span>Community Driven</span>
                        </div>
                        <div className="col-md-6">
                            <FaCircle className="circle-icon" />
                            <span>Airdrops Advantages</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    </div>
</>
}
export default ConnectWallet
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Web3 from "web3";
import { FaCopy } from "react-icons/fa";
import { contactAbi, contactAddress } from "./helper";
import toast, { Toaster } from 'react-hot-toast';

function Presale() {
  const { tokenValue } = useSelector((state) => state.counter);
  const web3Instance = new Web3(window.ethereum);
  const contractInstance = new web3Instance.eth.Contract(
    contactAbi,
    contactAddress
  );

  const [RspAddress, setRspAddress] = useState("");
  const [adminReferal, setAdminReferal] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  function responseAddress(e) {
    console.log(e.target.value,"reaseee")
    setRspAddress(e.target.value);
    try{
    contractInstance.methods
      .AddressToId(e.target.value)
      .call()
      .then((res) => {
        setErrorMsg('')
        console.log(res,"res from address ti id");
      })
      .catch((sendError) => {
        console.error("Error sending transaction:", sendError);
      });
    }catch(error){
      if(e.target.value==""){
        setErrorMsg('')
      }else{
      setErrorMsg('Address Not Exists')
      }
      console.log(error)
    }
  }

  // console.log(contractInstance.methods, "done");


  const getdata = () => {
    if(tokenValue[0]){
    contractInstance.methods
      .adminreferal()
      .call()
      .then((tx) => {
        setAdminReferal(tx)
        tx = RspAddress != "" ? RspAddress : tx;
        if(RspAddress){
        contractInstance.methods
          .registerAndClaim(tx)
          .send({ from:tokenValue[0]})
          .then((res) => {
            console.log(res);
          })
          .catch((sendError) => {
            console.error("Error sending transaction:", sendError);
          });
        }
      })
      .catch((sendError) => {
        console.error("Error sending transaction:", sendError);
      });
    }else{
      // console.log("wallet not connected")
    }
  };

  useEffect(() => {
    getdata()
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, [tokenValue[0]]);

  useEffect(()=>{
    contractInstance.methods
    .adminreferal()
    .call()
    .then((tx) => {
      setAdminReferal(tx)
    })
    .catch((sendError) => {
      console.error("Error sending transaction:", sendError);
    });
  },[])

  //Copy Text

  function copyText(){
    navigator.clipboard.writeText(adminReferal).then(
      () => {
        // setCopySuccess('Copy!');
        toast('Copy Successfully!.')
      },
      (err) => {
      }
    );
  }

  return (
    <>
      <div className="presale-div-image">
        <div className="container-fluid presale-div-back">
          <div className="container">
            <div className="from_top">
              <div className="row presale-only-div">
                <div className="col-md-8">
                  <div className="presale-text-div">
                    <div className="only-text text-center">
                      <div>
                        WE'RE BUILDING A VIBRANT ECOSYSTEM AND YOU HAVE THE
                        EXCLUSIVE OPPORTUNITY TO BE A PART OF IT FROM THE GROUND
                        FLOOR.
                      </div>
                    </div>
                  </div>
                  <div className="text_wrapper">
                    <div className="title">
                      <div className="sub-title">
                        <h6 class="text-white">Join the GCC crypto presale</h6>
                      </div>
                      <h3 class="title text-white mt-2">
                        GCC <span class="word">Presale:</span> Your Chance to
                        Shape the Future
                      </h3>
                    </div>
                    <div className="desc mt-5">
                      <p>
                        Now’s your chance to be a part of something
                        groundbreaking – join the GCC presale and secure your
                        spot in this revolutionary ecosystem. Join effortlessly
                        using your crypto wallet, credit or debit cards, Apple
                        Pay, or Google Pay. Become a valued member of our
                        community and embrace the simplicity of connection
                        today.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 presale-live">
                  <div
                    className="presale-div"
                    style={{ backgroundColor: "#00111E" }}
                  >
                    <div className="presale-title">
                      <h3 className="text-white">Pre-sale will Live In</h3>
                    </div>
                    <div className="presale-time-div">
                      <div className="time">
                        <div className="presale-day time-box">8</div>
                        <div className="day">Days</div>
                      </div>
                      <div className="time">
                        <div className="presale-hour time-box">5</div>
                        <div className="hour">Hour</div>
                      </div>
                      <div className="time">
                        <div className="presale-minute time-box">25</div>
                        <div className="minute">Minute</div>
                      </div>
                      <div className="time">
                        <div className="presale-second time-box">10</div>
                        <div className="second">Second</div>
                      </div>
                    </div>
                    <div className="presale-line mt-3 mb-4"></div>
                    {/* <div className="pre-sale">Pre Sale</div>
                    <div className="presale-progress mt-4 mb-4">
                      <div className="progress-bar"></div>
                    </div>
                    <div className="presale-bonus">
                      <ul>
                        <li>
                          <div className="line"></div>Pre Sale
                        </li>
                        <li>
                          <div className="line"></div>Soft Cap
                        </li>
                        <li>
                          <div className="line"></div>Bonus
                        </li>
                      </ul>
                    </div> */}
                    <div className="response-input">
                      <input
                        type="text"
                        placeholder="Sponser Address"
                        name="responser-address"
                        className="form-control"
                        style={{ width: "17rem", margin: "auto" }}
                        onChange={responseAddress}
                        value={RspAddress}
                        required
                      />
                      <div className="text-white m-3" style={{ fontSize: "11px" }}>
                         {errorMsg}
                      </div>
                      {/* <div className="text-white mt-3 ms-2" style={{ fontSize: "11px" }}>
                        Admin Address : {adminReferal} <span style={{cursor:'pointer'}} id="copy-button" onClick={copyText}><FaCopy /> {copySuccess}</span>
                      </div> */}
                    </div>
                    <div className="presale-wallet pt-5">
                      <span className="presale-wallet-btn" onClick={getdata} style={{cursor:'pointer'}}>
                        {tokenValue
                          ? "Register And Claim"
                          : "Connect Wallet Now"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="col-md-12">
              <div class="sub-title-wrapper crypto-msg">
                <h4 class="sub-title text-white">
                  Unlock Value Through Participation
                </h4>
                <h2 class="title text-white">
                  Fueling a <span class="word">Thriving</span> Crypto Community
                  Ecosystem
                </h2>
              </div>
            </div>
          </div>
          <div className="container mt-5 text-white pb-5">
            <div data-aos="fade-up">
              <div className="row">
                <div className="col-md-5">
                  <div className="crypto">
                    <div className="community">
                      <div className="community-title">
                        <h3>Community Engagement</h3>
                        <p>
                          Our community boasts its native token GCC, granting
                          holders the power to vote on pivotal decisions and
                          participate in exclusive airdrops. Share your views
                          through posts, amplifying your voice within our
                          community. Engage in insightful discussions within
                          dedicated chat rooms, fostering collaboration and
                          knowledge-sharing among members
                        </p>
                      </div>
                    </div>
                    <div className="exclusive mt-5">
                      <div className="exclusive-title">
                        <h3>Exclusive Benefits</h3>
                        <p>
                          Join our dynamic crypto community where privacy is
                          paramount, and connections are forged securely through
                          your wallet ID. At our platform, we prioritize
                          rewarding network holders with a plethora of benefits,
                          including airdrops, access to ICOs, and a premier
                          staking program.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="token" style={{ marginTop: "7rem" }}>
                    <div className="token-title">
                      <h3>Token Economy</h3>
                      <p>
                        Our community boasts its native token GCC, granting
                        holders the power to vote on pivotal decisions and
                        participate in exclusive airdrops. Share your views
                        through posts, amplifying your voice within our
                        community. Earn GCC tokens as rewards for fulfilling
                        tasks, active participation, and through multiple
                        airdrops.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Presale;

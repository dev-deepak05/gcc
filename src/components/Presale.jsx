import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import Web3 from "web3";
import { contactAbi, contactAddress } from "./helper";
import { connectToMetaMask } from "../web3Config";
import { setTokenValue } from "../redux/reducer";

function Presale() {
  const dispatch = useDispatch();
  const { tokenValue } = useSelector((state) => state.counter);
  const web3Instance = new Web3(window.ethereum);
  const contractInstance = new web3Instance.eth.Contract(
    contactAbi,
    contactAddress
  );


  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // getdata()
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, [tokenValue[0]]);


  return (
    <>
      <div className="presale-div-image">
        <div className="container-fluid presale-div-back">
          <div className="container">
          </div>
          <div className="container">
            <div className="col-md-12">
              <div class="sub-title-wrapper crypto-msg">
                <h2 class="title text-white pt-5">
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

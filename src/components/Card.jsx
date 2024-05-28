import "../App.css";
import { FaArrowRight } from "react-icons/fa6";
function Card() {
  return (
    <>
    <div className="card-main pt-4"  style={{backgroundColor:'#FEFBFE'}}>
      <div className="container card-section pt-5">
        <div className="col-12">
          <div className="sub-title text-center">
            <h5 className="text-cender" style={{textDecoration:'underline dotted'}}>We Stand For</h5>
            <h2 class="title">
              Educate, empower, <span class="word">and</span> engage
            </h2>
          </div>

          <div className="card-box text-center mt-5 ">
            <div class="row">
              <div class="col-lg-4 educate-div"  style={{border:'none'}}>
                <div class="card" style={{backgroundColor:'#F1F3F5',border:'none'}}>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="#" title="Secure and Privacy Focused ">
                        Secure and Privacy Focused
                      </a>
                    </h5>
                    <p class="desc mt-4">
                      Connections within the community are forged securely
                      through digital wallet IDs, ensuring anonymity and data
                      protection. A platform where your identity and
                      transactions are safeguarded, allowing you to engage with
                      peace of mind.
                    </p>
                    <div class="link">
                    <a href="#" title="Get Details Now">
                      Get Details Now
                      <FaArrowRight  className="ms-3" />
                    </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 educate-div">
                <div class="card" style={{backgroundColor:'#F6EBFF',border:'none'}}>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="#" title="Secure and Privacy Focused ">
                       Token-Powered Ecosystem
                      </a>
                    </h5>
                    <p class="desc mt-4">
                    GCC token holders enjoy voting rights on crucial decisions and exclusive access to airdrops. Earn GCC tokens as rewards for active participation, completing tasks, and through multiple airdrop <br/> opportunities.
                    </p>
                    <div class="link">
                    <a href="#" title="Get Details Now" >
                      Get Details Now
                      <FaArrowRight  className="ms-3" />
                    </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 educate-div">
                <div class="card" style={{backgroundColor:'#F3EFE9',border:'none'}}>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="#" title="Secure and Privacy Focused ">
                      Rewarding Network Participation
                      </a>
                    </h5>
                    <p class="desc mt-4">
                    Participate in discussions, share your views and collaborate with like-minded individuals. Gain access to a plethora of benefits, including airdrops, ICOs, staking programs, and cuttingedge DeFi <br/>solutions.
                    </p>
                    <div class="link">
                    <a href="#" title="Get Details Now" >
                      Get Details Now
                      <FaArrowRight  className="ms-3" />
                    </a>
                    </div>
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
export default Card;

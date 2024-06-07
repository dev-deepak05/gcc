import "../App.css";
import { useSelector } from "react-redux";
import { FaCopy } from "react-icons/fa";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { contactAbi, contactAddress } from "./helper";
import toast from "react-hot-toast";
import { useLocation, useParams } from "react-router-dom";
import { addressToId } from "./web3";

export default function Body() {
  const [refId, setRefId] = useState(0);
  const [inputLink, setInputLink] = useState("");
  const { tokenValue } = useSelector((state) => state.counter);
  const web3Instance = new Web3(window.ethereum);
  const contractInstance = new web3Instance.eth.Contract(
    contactAbi,
    contactAddress
  );
  // const location = useLocation();
  useEffect(() => {
    if (tokenValue[0]) {
      addressToId(tokenValue[0])
        .then((tx) => {
          let id = Number(tx);
          setRefId(id);
          setInputLink(`https://gccclub.org?refid=${refId}`);
        })
        .catch((sendError) => {
          console.error("Error sending transaction:", sendError);
        });
    }
  }, [tokenValue]);

  function copyRefId() {
    navigator.clipboard.writeText(inputLink);
    toast.success("copied Successfully");
  }

  return (
    <>
      <div className="body-container">
        <div className="container" id="body">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="title">
                <div className="sub-title">
                  <h6>GLOBAL CRYPTO COMMUNITY</h6>
                </div>
                <h2 class="title">
                  <div class="wrap-word">
                    <span class="word">Privacy-Focused,</span>
                    <img
                      src="images/gcc-privacy.png"
                      alt="Privacy-Focused, Community-Driven"
                      className="gcc-privacy"
                    />
                  </div>
                  Community-Driven
                </h2>
              </div>
              <div className="title-content">
                <p>
                  Discover a world of exclusive benefits when you join the GCC
                  community. As a member, you ll gain access to a plethora of
                  opportunities that empower your crypto journey while
                  prioritizing your privacy and security.
                </p>
              </div>
              <div className="title-list">
                <ul>
                  <li class="elementor-icon-list-item elementor-inline-item">
                    <span class="elementor-icon-list-icon">
                      <svg
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-check-circle"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                      </svg>
                    </span>
                    <span class="elementor-icon-list-text">
                      Top Performing ICO's
                    </span>
                  </li>
                  <li class="elementor-icon-list-item elementor-inline-item">
                    <span class="elementor-icon-list-icon">
                      <svg
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-check-circle"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                      </svg>{" "}
                    </span>
                    <span class="elementor-icon-list-text">
                      Best Rewards on Staking
                    </span>
                  </li>
                  <li class="elementor-icon-list-item elementor-inline-item">
                    <span class="elementor-icon-list-icon">
                      <svg
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-check-circle"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                      </svg>{" "}
                    </span>
                    <span class="elementor-icon-list-text">
                      Stunning Rewards
                    </span>
                  </li>
                  <li class="elementor-icon-list-item elementor-inline-item">
                    <span class="elementor-icon-list-icon">
                      <svg
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-check-circle"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                      </svg>{" "}
                    </span>
                    <span class="elementor-icon-list-text">Defi-Ecosystem</span>
                  </li>
                  <li class="elementor-icon-list-item elementor-inline-item">
                    <span class="elementor-icon-list-icon">
                      <svg
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-check-circle"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                      </svg>{" "}
                    </span>
                    <span class="elementor-icon-list-text">
                      Privacy Protected
                    </span>
                  </li>
                </ul>
              </div>
              <div className="refaddress">
                { refId!=0 &&
                  <div className="inputCopy d-flex">
                    <input
                      type="text"
                      className="form-control mb-4"
                      style={{ width: "50%" }}
                      // value="this"
                      value={inputLink}
                      placeholder="https://gccclub.org?refid"
                    />
                    <FaCopy
                      style={{ fontSize: "25px", cursor: "pointer" }}
                      className="ms-3"
                      onClick={copyRefId}
                    />
                  </div>
                }
              </div>
              <div className="social-icon">
                <div className="wallet-body">
                  <div>{tokenValue ? "Connected" : "Connect Wallet Now"}</div>
                </div>
                <div className="back cat ms-3"></div>
                <div className="back social">
                  {/* <img
                  src="images/gcc-image1.png"
                  alt=""
                  height={60}
                  width={60}
                /> */}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="body-right-div">
                <div className="avtar">
                  <div className="avtar-image">
                    <img src="images/gcc-avatar1.png" alt="" height={70} />
                  </div>
                  <div className="avtar-msg">
                    <h4>Here are Best ICO's</h4>
                  </div>
                </div>
                <div className="gcc-world-img">
                  <img
                    src="images/gcc-world.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="free-reward">
                  <div className="msg-logo">
                    <img src="images/gcc-msg.png" alt="" />
                  </div>
                  <div className="msg-reward">
                    <h2>Get Free Airdrops & Rewards</h2>
                    <div class="shape"></div>
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

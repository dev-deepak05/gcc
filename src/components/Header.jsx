import { useEffect, useState } from "react";
import "../App.css";
import Web3 from "web3";
import { connectToMetaMask } from "../web3Config";
import { useDispatch, useSelector } from "react-redux";
import { setTokenValue } from "../redux/reducer";
import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const { tokenValue } = useSelector((state) => state.counter);
  
  //  Get Address Token

  const connect = async () => {
    try {
      let res = await connectToMetaMask();
      if (res) {
        dispatch(setTokenValue(res));
      }
    } catch (error) {
      alert("Wallet not connected!");
    }
  };

  const [sticky, setSticky] = useState();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //wallet token
    useEffect(()=>{
      const loadAccounts = async () => {
        if (window.ethereum) {
          try {
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            accounts[0]!=undefined?dispatch(setTokenValue(accounts)):dispatch(setTokenValue(''))
          } catch (error) {
            console.error('User denied account access');
          }
        }}
        loadAccounts()
    },[])
  // const [tokenValue,setTokenValue]=useState(false);

  let token = false;
  if (tokenValue[0] !=undefined) {
    token = tokenValue[0]?.slice(0, 5) + "...." + tokenValue[0]?.slice(-4);
  }

  return (
    <>
      <nav
        className={
          sticky
            ? "navbar navbar-expand-lg navbar-div"
            : "navbar navbar-expand-lg"
        }
      >
        <div class="container">
          <Link to='/'>
          <img
            src="images/gcc-logo.png"
            alt=""
            style={{ width: "180px", height: "auto" }}
          />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item active">
                <Link class="nav-link fw-bold font-monospace" to="/details">
                  VIEW DETAILS
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold font-monospace" href="#road-map" >
                  ROADMAP
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold font-monospace" href="#">
                  ICO
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold font-monospace" href="#">
                  ABOUT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold font-monospace" href="#footer-section">
                  CONTACT
                </a>
              </li>
            </ul>
            <div class="d-flex">
              <div className="wallet" onClick={() => connect()}>
                { token ? token : "Connect Wallet Now"}
              </div>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

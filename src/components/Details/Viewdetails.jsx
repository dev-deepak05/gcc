import { useEffect, useState } from "react";
import { fetchClaimDetails } from "../../helpers/api";
import { useSelector } from "react-redux";
import { getUserData, getTokenDetail } from "../web3";
import {
  getName,
  getDecimal,
  getSymbol,
  getTotalSupply,
} from "../tokenDetails";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "../Footer";

function Viewdetails() {

  const [userDetail, setUserDetail] = useState(null);
  const [responseIncome, setResponseIncome] = useState([]);
  const [claim, setClaim] = useState(null);
  const [tokenAddress,setTokenAddress]=useState(null)
  const [tokenName, setTokenName] = useState(null);
  const [tokenSymbol, setTokenSymbol] = useState(null);
  const [tokenDecimal, setTokenDecimal] = useState(null);
  const [tokenSupply, setTokenSupply] = useState(null);
  const { tokenValue } = useSelector((state) => state.counter);

  useEffect(() => {
    const url1 = `http://localhost/gccApi/claimDetail.php?user=${tokenValue[0]}`;
    fetchClaimDetails(url1).then((res) => {
      if (res) {
        setUserDetail(res.data[0]);
      }
    });
    const url2 = `http://localhost/gccApi/sponserincome.php?user=${tokenValue[0]}`;
    fetchClaimDetails(url2).then((res) => {
      if (res) {
        setResponseIncome(res.data);
      }
    });

    getUserData(tokenValue[0]).then((res) => {
      if (res) {
        setClaim(res);
      }
    });

    getTokenDetail(tokenValue[0]).then((res) => {
      if (res) {
        setTokenAddress(res)
      }
    })
  }, [tokenValue]);

  // token Address

  useEffect(()=>{

    getName(tokenAddress).then((res) => {
      if (res) {
        setTokenName(res);
      }
    });
    getSymbol(tokenAddress).then((res) => {
      if (res) {
        setTokenSymbol(res);
      }
    });
    getDecimal(tokenAddress).then((res) => {
      if (res) {
        console.log(res,'decimal')
        setTokenDecimal(res);
      }
    });
    getTotalSupply(tokenAddress).then((res) => {
      if (res) {
        console.log(res,'supply')
        setTokenSupply(res);
      }
    });

  },[tokenAddress])

  return (
    <>
      <div className="container mb-5">
        <div className="row mt-5">
          <div className="col-md-6">
            {userDetail && (
              <div class="card" style={{ backgroundColor: "#F1F3F5" }}>
                <div class="card-body">
                  <h5 class="card-title text-center">User Detail</h5>
                  <p class="card-text mt-3 fw-bold">
                    Id :{" "}
                    <span className="fw-normal">
                      {userDetail && userDetail?.id}
                    </span>
                  </p>

                  <p class="card-text fw-bold">
                    user : <span className="fw-normal">{userDetail?.user}</span>
                  </p>
                  <p class="card-text fw-bold">
                    Amount :{" "}
                    <span className="fw-normal">
                      {Math.round(userDetail?.amount / 1e18)}
                    </span>
                  </p>
                  <p class="card-text fw-bold">
                    Date :{" "}
                    <span className="fw-normal">
                      {new Date(
                        userDetail?.block_timestamp * 1000
                      ).toLocaleDateString()}
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-6">
            {claim && (
              <div
                class="card"
                style={{ height: "18.5rem", backgroundColor: "#F1F3F5" }}
              >
                <div class="card-body pe-1">
                  <h5 class="card-title text-center">Claim Detail</h5>
                  <p class="card-text fw-bold mt-3">
                    User Referal Address :{" "}
                    <span className="fw-normal">
                      {claim?.userReferalAddress}
                    </span>
                  </p>
                  <p class="card-text fw-bold">
                    Income Recived :{" "}
                    <span className="fw-normal">
                      {Number(claim?.incomeRecived)}
                    </span>
                  </p>
                  <p class="card-text fw-bold">
                    Total Reward Claimed :{" "}
                    <span className="fw-normal">
                      {Number(claim?.totalRewardClaimed)}
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-6">
            {tokenAddress &&
            <div className="card mt-3" style={{ backgroundColor: "#F1F3F5" }}>
              <div class="card-body pe-1">
                <h5 class="card-title text-center">Token Details</h5>
                <p class="card-text fw-bold mt-3">
                  Token Address :
                  <span className="fw-normal">{tokenAddress}</span>
                </p>
                <p class="card-text fw-bold">
                  Name :  <span className="fw-normal">{tokenName}</span>
                </p>
                <p class="card-text fw-bold">
                  Symbol : 
                  <span className="fw-normal">{tokenSymbol}</span>
                </p>
                <p class="card-text fw-bold">
                  Decimal : 
                  <span className="fw-normal">{Number(tokenDecimal)}</span>
                </p>
                <p class="card-text fw-bold">
                  Total Supply :  
                  <span className="fw-normal">{tokenSupply && (Number(tokenSupply)/1e54).toLocaleString()}</span>
                </p>
              </div>
            </div>
}
          </div>

          <div className="view-details mt-5">
            <table class="table">
              <thead>
                <tr>
                  <th
                    scope="col"
                    colspan="6"
                    className="bg-dark text-white text-center"
                  >
                    <h1>Reward Details</h1>
                  </th>
                </tr>
              </thead>
              <thead>
                <tr className="">
                  <th scope="col">Level</th>
                  <th scope="col">From</th>
                  {/* <th scope="col">To</th> */}
                  <th scope="col">Amount</th>
                  <th scope="col">TransactionHash</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                {responseIncome.map((data) => (
                  <tr>
                    <td scope="row">{data.level}</td>
                    <td>{data.from}</td>
                    {/* <td>{data.to}</td> */}
                    <td>{Math.round(data.amount / 1e18)}</td>
                    <td>
                      <a
                        href={`https://testnet.bscscan.com/tx/${data.transaction_id}`}
                        style={{ color: "black", textDecoration: "none" }}
                        target="_blanck"
                      >
                        {data.transaction_id.slice(1, 10) +
                          "......." +
                          data.transaction_id.slice(-5)}
                        <FaArrowRightLong className="ms-1" />
                      </a>
                    </td>
                    <td>{new Date(data.time * 1000).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <Pagination count={5} variant="outlined" shape="rounded" /> */}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Viewdetails;

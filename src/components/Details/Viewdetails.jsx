import { useEffect, useState } from "react";
import { fetchClaimDetails } from "../../helpers/api";
import { useSelector } from "react-redux";
import { getUserData, getTokenDetail, getClaimReward } from "../web3";
import {
  getName,
  getDecimal,
  getSymbol,
  getTotalSupply,
} from "../tokenDetails";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "../Footer";
import { Pagination } from "@mui/material";

function Viewdetails() {
  const [userDetail, setUserDetail] = useState(null);
  const [responseIncome, setResponseIncome] = useState(null);
  const [claim, setClaim] = useState(null);
  const [tokenAddress, setTokenAddress] = useState(null);
  const [tokenName, setTokenName] = useState(null);
  const [tokenSymbol, setTokenSymbol] = useState(null);
  const [tokenDecimal, setTokenDecimal] = useState(null);
  const [tokenSupply, setTokenSupply] = useState(null);
  const { tokenValue } = useSelector((state) => state.counter);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const url1 = `https://dotblox.io/gccApi/claimDetail.php?user=${tokenValue[0]}`;
  const url2 = `https://dotblox.io/gccApi/sponserincome.php?user=${tokenValue[0]}`;

  useEffect(() => {
    fetchClaimDetails(url1).then((res) => {
      if (res) {
        setUserDetail(res.data[0]);
      } else {
        setUserDetail(null);
      }
    });

    fetchClaimDetails(url2, page).then((res) => {
      if (res) {
        setResponseIncome(res.data);

        const totalRecord = res.totalRecords;
        const tPage = Math.ceil(totalRecord / 10);
        setTotalPage(tPage);
      } else {
        setResponseIncome(null);
      }
    });

    getUserData(tokenValue[0]).then((res) => {
      console.log(res);
      if (res) {
        setClaim(res);
      }
    });

    getTokenDetail(tokenValue[0]).then((res) => {
      console.log(res, "dddddd");
      if (res) {
        setTokenAddress(res);
      }
    });
  }, [tokenValue, page]);

  const handlePagination = (event, value) => {
    setPage(value);
    console.log(value);
    fetchClaimDetails(url2, value);
  };

  function claimDetail(token) {
    getClaimReward(token);
  }

  // token Address

  useEffect(() => {
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
        setTokenDecimal(res);
      }
    });
    getTotalSupply(tokenAddress).then((res) => {
      if (res) {
        setTokenSupply(res);
      }
    });
  }, [tokenAddress]);

  return (
    <>
      <div className="container mb-5">
        <div className="row mt-5">
          {userDetail && (
            <div className="col-md-12 col-lg-6 mb-3">
              <div
                class="card"
                style={{ backgroundColor: "#F1F3F5", minHeight: "330px" }}
              >
                <div class="card-body">
                  <h5 class="card-title text-center">User Detail</h5>
                  <p class="card-text mt-3 fw-bold">
                    Id :
                    <span className="fw-normal">
                      {userDetail && userDetail?.id}
                    </span>
                  </p>

                  <p class="card-text fw-bold">
                    user : <span className="fw-normal">{userDetail?.user}</span>
                  </p>
                  <p class="card-text fw-bold">
                    Amount :
                    <span className="fw-normal">
                      {Math.round(userDetail?.amount / 1e18)}
                    </span>
                  </p>
                  <p class="card-text fw-bold">
                    Date :
                    <span className="fw-normal">
                      {new Date(
                        userDetail?.block_timestamp * 1000
                      ).toLocaleDateString()}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
          {claim?.userReferalAddress !=
            "0x0000000000000000000000000000000000000000" &&
          claim?.userReferalAddress ? (
            <div className="col-md-12 col-lg-6 mb-3">
              <div
                class="card"
                style={{
                  minHeight: "18.5rem",
                  backgroundColor: "#F1F3F5",
                  height: "330px",
                }}
              >
                <div class="card-body pe-1">
                  <h5 class="card-title text-center">Claim Detail</h5>
                  <p class="card-text fw-bold mt-3">
                    User Referal Address :
                    <span className="fw-normal">
                      {claim?.userReferalAddress}
                    </span>
                  </p>
                  <p class="card-text fw-bold">
                    Total Reward Claimed :
                    <span className="fw-normal">
                      {Number(claim?.totalRewardClaimed) / 1e18}
                    </span>
                  </p>
                  <p class="card-text fw-bold">
                    Total Airdrop Claim :
                    <span className="fw-normal">
                      {Number(claim?.totalAirdropClimed) / 1e18}
                    </span>
                  </p>
                  <p class="card-text fw-bold">
                    Total Reward :
                    <span className="fw-normal">
                      {Number(claim?.incomeRecived) / 1e18}
                    </span>
                  </p>
                  <button
                    className="btn btn-dark float-end me-4"
                    onClick={() => claimDetail(tokenValue[0])}
                    style={{ marginTop: "-1rem" }}
                  >
                    Claim Reward
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {tokenAddress && (
            <div className="col-md-12 col-lg-6 mb-5">
              <div
                className="card"
                style={{ backgroundColor: "#F1F3F5", minHeight: "330px" }}
              >
                <div class="card-body pe-1">
                  <h5 class="card-title text-center">Token Details</h5>
                  <p class="card-text fw-bold mt-3">
                    Token Address :
                    <span className="fw-normal">{tokenAddress}</span>
                  </p>
                  <p class="card-text fw-bold">
                    Name : <span className="fw-normal">{tokenName}</span>
                  </p>
                  <p class="card-text fw-bold">
                    Symbol :<span className="fw-normal">{tokenSymbol}</span>
                  </p>
                  <p class="card-text fw-bold">
                    Decimal :
                    <span className="fw-normal">{Number(tokenDecimal)}</span>
                  </p>

                  {/* Changes devided by 1e18 */}
                  <p class="card-text fw-bold">
                    Total Supply :
                    <span className="fw-normal">
                      {tokenSupply &&
                        (Number(tokenSupply) / 1e18).toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="view-details col-md-12 col-lg-12 table-responsive">
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
                {responseIncome ? (
                  responseIncome.map((data) => (
                    <tr>
                      <td scope="row">{data.level}</td>
                      <td>{data.from}</td>
                      {/* <td>{data.to}</td> */}
                      <td>{Math.round(data.amount / 1e18)}</td>
                      <td>
                        <a
                          href={`https://explorer.dotblox.io/tx/${data.transaction_id}`}
                          style={{ color: "black" }}
                          className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"
                          id="trnsId"
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
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center fw-bold">
                      Record Not Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <Pagination
              count={totalPage}
              variant="outlined"
              shape="rounded"
              onChange={handlePagination}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Viewdetails;

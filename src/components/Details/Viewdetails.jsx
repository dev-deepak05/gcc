import { useEffect, useState } from "react";
import { fetchClaimDetails } from "../../helpers/api";

function Viewdetails() {
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    // Call the function with the specific user address
    const userAddress = "0x7BeB516F63618d23fDb93076B62436fD7D4a6355";
    fetchClaimDetails(userAddress).then((res) => {
      setUserDetail(res.data[0]);
      console.log(res.data[0]);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">User Detail</h5>
                <p class="card-text mt-3 fw-bold">
                  Id : <span className="fw-normal">{userDetail?.id}</span>
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
                    {new Date(userDetail?.block_timestamp*1000).toLocaleDateString()}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {" "}
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">User Detail</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="view-details mt-5">
          <table class="table">
            <thead>
              <tr>
                <th
                  scope="col"
                  colspan="4"
                  className="bg-dark text-white text-center"
                >
                  <h1>Reward Details</h1>
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Amout</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">Total Direct</td>
                <td>Mark</td>
                <td>Mark</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Viewdetails;

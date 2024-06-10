import PiechartStatus from "./PiechartStatus";
import { PieChart } from "@mui/x-charts/PieChart";

const data2 = [
  { label: "Level 3", value: 30 },
  { label: "Level 5", value: 25 },
  { label: "Level 10", value: 20 },
  { label: "Level 15", value: 15 },
  { label: "Level 20", value: 10 },
];
function RewardDistribution() {
  return (
    <>
      <div className="piechart-div-back pb-5">
        <div className="container piechart-div">
          <div className="col-md-12">
            <div className="chart-title text-center">
              <div class="chart-sub-title">
              </div>

              <h2 class="title">
                Reward <span class="word">Distribution</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container piechart-status">
          <div className="row">
            <div className="col-md-12 col-lg-4 chat-left-status">
              <div className="advisory">
                <h6>Level 3 : 30%</h6>
                <div className="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "30%", backgroundColor: "#02B2AF" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="development mt-3">
                <h6>Level 5 : 25%</h6>
                <div className="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "25%", backgroundColor: "#2E96FF" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="bounties mt-3">
                <h6>Level 10 : 20%</h6>
                <div className="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "20%", backgroundColor: "#B800D8" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 mt-5">
              <div className="caht-div ms-5 text-center">
                <PieChart
                  series={[
                    {
                      data: data2,
                      cx: 120,
                      cy: 120,
                      innerRadius: 40,
                      outerRadius: 120,
                    },
                  ]}
                  height={300}
                  slotProps={{
                    legend: { hidden: true },
                  }}
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-4 chat-right-status">
              <div className="advisory">
                <h6 className="float-right">Level 15 : 15%</h6>
                <div className="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "15%", backgroundColor: "#60009B" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="development mt-3">
                <h6>Level 20 : 10%</h6>
                <div className="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "10%", backgroundColor: "#2731C8" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RewardDistribution;

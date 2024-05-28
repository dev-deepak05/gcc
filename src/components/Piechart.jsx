import PiechartStatus from "./PiechartStatus";
function Piechart() {
  return (
    <>
     <div className="piechart-div-back pb-5">
      <div className="container piechart-div">
        <div className="col-md-12">
          <div className="chart-title text-center">
            
              <div class="chart-sub-title">
                <h6 class="sub-title">Tokenomics</h6>
              </div>

              <h2 class="title">
                The GCC Token <span class="word">Distribution</span>
              </h2>
            <div className="chart-button mt-5">
                <button>DISTRIBUTION</button>
                <button>FUNDING ALLOCATION</button>
            </div>
          </div>
        </div>

      </div>
      <div className="container piechart-status">
        <div className="row">
        <div className="col-md-4 chat-left-status">
            <div className="advisory">
                <h6>Advisory board : 25%</h6>
                <div className="progress">
            <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="development mt-3">
                <h6>Development: 10%</h6>
            <div className="progress">
            <div class="progress-bar" role="progressbar" style={{width: "10%",backgroundColor:'#5637C8'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="bounties mt-3">
                <h6>Bounties: 10%</h6>
            <div className="progress">
            <div class="progress-bar" role="progressbar" style={{width: "10%",backgroundColor:'#00D89E'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> 
            </div>
            </div>
        </div>
        <div className="col-md-4 mt-5">
            <div className="caht-div ms-5">
            <PiechartStatus/>
            </div>
        </div>
        <div className="col-md-4 chat-right-status">
        <div className="advisory">
                <h6 className="float-right">Reserve: 10%</h6>
                <div className="progress">
            <div class="progress-bar" role="progressbar" style={{width: "10%",backgroundColor:'#ACDF35'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="development mt-3">
                <h6>Pre-sale: 20%</h6>
            <div className="progress">
            <div class="progress-bar bg-warning" role="progressbar" style={{width: "20%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="bounties mt-3">
                <h6>Token Sale: 25%</h6>
            <div className="progress">
            <div class="progress-bar bg-danger" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> 
            </div>
            </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Piechart;

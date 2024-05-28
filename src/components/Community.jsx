import { useSelector } from "react-redux";
function Community() {
  const {tokenValue}= useSelector((state)=>state.counter);
  return (
    <>
      <div className="col-md-12 community-div text-white">
        <div className="container text-center community-second-div">
          <div className="col-md-12 bg-dark community-content">
              <div class="community-sub-title">
                <h4 class="sub-title pt-4">Connect Wallet Now</h4>
              </div>

              <h2 class="title text-white">Be a <span class="word">Part</span> Of Global Crypto Community</h2>
              <div className="desc">
              <p class="mt-4">
                Chat with Chatsonic that is GPT-4 powered from the comfort of
                your couch or while traveling. Let Chatsonic be your personal
                assistant!
              </p>
              </div>
              <div className="community-wallet mb-4 mt-5">
                    <span className="community-wallet-btn">
                    {tokenValue?'Connected':'Connect Wallet Now'}
                    </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Community;

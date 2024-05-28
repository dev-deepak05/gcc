import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
function Footer() {
  return (
    <>
      <div className="footer-div" id="footer-section">
        <div className="container">
          <div className="row footer-content">
            <div className="col-md-4 text-center">
              <img src="images/gcc-logo2.png" alt="" height={100} width={250}/>
            </div>
            <div className="col-md-4">
              <h4 className="text-white text-center">Don't miss out, Stay updated</h4>
              <div className="form-div mt-3 text-center">
                <form action="#">
                    <input type="text" className="" placeholder="Email Address"/>
                    <input type="submit" value='SUBSCRIBE' className="btn btn-primary p-3 fw-bold ms-3"/>
                </form>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="icons">
                <span><FaFacebook /></span>
                <span><FaTwitter /></span>
                <span><FaGithub /></span>
                <span><BsTwitterX /></span>
                <h5>GCC 2024. All rights reserved.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

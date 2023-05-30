import { ArrowLeftOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import "./otp.css";
import { useState } from "react";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:3003/signup/fetchData",
        otp
      );
      console.log(result);
      alert("Authenticate");
      //   not home for the registration page
      navigate("/setUp");
    } catch (err) {
      alert("Not authenticate");
    }
  };
  return (
    <div className="otpContainer">
      <div className="otpLeft">
        <img
          src="	https://gmail.loominate.app/static/media/mons-with-pot.58ac9558.svg"
          alt="logo"
        />
      </div>
      <div className="otpRight">
        <div className="otpRightWrapper">
          <h3>Enter Verification Code</h3>
          <p>
            Please type in the 4-digit code sent to your work email. If it does
            not appear in your Inbox, please check your Updates, Quarantined or
            Spam folders.
          </p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="otpFormContainer">
              <div className="otpInputContainer">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  //   renderSeparator={<span>-</span>}
                  renderInput={(props) => (
                    <input
                      {...props}
                      style={{
                        borderBottom: "1px solid blue",
                        margin: "10px",
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  )}
                />
              </div>
            </div>
            <div className="otpBtnContainer">
              <div className="otpLeftBtn">
                <button type="button" className="leftBtn">
                  <Link to="/">
                    <ArrowLeftOutlined />
                  </Link>
                </button>
              </div>
              <div className="otpRightBtn">
                <button type="submit">NEXT</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otp;

import axios from "axios";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const SignUp = ({ handleModal, handleModal1, handleModal2 }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3003/signup/otp", {
        email: email,
      });
      console.log(`signUp email worked ${res}`);
      navigate("/otp");
    } catch (err) {
      alert("Did'nt work", err);
      console.log(err);
    }
  };

  return (
    <>
      <div className="form-input">
        <h2>Join Your Colleagues</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-input_1">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="paraDiv" style={{ marginLeft: "18px" }}>
            <p style={{ margin: "16px" }}>
              🧙‍♂️ Your work email is only used to confirm which space you belong
              to{" "}
              <span onClick={() => handleModal2(true)}>
                <InfoCircleOutlined style={{ color: "red" }} />
              </span>
            </p>

            <p style={{ margin: "16px" }}>
              🔐 Your identity is protected.
              <span onClick={() => handleModal(true)}>
                <InfoCircleOutlined style={{ color: "red" }} />
              </span>
            </p>
            <p style={{ marginLeft: "16px" }}>
              🦄 Just be yourself... and get rewarded for it!
              <span onClick={() => handleModal1(true)}>
                <InfoCircleOutlined style={{ color: "red" }} />
              </span>
            </p>
          </div>
          <div>
            <button className="btn-submit">Next</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignUp;

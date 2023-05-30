import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signIn.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, password };
    console.log(username, password);
    try {
      const res = await axios.post(
        "http://localhost:3003/signin/login",
        userData
      );
      navigate("/home");
      console.log(res.data);
    } catch (err) {
      alert(`Could't success ${err}`);
    }
  };
  return (
    <>
      <div className="form-input">
        <h2>soombo Coworker's Community</h2>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-input_1">
            <label htmlFor="">Username</label>
            <input
              className="userName"
              type="text"
              placeholder="Your pseudonym"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-input_2">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="***"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <a href="#" style={{ margin: "10px" }}>
              Forgot password?
            </a>
          </div>

          <div>
            <button className="btn-submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignIn;

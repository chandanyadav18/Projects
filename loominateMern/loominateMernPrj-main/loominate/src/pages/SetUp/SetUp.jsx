import "./setup.css";
import img from "../../links/imgLinks";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SyncIcon from "@mui/icons-material/Sync";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SetUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleValidate = (e) => {
    setUsername(e.target.value);
    if (username.length > 5) {
      setError(false);
    } else if (username.length < 5) {
      setError(true);
    }
  };
  const handleSubmit = async () => {
    const userData = { username, password };
    try {
      const res = axios.post("http://localhost:3003/signup/register", userData);
      navigate("/home");
      console.log(res.data);
    } catch (err) {
      alert(`could'nt success ${err}`);
    }
  };
  return (
    <>
      <div className="setupContainer">
        <div className="setupLeft">
          <img
            src="https://gmail.loominate.app/static/media/terms-monster.8eee51cb.png"
            alt=""
          />
        </div>

        <div className="setupRight">
          <div className="setupRightContainer">
            <div className="indicatorBtn">
              <button className="setUpunactive"></button>
              <button className="setUpactive"></button>
              <button className="setUpunactive"></button>
              <button className="setUpunactive"></button>
            </div>
            <div className="setupRightWrapper">
              <h3>SetUp Your Profile</h3>

              <div className="usernameContainer">
                <label>Create or generate Username</label>
                <div className="generateIcon">
                  <input
                    placeholder="Create a pseudonym"
                    onChange={(e) => handleValidate(e)}
                  />

                  <button type="button">
                    <SyncIcon />
                  </button>
                </div>
              </div>
              {error ? (
                <p className="setupUsernameWarnred">
                  Invalid username must be more than 5 character
                </p>
              ) : (
                <p className="setupUsernameWarngreen">Username Available </p>
              )}
              <div className="passwordContainer">
                <label>Password</label>
                <div className="passInputContainer">
                  <input
                    placeholder="****"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button>
                    <VisibilityIcon />
                  </button>
                </div>
              </div>
            </div>
            <br />
            <p>Choose an avatar</p>
            <div className="avatarContainer">
              {img.map((imgSrc) => {
                return (
                  <div className="avatarItem">
                    <label htmlFor="">
                      <img src={imgSrc} alt="avatar" />
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="setupBtnContainer">
              <div className="setupLeftBtn">
                <button onClick={() => navigate("/otp")}>
                  <ArrowBackIcon />
                </button>
              </div>
              <div className="setupCenterBtn">
                <button onClick={handleSubmit}>CREATE ACCOUNT</button>
              </div>
            </div>

            <div className="termCondtion">
              <p>
                By Continuing, you agree to our <a>Terms of Service</a> and{" "}
                <a>Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetUp;

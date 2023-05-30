import "./login.css";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { useState } from "react";
import SafModal from "../../components/Modal/SafModal";
import OnlModal from "../../components/Modal/OnlModal";
import CoModal from "../../components/Modal/CoModal";

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const handleModal = () => {
    setOpenModal(true);
  };
  const handleModal1 = () => {
    setOpenModal1(true);
  };
  const handleModal2 = () => {
    setOpenModal2(true);
  };
  const handleOpen = (cnd) => {
    if (cnd == "signIn") {
      setIsOpen(true);
    } else if (cnd == "signUp") {
      setIsOpen(false);
    }
  };
  return (
    <>
      <div className="loginContainer">
        <div className="logo">
          <div className="heading">
            <img
              src="https://soombo.loominate.app/static/media/logo.3c66c684.svg"
              alt="Loominate"
            />
            <p className="descPara">Your Workplace Community!</p>
          </div>
          <div className="imgContainer">
            <img
              src="https://soombo.loominate.app/static/media/new3monsters.afd23f01.png"
              alt="miniacImg"
            />
          </div>
        </div>
        <div className="formContainer">
          <div className="cardWrapper">
            <div className="formNav">
              <button
                className={isOpen ? "signInBtn" : "unactive"}
                onClick={() => handleOpen("signIn")}
              >
                SIGN IN
              </button>
              <button
                className={isOpen ? "unactive" : "signUpBtn"}
                onClick={() => handleOpen("signUp")}
              >
                SIGN UP
              </button>
            </div>
          </div>
          {isOpen ? (
            <SignIn />
          ) : (
            <SignUp
              handleModal={setOpenModal}
              handleModal1={setOpenModal1}
              handleModal2={setOpenModal2}
            />
          )}
        </div>
        {openModal2 && <CoModal setOpenModal2={setOpenModal2} />}
        {openModal1 && <OnlModal setOpenModal1={setOpenModal1} />}
        {openModal && <SafModal setOpenModal={setOpenModal} />}
      </div>
    </>
  );
};

export default Login;

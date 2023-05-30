import Feed from "../../components/Feed/Feed";
import LeftBar from "../../components/LeftBar/LeftBar";
import Rightbar from "../../components/RightBar/Rightbar";
import Topbar from "../../components/Topbar/Topbar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homePageContainer">
        <LeftBar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;

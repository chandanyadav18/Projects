import { SearchOutlined } from "@ant-design/icons";
import "./topbar.css";

const Topbar = () => {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <a href="#">
            <img
              className="loominate"
              src="https://soombo.loominate.app/static/media/logo.3c66c684.svg"
              alt="logoname"
            />
          </a>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <input
              placeholder="Search any thing in feed..."
              className="searchInput"
            />
            <SearchOutlined className="searchIcon" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarItems">
            <div className="topbarIcon">
              <a>
                <img
                  src="https://soombo.loominate.app/static/media/Message.52172867.svg"
                  alt="msg"
                />
              </a>
            </div>
            <div className="topbarIcon">
              <a>
                <img
                  src="https://soombo.loominate.app/static/media/Notification.3f85f7ce.svg"
                  alt="notification"
                />
              </a>
            </div>
            <div className="topbarIcon">
              <a>
                <img
                  className="avtar"
                  src="https://soombo.loominate.app/static/media/avatar9.740e86ee.png"
                  alt="avatar"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;

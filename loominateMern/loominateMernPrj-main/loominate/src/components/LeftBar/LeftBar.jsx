import "./leftbar.css";
import { UilEstate, UilAnalytics, UilUser } from "@iconscout/react-unicons";
import { categories } from "../../links/dataArray";

const LeftBar = () => {
  let feedData = [
    {
      icon: <UilEstate style={{ marginLeft: "13px" }} />,
      title: "MY FEED",
    },
    {
      icon: <UilAnalytics style={{ marginLeft: "13px" }} />,
      title: "LEADERBOARD",
    },
    {
      icon: <UilUser style={{ marginLeft: "13px" }} />,
      title: "MY PROFILE",
    },
  ];
  return (
    <div className="leftBarContainer">
      <div className="leftMenu">
        <ul>
          {feedData.map((data) => (
            <li>
              <a>
                <div className="leftMenuItem">
                  {data.icon}
                  <span>{data.title}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="leftCategory">
        <h5>CATEGORIES</h5>
        <div className="leftListItems">
          {categories.map((data) => (
            <button>{data}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

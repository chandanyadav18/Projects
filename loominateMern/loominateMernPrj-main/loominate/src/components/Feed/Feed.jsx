import {
  PlusCircleOutlined,
  DownOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "./feed.css";

const Feed = () => {
  const btnList = ["All", "Polls", "Initiatives"];
  const items = [
    {
      label: (
        <a href="https://www.antgroup.com" style={{ textDecoration: "none" }}>
          Recent
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a href="https://www.aliyun.com" style={{ textDecoration: "none" }}>
          Most Liked
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a href="https://www.aliyun.com" style={{ textDecoration: "none" }}>
          Most Disliked
        </a>
      ),
      key: "2",
    },
  ];
  return (
    <div className="feedContainer">
      <div className="inputFeedContainer">
        <div className="inputFeed">
          <div className="inputInnerFeed">
            <span>Post Something...</span>
            <div className="plusIcon">
              <PlusCircleOutlined
                style={{ fontSize: "30px", color: "rgb(3, 197, 204)" }}
              />
            </div>
          </div>
        </div>
        <div className="feedBtnContainer">
          <div className="feedLeftBtn">
            <ul>
              {btnList.map((ele) => {
                return (
                  <a>
                    <li>
                      <div className="btnList">{ele}</div>
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
          <div className="feedRecentBtn">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a
                onClick={(e) => e.preventDefault()}
                style={{ textDecoration: "none" }}
              >
                <Space>
                  Recent
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="feedCardContainer">
        <div className="feedCardHead">
          <div className="feedCardHeadBody">
            <div className="careerAdvice">
              <div className="career">
                <span>Career Advice</span>
              </div>

              <MoreOutlined
                style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
              />
            </div>
            <h3>sas</h3>
            <h3>ssas</h3>
          </div>
        </div>
        <div className="feedCardBody">
          <div className="feedCard">
            <div className="feedCard1">
              <h4>Business Impact</h4>
              <p>sasa</p>
            </div>
            <div className="feedCard2">
              <span>For</span>
              <div className="percentDiv">
                <label htmlFor="">0.00%</label>
                <label htmlFor="">100.00%</label>
              </div>
              <span>AGAINST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;

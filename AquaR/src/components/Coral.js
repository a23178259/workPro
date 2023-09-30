import React from "react";
import "../style/sea.css";
import "../style/coral.css";

const Coral = () => {
  return (
    <div>
      <h1 id="sea">探索珊瑚世界</h1>
      <div className="wrap animate pop">
        <div className="overlay">
          <div className="image-content animate slide delay-5"></div>
        </div>
        <div className="seatext">
          <p> 發現珊瑚之美：水中寶石</p>
          <p>
            <img
              className="inset"
              src="https://i.imgur.com/6pM3I8r.gif"
              alt=""
            />
            <br />
            親愛的海洋探險家：
            <br />
            【發現珊瑚之美：水中鑽石】展覽即將來臨，探索珊瑚世界是一個獨一無二的展覽，
            將帶您深入探索，大海中這些多樣化的珊瑚。
          </p>
          <br />
          <br />
          <p>
            <box-icon name="group" type="solid" color="#d63e54"></box-icon>
            &nbsp;
            <strong className="seatextone">展覽亮點：</strong>
          </p>
          <div>
            <ol>
              <li>
                珊瑚生態系統的奧祕：
                了解珊瑚是如何與其他海洋生物互動，以及它們在維護海洋生態平衡中的關鍵作用。
              </li>
              <li>
                互動體驗：
                展覽中將有多個互動站點，讓您深入瞭解珊瑚的生活方式、生長和生存挑戰。
                您可以親身體驗模擬潛水，彷彿置身於真實的珊瑚世界。
              </li>
              <li>
                環保意識提升：
                展覽將強調珊瑚保護的重要性，教育我們如何保護這一脆弱的海洋生態系統。
              </li>
              <li>
                珊瑚花園：
                在展覽中將展示來自世界各地的珊瑚，它們以各種色彩和形狀綻放。
              </li>
            </ol>
          </div>
          <br />
          <p>
            <box-icon
              name="check-square"
              type="solid"
              color="#cead38"
            ></box-icon>
            &nbsp;
            <strong className="seatextwo">展覽詳情：</strong>
          </p>
          <div>
            <ul>
              <li>展覽日期：112年07月31至09月28日</li>
              <li>開展時間：星期一至星期六，上午10:00~12:00</li>
              <li>休展時間：星期日</li>
              <li>地點：AquaR探索中心展示館</li>
              <li>費用：入場費150元</li>
            </ul>
          </div>
          <br />
          <p>
            <box-icon
              name="message-rounded"
              type="solid"
              color="#3EA0D6"
            ></box-icon>
            &nbsp;
            <strong>
              爲了維護展覽品質，每日遊客數量有限，請提前向1樓櫃台客服索取報名表。
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coral;

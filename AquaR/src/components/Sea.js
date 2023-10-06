import React from "react";
import "../style/sea.css";

const Sea = () => {
  return (
    <div className="bgimg">
      <h1 id="sea">海洋生態講座</h1>
      <div className="wrap animate pop">
        <div className="overlay">
          <div className="image-content animate slide delay-5"></div>
        </div>
        <div className="seatext">
          <p> 海洋生態講座：探索大海的奧祕！ </p>
          <img className="inset" src="https://i.imgur.com/NjV1JXP.gif" alt="" />
          <p id="texttone">
            親愛的海洋探險家：
            <br />
            【海洋生態講座：探索大海的奧祕】即將舉行！
            無論您是資深的海洋學家，還是對海洋感興趣的潛水員，都歡迎您的參與~
          </p>
          <br />
          <p>
            <box-icon name="group" type="solid" color="#d63e54"></box-icon>
            &nbsp;
            <strong className="seatextone">講座亮點：</strong>
          </p>
          <div>
            <ol>
              <li>
                海洋生態學：
                我們邀請了一些海洋學界的生態專家，他們將分享關於大海生態系統、珊瑚礁、海龜，以及對珍稀海洋生物的獨特見解。
              </li>
              <li>
                生物多樣性保護：
                了解海洋環境保育專家努力保護和維護脆弱的海洋生態系統，以及您可以爲海洋生態做出的貢獻。
              </li>
              <li>
                虛擬探險：
                通過引人入勝的虛擬實境體驗，您將有機會彷彿置身於大海深處，近距離觀察海洋生物的美麗和多樣性。
              </li>
              <li>
                互動環節 - 有獎徵答：
                參與我們的互動環節，透過有獎徵答與其他海洋愛好者分享您對海洋生態的見解，即可獲得海生館的精美禮品。
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
            <strong className="seatextwo">活動詳情：</strong>
          </p>
          <div>
            <ul>
              <li>日期：112年5月29日</li>
              <li>時間：下午14:00~16:30</li>
              <li>地點：AquaR探索中心劇場</li>
              <li>費用：免費入場</li>
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
              因座位數量有限，請提前與1樓櫃台客服領取報名表，並依照客服給的憑證入場。
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sea;

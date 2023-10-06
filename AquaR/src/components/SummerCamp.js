import React from "react";
import "../style/sea.css";

const SummerCamp = () => {
  return (
    <div className="bgimg">
      <h1 id="sea">兒童冬令營現正報名中</h1>
      <div className="wrap animate pop">
        <div className="overlay">
          <div className="image-content animate slide delay-5"></div>
        </div>
        <div className="seatext">
          <p> 海洋冒險兒童冬令營</p>
          <p>
            <img
              className="inset"
              src="https://i.postimg.cc/jjJbdqXR/image.webp"
              alt=""
            />
            親愛的海洋探險家：
            <br />
            寒冷的季節即將來臨，我們正準備一場充滿趣味且具有教育性的海洋冒險冬令營！
            這個冬天，讓我們帶您的孩子進入海洋的神奇世界，讓他們度過難忘的假期。
          </p>
          <p>
            <box-icon name="group" type="solid" color="#d63e54"></box-icon>
            &nbsp;
            <strong className="seatextone">冬令營亮點：</strong>
          </p>
          <div>
            <ol>
              <li>
                海洋生物探索：
                孩子們將有機會近距離接觸各種各樣的海洋生物，包括可愛的海豚、友好的海獺和神祕的珊瑚。
              </li>
              <li>
                海洋科學工作坊：
                我們的專業海洋生物學家將帶領孩子們進行有趣的科學實驗，教他們了解海洋生態系統的奧祕。
              </li>
              <li>
                戶外探險：
                我們將組織戶外活動，包括海灘清理、浮潛和賞鳥等，讓孩子們更深入地了解大自然。
              </li>
              <li>
                生態教育：透過遊戲和活動，我們將介紹北極地區的生態系統，讓參與的孩子能更深入了解寒冷地區的生物。
              </li>
            </ol>
          </div>
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
              <li>日期：113年01月29日 ~ 113年02月02日，共5天4夜</li>
              <li>時間：113年01月29日上午08:30至1樓櫃台完成報到手續</li>
              <li>地點：AquaR海生館</li>
              <li>費用：冬令營全程費用：$500（包括活動、材料和午餐）</li>
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
              門票現已開始預售，因票券數量有限，建議提前購票以確保您的參觀權益。
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummerCamp;

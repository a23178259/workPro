import React from "react";
import "../style/sea.css";
const Star = () => {
  return (
    <div className="bgimg">
      <h1 id="sea">夜間觀賞</h1>
      <div className="wrap animate pop">
        <div className="overlay">
          <div className="image-content animate slide delay-5"></div>
        </div>
        <div className="seatext">
          <p>
            星海奇遇：星空下的
            <br />
            海洋奇觀
          </p>
          <img
            className="inset"
            src="https://i.postimg.cc/ZRzHNysq/image.gif"
            alt=""
          />
          <p>
            親愛的海洋探險家：
            <br />
            我們將舉辦一場特別的夜間觀賞活動。
            在星空下與家人和朋友一起，來體驗壯觀的海洋生物世界。
          </p>
          <br />
          <p>
            <box-icon name="group" type="solid" color="#d63e54"></box-icon>
            &nbsp;
            <strong className="seatextone">活動亮點：</strong>
          </p>
          <div>
            <ol>
              <li>
                夜間海生館遊覽：
                漫步在幽暗的海生館，您將看到許多平日難以見到的生物，它們在夜晚展示出不同尋常的行爲。
              </li>
              <li>
                星空觀賞：在室外露天區，有專業的天文學家解說星座，
                我們將提供高品質的天文望遠鏡，在露天區海洋生物的陪伴下讓您觀賞漫天行星。
              </li>
              <li>
                知識分享：
                我們將有專業的生態學家和導遊陪伴您，爲您解釋夜間生物的習性和生活方式。
                這將是一次有趣和教育性的經歷。
              </li>
              <li>
                美味食物：夜間將會提供多種以有機食材做成海洋生物造型的食物，以及雞尾酒和其他飲品供您選擇，讓您在欣賞海洋生物的同時能品味美食。
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
              <li>日期：112年08月12日</li>
              <li>時間：晚間20:00至晚間23:00</li>
              <li>
                地點：AquaR三大場館及露天區〈台灣水域館、豚鯨水域館、世界水域館〉
              </li>
              <li>費用：預購票為350元，票券限量500張</li>
            </ul>
          </div>
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

export default Star;

import React from "react";
import "../style/sea.css";

const Seal = () => {
  return (
    <div>
      <h1 id="sea">海豹幼崽的誕生</h1>
      <div className="wrap animate pop" id="wrap">
        <div className="overlay">
          <div className="image-content animate slide delay-5"></div>
        </div>
        <div className="seatext">
          <p>探秘海洋奇蹟：海豹幼崽的誕生</p>
          <p>
            <img
              className="inset"
              src="https://i.imgur.com/oydS6Fw.gif"
              alt=""
            />
            親愛的海洋探險家：
            <br />
            紀錄片【探秘海洋奇蹟：海豹幼崽的誕生】即將迎來首映！
            這部紀錄片將帶領您進入北極圈深處，親眼目睹海豹幼崽在嚴酷的冰雪環境中成長的壯麗旅程。
          </p>
          <p>
            <box-icon name="group" type="solid" color="#d63e54"></box-icon>
            &nbsp;
            <strong className="seatextone">紀錄片亮點：</strong>
          </p>
          <div>
            <ol>
              <li>
                海洋奇蹟：見證海豹幼崽在最初的幾周內，是如何依靠母親的關愛和保護，逐漸長大並應對極端的生存。
              </li>
              <li>
                珍稀視角：透過引人入勝的水下鏡頭，您將深入了解海豹家族的日常。
              </li>
              <li>
                曾經的瞬間：在北極寒冷的海冰上，您將親身體驗到海豹媽媽們如何保護幼崽不惜一切。
              </li>
              <li>
                保護海洋生態：
                了解如何保護北極地區的海洋生態系統，以及每個人如何參與到這一個重要的環節中。
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
            <strong className="seatextwo">播映詳情：</strong>
          </p>
          <div>
            <ul>
              <li>日期：112年07月07日、14日、21日、28日</li>
              <li>時間：下午13:00~14:30</li>
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
export default Seal;

import React from "react";
import "../style/sea.css";
const Dolphin = () => {
  return (
    <div className="bgimg">
      <h1 id="sea" className="large-screen-title">
        重要通知：海豚秀時間更新
      </h1>
      <pre id="sea" className="small-screen-title">
        重要通知：
        <br />
        海豚表演秀時間更新
      </pre>

      <div className="wrap animate pop">
        <div className="overlay">
          <div className="image-content animate slide delay-5"></div>
        </div>
        <div className="seatext">
          <p>海豚表演秀時間更新</p>
          <p>
            <img
              className="inset"
              src="https://i.postimg.cc/ZRzHNysq/image.gif"
              alt=""
            />
            親愛的海洋探險家：
            <br />
            為了提供探險家們極佳的觀賞效果，海豚秀時間表即將進行更新
            ，為了讓您的遊覽更加順利，請注意以下時間表。
          </p>
          <br />
          <p>
            爲什麼有這個變更？
            <br />
            <br />
            我們一直致力於提供最高水準的動物福祉，並確保我們的海豚在表演期間能夠獲得足夠的休息和娛樂時間。
            這次的時間更新將爲我們的海豚朋友提供更多休息時間，以確保它們保持活力和健康。
            更新的時間將在下個月開始實施，屆時活動專區也會即時更新。
          </p>
          <br />
          <p>
            <box-icon name="x" color="#d63e54"></box-icon>
            &nbsp;
            <strong className="seatextone">原本時間：</strong>
          </p>
          <div>
            <ul>
              <li>日期： 每週四、六、日 </li>
              <li>
                時間：週四上午10:00~11:00、
                <br />
                週六 & 日下午16:00~17:00
              </li>
            </ul>
          </div>
          <p>
            <box-icon name="check" color="#cead38"></box-icon>
            &nbsp;
            <strong className="seatextwo">更新時間：</strong>
          </p>
          <div>
            <ul>
              <li>日期：每週五、六、日</li>
              <li>時間：時間更改皆為上午10:30 ~ 11:30</li>
            </ul>
          </div>
          <br />
          <p>
            <strong>
              ★ 請提前購票，以確保您能夠在表演時間準時觀賞 ★
              <br />
              <br />
              <box-icon name="error" type="solid" color="#3ea0d6"></box-icon>
              &nbsp; 如何購買門票？
              <br />
              您可以在我們的官網上預訂門票，在抵達目的地時至售票處現場取票。
              <br />
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dolphin;

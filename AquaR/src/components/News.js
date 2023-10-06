// 路由區塊
import React, { useState } from "react";
import { hideOtherCards } from "./addEvent.js";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// 卡片和按鈕的狀態處裡
const News = () => {
  const [cardClicked, setCardClicked] = useState(false);

  const handleCardClick = (event) => {
    hideOtherCards.call(event.currentTarget);

    // 設置卡片被點擊的狀態為 true
    setCardClicked(true);

    //
    window.scrollTo(0, 0);
  };
  // JSX
  return (
    <div className="card-container container bgimg">
      {/* 標題header - start */}
      <h1 id="new">最新消息</h1>
      {/* 標題header - end */}

      {/* Bootstrap -> flex佈局區塊1 - start */}
      <div className="row">
        <div className={`col-md-4 mb-5 ${cardClicked ? "centered-card" : ""}`}>
          {/* 1.最新消息-海洋生態講座 - start */}
          <NavLink to="/News/Sea">
            <article className="movie-card" onClick={handleCardClick}>
              <img
                className="picture"
                src="https://i.imgur.com/VmGoNLX.jpg"
                alt="Avatar wallpaper"
              />
              <div className="content">
                <span className="date">2022.05.10</span>
                <h5>海洋生態講座</h5>
                <p className="synopsis">
                  探索無盡的藍色世界，加入我們的海洋生態講座，一場啓發心靈的深度冒險。
                  在這個講座中，我們將解鎖那些令人歎為觀止的生態奧祕 …
                </p>
              </div>
            </article>
          </NavLink>
        </div>
        {/* 1.最新消息-海洋生態講座 - end */}

        {/* 2.最新消息-海豹幼崽的誕生 - start */}
        <div className={`col-md-4 mb-5 ${cardClicked ? "centered-card" : ""}`}>
          <NavLink to="/News/Seal">
            <article className="movie-card" onClick={handleCardClick}>
              <img
                className="picture"
                src="https://i.imgur.com/Jebh89X.jpg"
                alt="Avatar wallpaper"
              />
              <div className="content">
                <span className="date">2023.06.15</span>
                <h5>海豹幼崽的誕生-紀錄片</h5>
                <p className="synopsis">
                  在海生館的溫暖環境中，這名可愛的海豹幼崽於三年前來到這個世界。
                  這部紀錄片記錄了幼年海豹的成長旅程 …
                </p>
              </div>
            </article>
          </NavLink>
        </div>
        {/* 2.最新消息-海豹幼崽的誕生 - end */}

        {/* 3.最新消息-探索珊瑚世界 - start */}
        <div className={`col-md-4 mb-5 ${cardClicked ? "cardClass" : ""}`}>
          <NavLink to="/News/Coral">
            <article className="movie-card" onClick={handleCardClick}>
              <img
                className="picture"
                src="https://i.imgur.com/IZEgBbZ.jpg"
                alt="Avatar wallpaper"
              />

              <div className="content">
                <span className="date">2023.07.10</span>
                <h5>探索珊瑚世界</h5>
                <p className="synopsis">
                  海洋中隱藏著許多奧妙的生命，而珊瑚礁是這片神奇領域中最尊貴的寶石。
                  在展覽中您將欣賞到這些絢爛而美麗的珊瑚礁，以及與之共生的海洋生物
                  …
                </p>
              </div>
            </article>
          </NavLink>
        </div>
      </div>
      {/* Bootstrap -> flex佈局區塊1 - end */}
      {/* 3.最新消息-探索珊瑚世界 - end */}

      {/* Bootstrap -> flex佈局區塊2 - start */}
      <div className="row">
        {/*4.最新消息-夜間觀賞 - start */}
        <div className={`col-md-4 mb-5 ${cardClicked ? "centered-card" : ""}`}>
          <NavLink to="/News/Star">
            <article className="movie-card" onClick={handleCardClick}>
              <img
                className="picture"
                src="https://i.imgur.com/8DxAOjf.jpg"
                alt="Avatar wallpaper"
              />
              <div className="content">
                <span className="date">2023.07.25</span>
                <h5>夜間觀賞</h5>
                <p className="synopsis">
                  在這個神秘的夜晚，您將有機會近距離欣賞一些只在夜間活躍的海洋生物，
                  牠們將在星光的映照下顯現出不同尋常的美麗。這將會是一次難得的夜晚
                  …
                </p>
              </div>
            </article>
          </NavLink>
        </div>
        {/*4.最新消息-夜間觀賞 - end */}

        {/* 5.最新消息-冬令營現正報名中 - start */}
        <div className={`col-md-4 mb-5 ${cardClicked ? "centered-card" : ""}`}>
          <NavLink to="/News/SummerCamp">
            <article className="movie-card" onClick={handleCardClick}>
              <img
                className="picture"
                src="https://i.imgur.com/47sj4tc.jpg"
                alt="Avatar wallpaper"
              />
              <div className="content">
                <span className="date">2023.08.03</span>
                <h5>兒童冬令營現正報名中！</h5>
                <p className="synopsis">
                  隨著夏日的腳步逐漸臨近，我們將舉辦夏令營活動，為孩子們提供一個充滿趣味性和教育性的環境。
                  在這裡孩子們可以參與各種激勵人心的活動與實驗 …
                </p>
              </div>
            </article>
          </NavLink>
        </div>
        {/* 5.最新消息-夏令營現正報名中 - end */}

        {/* 6.最新消息-表演秀時間更新 -start */}
        <div className={`col-md-4 mb-5 ${cardClicked ? "cardClass" : ""}`}>
          <NavLink to="/News/Dolphin">
            <article className="movie-card" onClick={handleCardClick}>
              <img
                className="picture"
                src="https://i.imgur.com/vWLjBAx.jpg"
                alt="Avatar wallpaper"
              />
              <div className="content">
                <span className="date">2023.09.01</span>
                <h5>重要通知：海豚秀時間表更新！</h5>
                <p className="synopsis">
                  親愛的遊客，關於我們的海豚秀的表演，
                  為了提供更好的觀賞體驗，確保可愛的海豚在優質條件下表演，我們決定更新表演時間
                  …
                </p>
              </div>
            </article>
          </NavLink>
        </div>
        {/* 6.最新消息-表演秀時間更新 - end */}
      </div>
      {/*Bootstrap -> flex佈局區塊2 - end */}
    </div>
  );
};

export default News;

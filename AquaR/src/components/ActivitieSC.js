import React from "react";
// import AOS from "aos";

function PodcastCard({ id, theme, imgSrc, title, preview, tags = [] }) {
  const paragraphs =
    typeof preview === "string"
      ? preview
          .split("\n")
          .map((paragraph, index) => <p key={index}>{paragraph}</p>)
      : null;

  return (
    <article id={`card-${id}`} className={`postcard ${theme}`}>
      <a className="postcard__img_link">
        <img className="postcard__img" src={imgSrc} alt="" />
      </a>
      <div className="postcard__text t-dark">
        <h1 className={`postcard__title ${theme}`}>
          <a>{title}</a>
        </h1>

        <div className="postcard__bar"></div>
        {/* <div className="postcard__preview-txt">
          {preview.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div> */}
        <div className="postcard__preview-txt">
          {paragraphs}
          {Array.isArray(preview)
            ? preview.map((paragraph, index) => (
                <div key={index}>{paragraph}</div>
              ))
            : null}
        </div>
        <ul className="postcard__tagbox">
          {tags.map((tag, index) => (
            <li className={`tag__item ${theme}`} key={index}>
              <a>{tag}</a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ActivitieSC() {
  const handleButtonClick = (cardId) => {
    const cardElement = document.getElementById(`card-${cardId}`);
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const jellyfish = [
    {
      theme: "dark red",
      imgSrc: "https://i.imgur.com/ufFSSZc.gif",
      title: "水母幻彩秀",
      preview: [
        <p>
          水母是一種謎樣的海洋生物，這類生物的身體通常呈半透明或透明狀，讓牠們在水中看起來非常神祕。
        </p>,
        <p>
          在水母幻彩秀這個活動中，您將欣賞到水母在不同顏色的光影下，展現出不同的美麗姿態。
        </p>,
        <p>
          還有專業的解說員，介紹水母的特徵和生存方式，讓您對水母有更多的認識。
        </p>,
        <p>★ 活動詳情及報名請洽AquaR櫃台客服 ★</p>,
        <br />,
        <p>📅 日期：每週一到週五</p>,
        <p>⏰ 時間：晚間20:00 ~ 21:00</p>,
        <br />,
      ],
      tags: ["#水母有毒", "#水母抗衰", "#水母變色"],
    },
  ];
  const penguin = [
    {
      theme: "dark blue",
      imgSrc: "https://i.imgur.com/Vc1vXXx.gif",
      title: "企鵝表演秀",
      preview: [
        <p>歡迎來到企鵝王國，一個令人陶醉的寒冷世界，這裡有可愛的企鵝～</p>,
        <p>
          在這個舞台上，您將親眼見證企鵝們的才華與活力，牠們以獨特的跳躍、滑行和翩翩起舞，表演出與生俱來的優雅與靈動
        </p>,
        <p>
          企鵝表演秀，不僅僅是一場視覺盛宴，更是一次心靈的洗禮！讓我們共同走進企鵝的童話世界，享受與自然生命的奇妙邂逅。
        </p>,
        <p>★ 活動詳情及報名請洽AquaR櫃台客服 ★</p>,
        <br />,
        <p>📅 日期：每週二、四、六</p>,
        <p>⏰ 時間</p>,
        <ul>
          <li>週二 & 四上午10:00~11:00</li>
          <li>週六下午16:00~17:00</li>
        </ul>,
        <br />,
      ],
      tags: ["#企鵝不會飛", "#比人類還專情", "#企鵝也能在淡水中生存"],
    },
  ];

  const dolphin = [
    {
      theme: "dark yellow",
      imgSrc: "https://i.imgur.com/sJ0IKGc.gif",
      title: "海豚表演秀",
      preview: [
        <p>
          海豚是一種非常聰明的動物，其智商相當於人類的6-7歲兒童，媲美犬界的邊境牧羊犬！
        </p>,
        <p>
          在這個活動期間除了觀賞表演，還可以參與互動環節、與可愛的海豚互動，拍照留念、與這些可愛生物近距離接觸的樂趣。
        </p>,
        <p>
          為了使表演秀具有豐富的教育意義，現場由專業飼育員提供趣味十足的展示與解說，使遊客更加了解海豚的習性。
        </p>,
        <p>★ 活動詳情及報名請洽AquaR櫃台客服 ★</p>,
        <br />,
        <p>📅 日期：每週五、六、日</p>,
        <p>⏰ 時間</p>,
        <ul>
          <li>週五10:00~11:00</li>
          <li>週六 & 日下午16:00~17:00</li>
        </ul>,
        <br />,
      ],
      tags: ["#瀕危物種", "#海豚界的邊牧", "#海豚屬於高智商動物"],
    },
  ];

  const seaOtter = [
    {
      theme: "dark red",
      imgSrc: "https://i.imgur.com/ntEc01E.gif",
      title: "海獺表演秀",
      preview: [
        <p>
          據說水獺的智商相當於約3歲左右的人類小孩，牠們會展現出高智商的行為以及捕食技巧，
        </p>,
        <p>
          在這場表演秀中將由專業的飼養員將與您分享有關海獺的生活習性、飲食以及牠們在海洋生態系統中的重要性。
        </p>,
        <p>
          無論您是海洋生物愛好者還是普通遊客，這場表演將帶給您一次充滿歡樂和教育性的海洋體驗。
        </p>,
        <p>★ 活動詳情及報名請洽AquaR櫃台客服 ★</p>,
        <br />,
        <p>📅 日期：每週一、三、五</p>,
        <p>⏰ 時間</p>,
        <ul>
          <li>週一、三上午10:00~11:00</li>
          <li>週五下午16:00~17:00</li>
        </ul>,
        <br />,
      ],
      tags: ["#海獺沒有脂肪層", "#海獺以工具進食", "#海獺的身上也有口袋"],
    },
  ];

  const seal = [
    {
      theme: "dark blue",
      imgSrc: "https://i.imgur.com/ujCJFv6.gif",
      title: "海豹餵食秀",
      preview: [
        <p>
          海豹是一種很有趣的動物，牠們分佈在全世界的各種海域，有些生活在寒冷的極地，有些生活在溫暖的熱帶。
        </p>,
        <p>
          牠們時而會表現出好奇和友好的性格，時而也會表現出害羞和警戒的態度。
        </p>,
        <p>
          在這場餵食秀當中，您將與海豹近距離互動，觀察牠們的動作，甚至給牠們投食，並觀賞到海豹們的特技表演。
        </p>,
        <p>
          特技表演包括翻滾、跳躍和旋轉，還有導覽員以生動情境為您解說海豹在海洋生態中扮演的角色。
        </p>,
        <p>★ 活動詳情及報名請洽AquaR櫃台客服 ★</p>,
        <br />,
        <p>📅 日期：每週一、三、日</p>,
        <p>⏰ 時間：中午11:00~12:00</p>,
        <br />,
      ],
      tags: ["#群體生活", "#耳朵很小", "#海豹海獅傻傻分不清?"],
    },
  ];

  const stay = [
    {
      theme: "dark yellow",
      imgSrc: "https://i.imgur.com/sFpa4yR.gif",
      title: "夜宿海生館",
      preview: [
        <p>
          夜宿海生館是一個讓您可以和海洋生物一起睡覺的特別體驗活動，您可以在三個不同的展館中擇一入住。
        </p>,
        <p>
          分別是台灣水域館、豚鯨水域館和世界水域館。每個展館都有不同的景色和導覽內容，讓您可以更深入地認識海洋的奧妙。
        </p>,
        <p>
          這是一個【2天1夜】的體驗活動，在夜宿海生館除了睡覺之外，還有很多精彩的活動等著您參與！
        </p>,
        <p>
          每個展示館限定入住人數為50名，活動詳情請洽AquaR櫃台客服&索取報名表～
        </p>,
        <br />,
        <p>📅 日期：每週六</p>,
        <p>⏰ 時間：下午13:00</p>,
        <p>💵 費用：NTD 2400 元/人</p>,
        <p>📝 入住當天下午13:00，請至1樓櫃台找客服完成報到手續</p>,
        <br />,
      ],
      tags: ["#餵食秀", "#夜間探索", "#海洋生態課"],
    },
  ];

  return (
    <div>
      {/* 標題 */}
      <p id="head">館內活動</p>

      {/* 按鈕群組 */}
      <div className="button-group">
        {/* 按鈕1 */}
        <a href="#image_one">
          <div>
            <button id="btnone" onClick={() => handleButtonClick(1)}>
              水母幻彩秀
            </button>
          </div>
        </a>

        {/* 按鈕2 */}
        <a href="#image_two">
          <button id="btnone" onClick={() => handleButtonClick(2)}>
            企鵝表演秀
          </button>
        </a>

        {/* 按鈕3 */}
        <a href="#image_three">
          <button id="btnone" onClick={() => handleButtonClick(3)}>
            海豚表演秀
          </button>
        </a>

        {/* 按鈕4 */}
        <a href="#image_four">
          <button id="btnone" onClick={() => handleButtonClick(4)}>
            海獺表演秀
          </button>
        </a>

        {/* 按鈕5 */}
        <a href="#image_five">
          <button id="btnone" onClick={() => handleButtonClick(5)}>
            海豹餵食秀
          </button>
        </a>

        {/* 按鈕6 */}
        <a href="#image_six">
          <button id="btnone" onClick={() => handleButtonClick(6)}>
            夜宿海生館
          </button>
        </a>
      </div>

      {/* 添加 PodcastCard */}

      {jellyfish.map((data, index) => (
        <PodcastCard
          id={index + 1}
          key={index}
          theme={data.theme}
          imgSrc={data.imgSrc}
          title={data.title}
          date={data.date}
          preview={data.preview}
          tagColor="red"
          tags={data.tags}
        />
      ))}

      {penguin.map((data, index) => (
        <PodcastCard
          id={index + 2}
          key={index}
          theme={data.theme}
          imgSrc={data.imgSrc}
          title={data.title}
          date={data.date}
          preview={data.preview}
          tagColor="blue"
          tags={data.tags}
        />
      ))}

      {dolphin.map((data, index) => (
        <PodcastCard
          id={index + 3}
          key={index}
          theme={data.theme}
          imgSrc={data.imgSrc}
          title={data.title}
          date={data.date}
          preview={data.preview}
          tagColor="yellow"
          tags={data.tags}
        />
      ))}

      {seaOtter.map((data, index) => (
        <PodcastCard
          id={index + 4}
          key={index}
          theme={data.theme}
          imgSrc={data.imgSrc}
          title={data.title}
          date={data.date}
          preview={data.preview}
          tagColor="red"
          tags={data.tags}
        />
      ))}

      {seal.map((data, index) => (
        <PodcastCard
          id={index + 5}
          key={index}
          theme={data.theme}
          imgSrc={data.imgSrc}
          title={data.title}
          date={data.date}
          preview={data.preview}
          tagColor="blue"
          tags={data.tags}
        />
      ))}

      {stay.map((data, index) => (
        <PodcastCard
          id={index + 6}
          key={index}
          theme={data.theme}
          imgSrc={data.imgSrc}
          title={data.title}
          date={data.date}
          preview={data.preview}
          tagColor="yellow"
          tags={data.tags}
        />
      ))}
    </div>
  );
}

export default ActivitieSC;

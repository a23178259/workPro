// 狀態監聽JS

// 點擊卡片，即隱藏其餘卡片
export function hideOtherCards() {
  const cards = document.querySelectorAll(".movie-card");
  cards.forEach((card) => {
    if (card !== this) {
      card.style.display = "none";
    }
  });
}

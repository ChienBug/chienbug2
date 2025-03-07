const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Hàm di chuyển nút "No" đến vị trí ngẫu nhiên
function moveNoButton() {
  const newX = Math.floor(Math.random() * (questionContainer.offsetWidth - noBtn.offsetWidth));
  const newY = Math.floor(Math.random() * (questionContainer.offsetHeight - noBtn.offsetHeight));

  noBtn.style.position = "absolute"; // Đảm bảo nút có thể di chuyển
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// Sự kiện di chuột trên máy tính
noBtn.addEventListener("mouseover", moveNoButton);

// Sự kiện chạm trên điện thoại
noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault(); // Ngăn hành vi mặc định
  moveNoButton();
});

// Xử lý khi bấm "Yes"
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.classList.add("show");
    console.log(gifResult);
    gifResult?.play();
  }, 3000);
});

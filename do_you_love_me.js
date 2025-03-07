const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Hàm di chuyển nút "No" đến vị trí ngẫu nhiên nhưng không bị tràn ra ngoài màn hình
function moveNoButton() {
    const maxX = questionContainer.clientWidth - noBtn.clientWidth;
    const maxY = questionContainer.clientHeight - noBtn.clientHeight;
    const newX = Math.max(0, Math.floor(Math.random() * maxX));
    const newY = Math.max(0, Math.floor(Math.random() * maxY));

    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

// Sự kiện di chuột trên PC
noBtn.addEventListener("mouseover", moveNoButton);

// Sự kiện chạm trên điện thoại
noBtn.addEventListener("touchstart", (event) => {
    event.preventDefault();
    moveNoButton();
});

// Xử lý khi bấm "Yes"
yesBtn.addEventListener("click", () => {
    questionContainer.style.display = "none";
    heartLoader.style.display = "flex"; // Hiện trái tim khi bấm Yes

    setTimeout(() => {
        heartLoader.style.display = "none"; // Ẩn trái tim sau 3s
        resultContainer.style.display = "flex"; // Hiện kết quả
        gifResult?.play();
    }, 3000);
});

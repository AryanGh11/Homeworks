const homeBtn = document.querySelector(".home-btn");
const pdfBtn = document.querySelector(".pdf-btn");
const weeklyBtn = document.querySelector(".weekly-btn");
const currentDate = new Date();
const currentYear = currentDate.getFullYear() - 622;
const currentMonth = currentDate.getMonth() + 11;
const currentDay = currentDate.getDate() - 20;
const currentDayOfWeek = currentDate.getDay();
const dayList = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];

document.querySelector(".current-date").innerHTML = currentYear + "/" + currentMonth + "/" + currentDay;
document.querySelector(".current-day").innerHTML = dayList[currentDayOfWeek];

homeBtn.addEventListener("click", () => {
    window.location = "./index.html"
})
weeklyBtn.addEventListener("click", () => {
    window.location = "./weekly.html"
})

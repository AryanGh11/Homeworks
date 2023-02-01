const currentDate = new Date();
const currentYear = currentDate.getFullYear() - 622;
const currentMonth = currentDate.getMonth() + 10;
const currentDay = currentDate.getDate() + 11;
const currentDayOfWeek = currentDate.getDay();
const dayList = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];
const tomorrowLessons = document.querySelector(".lessons-list");
const saturday = ["ورزش", "هندسه", "زبان"];
const sunday = ["دینی", "گسسته", "حسابان"];
const monday = ["فیزیک", "فارسی", "زبان", "فیزیک"];
const tuesday = ["نگارش", "عربی", "شیمی"];
const wednesday = ["هویت اجتماعی", "سلامت و بهداشت", "شیمی"];
const satRemover = saturday.join(" و ");
const sunRemover = sunday.join(" و ");
const monRemover = monday.join(" و ");
const tueRemover = tuesday.join(" و ");
const wedRemover = wednesday.join(" و ");
const homeBtn = document.querySelector(".home-btn");
const weeklyBtn = document.querySelector(".weekly-btn");
const pdfBtn = document.querySelector(".pdf-btn");

document.querySelector(".current-date").innerHTML = currentYear + "/" + currentMonth + "/" + currentDay;
document.querySelector(".current-day").innerHTML = dayList[currentDayOfWeek];

// if(currentDayOfWeek === 0) {
//     tomorrowLessons.innerHTML = monRemover;
// };
// if(currentDayOfWeek === 1) {
//     tomorrowLessons.innerHTML = tueRemover;
// };
// if(currentDayOfWeek === 2) {
//     tomorrowLessons.innerHTML = wedRemover;
// };
// if(currentDayOfWeek === 3) {
//     tomorrowLessons.innerHTML = satRemover;
// };
// if(currentDayOfWeek === 6) {
//     tomorrowLessons.innerHTML = sunRemover;
// };

weeklyBtn.addEventListener("click", () => {
    window.location = "./weekly.html"
})
pdfBtn.addEventListener("click", () => {
    window.location = "./pdf.html"
})

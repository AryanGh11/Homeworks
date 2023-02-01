const currentDate = new Date();
const currentYear = currentDate.getFullYear() - 622;
const currentMonth = currentDate.getMonth() + 10;
const currentDay = currentDate.getDate() + 11;
const currentDayOfWeek = currentDate.getDay();
const dayList = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];
const homeBtn = document.querySelector(".home-btn");
const weeklyBtn = document.querySelector(".weekly-btn");
const pdfBtn = document.querySelector(".pdf-btn");
const saturdayHomework = document.querySelector(".homework1");
const sundayHomework = document.querySelector(".homework2");
const mondayHomework = document.querySelector(".homework3");
const tuesdayHomework = document.querySelector(".homework4");
const wednesdayHomework = document.querySelector(".homework5");
const saturdayLesson = document.querySelector(".lesson1");
const sundayLesson = document.querySelector(".lesson2");
const mondayLesson = document.querySelector(".lesson3");
const tuesdayLesson = document.querySelector(".lesson4");
const wednesdayLesson = document.querySelector(".lesson5");
const saturdayHomework1 = document.querySelector(".saturday-homework1");
const saturdayHomework2 = document.querySelector(".saturday-homework2");
const saturdayHomework3 = document.querySelector(".saturday-homework3");
const sundayHomework1 = document.querySelector(".sunday-homework1");
const sundayHomework2 = document.querySelector(".sunday-homework2");
const sundayHomework3 = document.querySelector(".sunday-homework3");
const mondayHomework1 = document.querySelector(".monday-homework1");
const mondayHomework2 = document.querySelector(".monday-homework2");
const mondayHomework3 = document.querySelector(".monday-homework3");
const tuesdayHomework1 = document.querySelector(".tuesday-homework1");
const tuesdayHomework2 = document.querySelector(".tuesday-homework2");
const tuesdayHomework3 = document.querySelector(".tuesday-homework3");
const wednesdayHomework1 = document.querySelector(".wednesday-homework1");
const wednesdayHomework2 = document.querySelector(".wednesday-homework2");
const wednesdayHomework3 = document.querySelector(".wednesday-homework3");

saturdayHomework1.innerHTML = "تکلیفی نداریم!";
saturdayHomework2.innerHTML = "";
saturdayHomework3.innerHTML = "";

sundayHomework1.innerHTML = "تکالیف";
sundayHomework2.innerHTML = "تکالیف";
sundayHomework3.innerHTML = "تکالیف";

mondayHomework1.innerHTML = "تکالیف";
mondayHomework2.innerHTML = "تکالیف";
mondayHomework3.innerHTML = "تکالیف";

tuesdayHomework1.innerHTML = "تکالیف";
tuesdayHomework2.innerHTML = "تکالیف";
tuesdayHomework3.innerHTML = "تکالیف";

wednesdayHomework1.innerHTML = "تکالیف";
wednesdayHomework2.innerHTML = "تکالیف";
wednesdayHomework3.innerHTML = "تکالیف";

document.querySelector(".current-date").innerHTML = currentYear + "/" + currentMonth + "/" + currentDay;
document.querySelector(".current-day").innerHTML = dayList[currentDayOfWeek];

weeklyBtn.addEventListener("click", () => {
    window.location = "./weekly.html"
})
pdfBtn.addEventListener("click", () => {
    window.location = "./pdf.html"
})

if(currentDayOfWeek === 0) {
    mondayHomework.style.order = "-1";
    tuesdayHomework.style.order = "-1";
    wednesdayHomework.style.order = "-1";
    wednesdayHomework.style.marginRight = ".75rem";
    sundayHomework.style.marginRight = "0";
    document.querySelector(".day-homework3").innerHTML = "(فردا)";

    mondayLesson.style.order = "-1";
    tuesdayLesson.style.order = "-1";
    wednesdayLesson.style.order = "-1";
    wednesdayLesson.style.marginRight = ".75rem";
    sundayLesson.style.marginRight = "0";
    document.querySelector(".day-lesson3").innerHTML = "(فردا)";
}
if(currentDayOfWeek === 1) {
    tuesdayHomework.style.order = "-1";
    wednesdayHomework.style.order = "-1";
    wednesdayHomework.style.marginRight = ".75rem";
    sundayHomework.style.marginRight = ".75rem";
    mondayHomework.style.marginRight = "0";
    document.querySelector(".day-homework4").innerHTML = "(فردا)";

    tuesdayLesson.style.order = "-1";
    wednesdayLesson.style.order = "-1";
    wednesdayLesson.style.marginRight = ".75rem";
    sundayLesson.style.marginRight = ".75rem";
    mondayLesson.style.marginRight = "0";
    document.querySelector(".day-lesson4").innerHTML = "(فردا)";
}
if(currentDayOfWeek === 2) {
    wednesdayHomework.style.order = "-1";
    wednesdayHomework.style.marginRight = ".75rem";
    mondayHomework.style.marginRight = ".75rem";
    tuesdayHomework.style.marginRight = "0";
    document.querySelector(".day-homework5").innerHTML = "(فردا)";

    wednesdayLesson.style.order = "-1";
    wednesdayLesson.style.marginRight = ".75rem";
    mondayLesson.style.marginRight = ".75rem";
    tuesdayLesson.style.marginRight = "0";
    document.querySelector(".day-lesson5").innerHTML = "(فردا)";
}
if(currentDayOfWeek === 6) {
    sundayHomework.style.order = "-1";
    mondayHomework.style.order = "-1";
    tuesdayHomework.style.order = "-1";
    wednesdayHomework.style.order = "-1";
    wednesdayHomework.style.marginRight = ".75rem";
    saturdayHomework.style.marginRight = "0";
    document.querySelector(".day-homework2").innerHTML = "(فردا)";

    sundayLesson.style.order = "-1";
    mondayLesson.style.order = "-1";
    tuesdayLesson.style.order = "-1";
    wednesdayLesson.style.order = "-1";
    wednesdayLesson.style.marginRight = ".75rem";
    saturdayLesson.style.marginRight = "0";
    document.querySelector(".day-lesson2").innerHTML = "(فردا)";
}
const loginName = document.querySelector(".name");
const loginPassword = document.querySelector(".password");
const loginBtn = document.querySelector(".login-btn");
loginBtn.addEventListener("click", () => {
    const nameValue = loginName.value;
    const passwordValue = loginPassword.value;
    if(nameValue === "aryan" && passwordValue === "123") {
        document.querySelector(".login-page").style.display = "none";
        localStorage.setItem("remover", remover());
    }
    localStorage.setItem("name", nameValue);
    const checker = true;
    checker();
    getItem();
})
function getItem() {
    const aryan = localStorage.getItem("name");
    document.querySelector(".we-class").innerHTML = aryan;
}
function remover() {
    document.querySelector(".login-page").style.display = "none";
}
function checker() {
    localStorage.getItem("remover");
}
window.addEventListener("load", () => {
    localStorage.getItem("remover");
})





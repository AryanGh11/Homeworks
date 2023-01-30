const homeBtn = document.querySelector(".home-btn");
const pdfBtn = document.querySelector(".pdf-btn");
const weeklyBtn = document.querySelector(".weekly-btn");
const currentDate = new Date();
const currentYear = currentDate.getFullYear() - 622;
const currentMonth = currentDate.getMonth() + 11;
const currentDay = currentDate.getDate() - 20;
const currentDayOfWeek = currentDate.getDay();
const dayList = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];
const body = document.querySelector(".body");
const blur = document.querySelector(".blur-please");
const content = document.querySelector(".content");
const homeworkBtn1 = document.querySelector(".homework-btn1");
const homeworkBtn2 = document.querySelector(".homework-btn2");
const homeworkBtn3 = document.querySelector(".homework-btn3");
const homeworkBtn4 = document.querySelector(".homework-btn4");
const homeworkBtn5 = document.querySelector(".homework-btn5");

document.querySelector(".current-date").innerHTML = currentYear + "/" + currentMonth + "/" + currentDay;
document.querySelector(".current-day").innerHTML = dayList[currentDayOfWeek];

homeBtn.addEventListener("click", () => {
    window.location = "./index.html"
})
pdfBtn.addEventListener("click", () => {
    window.location = "./pdf.html"
})
homeworkBtn1.addEventListener("click", () => {
    blur.style.filter = "blur(2px)";
    content.style.filter = "blur(2px)";
    
    const homework = document.createElement("div");
    body.appendChild(homework);
    homework.classList.add("homework");

    const homeworkContent = document.createElement("p");
    const homeworkContentText = document.createTextNode("در این روز تکلیفی نداریم");
    homeworkContent.appendChild(homeworkContentText);
    homework.appendChild(homeworkContent);
    homeworkContent.classList.add("homework-content");

    const closeBtn = document.createElement("button");
    const closeBtnText = document.createTextNode("اوکی");
    closeBtn.appendChild(closeBtnText);
    homework.appendChild(closeBtn);
    closeBtn.classList.add("close-btn");
    closeBtn.addEventListener("click", () => {
        homework.style.display = "none";
        blur.style.filter = "blur(0)";
        content.style.filter = "blur(0)";    
    })
})
homeworkBtn2.addEventListener("click", () => {
    blur.style.filter = "blur(2px)";
    content.style.filter = "blur(2px)";
    
    const homework = document.createElement("div");
    body.appendChild(homework);
    homework.classList.add("homework");

    const homeworkContent = document.createElement("p");
    const homeworkContentText = document.createTextNode("در این روز تکلیفی نداریم");
    homeworkContent.appendChild(homeworkContentText);
    homework.appendChild(homeworkContent);
    homeworkContent.classList.add("homework-content");

    const closeBtn = document.createElement("button");
    const closeBtnText = document.createTextNode("اوکی");
    closeBtn.appendChild(closeBtnText);
    homework.appendChild(closeBtn);
    closeBtn.classList.add("close-btn");
    closeBtn.addEventListener("click", () => {
        homework.style.display = "none";
        blur.style.filter = "blur(0)";
        content.style.filter = "blur(0)";    
    })
})
homeworkBtn3.addEventListener("click", () => {
    blur.style.filter = "blur(2px)";
    content.style.filter = "blur(2px)";
    
    const homework = document.createElement("div");
    body.appendChild(homework);
    homework.classList.add("homework");

    const homeworkContent = document.createElement("p");
    const homeworkContentText = document.createTextNode("در این روز تکلیفی نداریم");
    homeworkContent.appendChild(homeworkContentText);
    homework.appendChild(homeworkContent);
    homeworkContent.classList.add("homework-content");

    const closeBtn = document.createElement("button");
    const closeBtnText = document.createTextNode("اوکی");
    closeBtn.appendChild(closeBtnText);
    homework.appendChild(closeBtn);
    closeBtn.classList.add("close-btn");
    closeBtn.addEventListener("click", () => {
        homework.style.display = "none";
        blur.style.filter = "blur(0)";
        content.style.filter = "blur(0)";    
    })
})
homeworkBtn4.addEventListener("click", () => {
    blur.style.filter = "blur(2px)";
    content.style.filter = "blur(2px)";
    
    const homework = document.createElement("div");
    body.appendChild(homework);
    homework.classList.add("homework");

    const homeworkContent = document.createElement("p");
    const homeworkContentText = document.createTextNode("در این روز تکلیفی نداریم");
    homeworkContent.appendChild(homeworkContentText);
    homework.appendChild(homeworkContent);
    homeworkContent.classList.add("homework-content");

    const closeBtn = document.createElement("button");
    const closeBtnText = document.createTextNode("اوکی");
    closeBtn.appendChild(closeBtnText);
    homework.appendChild(closeBtn);
    closeBtn.classList.add("close-btn");
    closeBtn.addEventListener("click", () => {
        homework.style.display = "none";
        blur.style.filter = "blur(0)";
        content.style.filter = "blur(0)";    
    })
})
homeworkBtn5.addEventListener("click", () => {
    blur.style.filter = "blur(2px)";
    content.style.filter = "blur(2px)";
    
    const homework = document.createElement("div");
    body.appendChild(homework);
    homework.classList.add("homework");

    const homeworkContent = document.createElement("p");
    const homeworkContentText = document.createTextNode("در این روز تکلیفی نداریم");
    homeworkContent.appendChild(homeworkContentText);
    homework.appendChild(homeworkContent);
    homeworkContent.classList.add("homework-content");

    const closeBtn = document.createElement("button");
    const closeBtnText = document.createTextNode("اوکی");
    closeBtn.appendChild(closeBtnText);
    homework.appendChild(closeBtn);
    closeBtn.classList.add("close-btn");
    closeBtn.addEventListener("click", () => {
        homework.style.display = "none";
        blur.style.filter = "blur(0)";
        content.style.filter = "blur(0)";    
    })
})


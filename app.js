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
const interIntoLogin = document.querySelector(".we-class");

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
function interLoginPage() {
    const loginPage = document.createElement("div");
    const body = document.querySelector("body");
    body.appendChild(loginPage);
    loginPage.classList.add("login-page");

    const loginHeader = document.createElement("div");
    loginPage.appendChild(loginHeader);
    loginHeader.classList.add("login-header");

    const loginHeaderLogo = document.createElement("img");
    loginHeaderLogo.setAttribute("src", "./media/logo/Logo - Outline.svg");
    loginHeader.appendChild(loginHeaderLogo);
    loginHeaderLogo.classList.add("login-header-logo");

    const loginHeaderText = document.createElement("p");
    const loginHeaderTextContent = document.createTextNode("به جمع رفقا خوش اومدی");
    loginHeaderText.appendChild(loginHeaderTextContent);
    loginHeader.appendChild(loginHeaderText);
    loginHeaderText.classList.add("login-header-text");

    const inputs = document.createElement("div");
    loginPage.appendChild(inputs);
    inputs.classList.add("inputs");

    const inputName = document.createElement("div");
    inputs.appendChild(inputName);
    inputName.classList.add("input-name");

    const inputPassword = document.createElement("div");
    inputs.appendChild(inputPassword);
    inputPassword.classList.add("input-password");

    const nameLabel = document.createElement("p");
    const nameLabelText = document.createTextNode("نام و نام خانوادگی");
    nameLabel.appendChild(nameLabelText);
    inputName.appendChild(nameLabel);

    const name = document.createElement("input");
    inputName.appendChild(name);
    name.classList.add("name");
    name.placeholder = "اینجا بنویس";

    const passwordLabel = document.createElement("p");
    const passwordLabelText = document.createTextNode("رمز کلاس");
    passwordLabel.appendChild(passwordLabelText);
    inputPassword.appendChild(passwordLabel);

    const password = document.createElement("input");
    inputPassword.appendChild(password);
    password.classList.add("password");
    password.placeholder = "اینجا بنویس";

    const btns = document.createElement("div");
    loginPage.appendChild(btns);
    btns.classList.add("btns");

    const loginBtn = document.createElement("button");
    const loginBtnText = document.createTextNode("ورود");
    loginBtn.appendChild(loginBtnText);
    btns.appendChild(loginBtn);
    loginBtn.classList.add("login-btn");

    const signupBtn = document.createElement("button");
    const signupBtnText = document.createTextNode("ثبت نام");
    signupBtn.appendChild(signupBtnText);
    btns.appendChild(signupBtn);
    signupBtn.classList.add("signup-btn");

    loginBtn.addEventListener("click", () => {
        const nameValue = name.value;
        const passwordValue = password.value;
        if(passwordValue === "123") {
            localStorage.setItem("username", nameValue);
            isLogin();
            location.reload();
        }
    })
}
function isLogin() {
    const username = localStorage.getItem("username");
    document.querySelector(".username").innerHTML = username;
    if(username.value != "") {
        document.querySelector(".we-class").style.display = "none";
        document.querySelector(".profile").style.display = "flex";
    }
}
function clearLogin() {
    localStorage.removeItem("username");
    location.reload();
}
document.querySelector(".profile").addEventListener("click", () => {
    const cancel = document.createElement("div");
    document.querySelector("body").appendChild(cancel);
    cancel.classList.add("cancel");
    
    const profilePopup = document.createElement("div");
    const body = document.querySelector("body");
    body.appendChild(profilePopup);
    profilePopup.classList.add("profile-popup");

    const avatarUploadLabel = document.createElement("label");
    const avatarUploadLabelContent = document.createTextNode("انتخاب تصویر");
    avatarUploadLabel.appendChild(avatarUploadLabelContent);
    avatarUploadLabel.setAttribute("for", "avatar-upload");
    profilePopup.appendChild(avatarUploadLabel);

    const avatarUpload = document.createElement("input");
    avatarUpload.type = "file";
    profilePopup.appendChild(avatarUpload);
    avatarUpload.setAttribute("accept", "image/png");
    avatarUpload.setAttribute("id", "avatar-upload")

    const setAvatarBtn = document.createElement("button");
    const setAvatarBtnContent = document.createTextNode("تغییر");
    setAvatarBtn.appendChild(setAvatarBtnContent);
    setAvatarBtn.setAttribute("onclick", "my()");
    profilePopup.appendChild(setAvatarBtn);
    setAvatarBtn.classList.add("set-avatar-btn");

    cancel.addEventListener("click", () => {
        profilePopup.style.display = "none";
        cancel.style.display = "none"
    })
})
function my() {
    const image = document.querySelector("#avatar-upload").value;
    const avatarImage = document.createElement("img");
    avatarImage.setAttribute("src", image);
    document.querySelector(".profile").appendChild(avatarImage);
    avatarImage.classList.add("select-profile");
}


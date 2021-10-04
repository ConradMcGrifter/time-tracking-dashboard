const DAILY_BUTTON = document.querySelector("#dailyButton");
const WEEKLY_BUTTON = document.querySelector("#weeklyButton");
const MONTHLY_BUTTON = document.querySelector("#monthlyButton");

const boxes = Array.from(document.querySelectorAll(".info--container"));
const dots = Array.from(document.querySelectorAll(".dots"));
const hours = document.querySelectorAll(".hours--wrap");

const workHours = document.querySelector("#work-hours");
const prevWorkHours = document.querySelector("#previous-work-hours");

const playHours = document.querySelector("#play-hours");
const prevPlayHours = document.querySelector("#previous-play-hours");

const studyHours = document.querySelector("#study-hours");
const prevStudyHours = document.querySelector("#previous-study-hours");

const exerciseHours = document.querySelector("#exercise-hours");
const prevExerciseHours = document.querySelector(
    "#previous-exercise-hours"
);

const socialHours = document.querySelector("#social-hours");
const prevSocialHours = document.querySelector("#previous-social-hours");

const selfCareHours = document.querySelector("#selfCare-hours");
const prevSelfCareHours = document.querySelector(
    "#previous-selfCare-hours"
);

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseenter", () => {
        boxes[i].style.background = "hsl(236, 31%, 38%)";
    });

    dots[i].addEventListener("mouseenter", () => {
        boxes[i].style.background = "hsl(235, 46%, 20%)";
    });
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseleave", () => {
        boxes[i].style.background = "hsl(235, 46%, 20%)";
    });

    dots[i].addEventListener("mouseleave", () => {
        boxes[i].style.background = "hsl(236, 31%, 38%)";
    });
}

const fadeIn = () => {
    for (let i = 0; i < hours.length; i++) {
        hours[i].classList.remove("animate");
        hours[i].scrollBy(0, 0);
        hours[i].classList.add("animate");
    }
};

const fetchData = () => {
    fetch("../data/data.json")
        .then((response) => response.json())
        .then((json) => {
            // take the first object and asign variable names to the object values of daily, weekly, and monthly properties. ex) work_Daily.current = 5 and work_Weekly.previous = 7

            // work data
            const {
                timeframes: {
                    daily: work_Daily,
                    weekly: work_Weekly,
                    monthly: work_Monthly,
                },
            } = json[0];

            // play data
            const {
                timeframes: {
                    daily: play_Daily,
                    weekly: play_Weekly,
                    monthly: play_Monthly,
                },
            } = json[1];

            // study data
            const {
                timeframes: {
                    daily: study_Daily,
                    weekly: study_Weekly,
                    monthly: study_Monthly,
                },
            } = json[2];

            // exercise data
            const {
                timeframes: {
                    daily: exercise_Daily,
                    weekly: exercise_Weekly,
                    monthly: exercise_Monthly,
                },
            } = json[3];

            // social data
            const {
                timeframes: {
                    daily: social_Daily,
                    weekly: social_Weekly,
                    monthly: social_Monthly,
                },
            } = json[4];

            // selfcare data
            const {
                timeframes: {
                    daily: selfCare_Daily,
                    weekly: selfCare_Weekly,
                    monthly: selfCare_Monthly,
                },
            } = json[5];

            const setData = (
                work,
                play,
                study,
                exercise,
                social,
                selfCare,
                str
            ) => {
                workHours.innerText = `${work.current}hrs`;
                prevWorkHours.innerText = str + ` - ${work.previous}hrs`;

                playHours.innerText = `${play.current}hrs`;
                prevPlayHours.innerText = str + ` - ${play.previous}hrs`;

                studyHours.innerText = `${study.current}hrs`;
                prevStudyHours.innerText = str + ` - ${study.previous}hrs`;

                exerciseHours.innerText = `${exercise.current}hrs`;
                prevExerciseHours.innerText =
                    str + ` - ${exercise.previous}hrs`;

                socialHours.innerText = `${social.current}hrs`;
                prevSocialHours.innerText =
                    str + ` - ${social.previous}hrs`;

                selfCareHours.innerText = `${selfCare.current}hrs`;
                prevSelfCareHours.innerText =
                    str + ` - ${selfCare.previous}hrs`;
            };

            DAILY_BUTTON.addEventListener("click", () => {
                DAILY_BUTTON.classList.add("selected");
                WEEKLY_BUTTON.classList.remove("selected");
                MONTHLY_BUTTON.classList.remove("selected");
                setData(
                    work_Daily,
                    play_Daily,
                    study_Daily,
                    exercise_Daily,
                    social_Daily,
                    selfCare_Daily,
                    "Yesterday"
                );

                fadeIn();
            });

            WEEKLY_BUTTON.addEventListener("click", () => {
                DAILY_BUTTON.classList.remove("selected");
                WEEKLY_BUTTON.classList.add("selected");
                MONTHLY_BUTTON.classList.remove("selected");
                setData(
                    work_Weekly,
                    play_Weekly,
                    study_Weekly,
                    exercise_Weekly,
                    social_Weekly,
                    selfCare_Weekly,
                    "Last Week"
                );

                fadeIn();
            });

            MONTHLY_BUTTON.addEventListener("click", () => {
                DAILY_BUTTON.classList.remove("selected");
                WEEKLY_BUTTON.classList.remove("selected");
                MONTHLY_BUTTON.classList.add("selected");
                setData(
                    work_Monthly,
                    play_Monthly,
                    study_Monthly,
                    exercise_Monthly,
                    social_Monthly,
                    selfCare_Monthly,
                    "Last Month"
                );

                fadeIn();
            });
        });
};

fetchData();

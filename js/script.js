const DAILY_BUTTON = document.querySelector("#dailyButton");
const WEEKLY_BUTTON = document.querySelector("#weeklyButton");
const MONTHLY_BUTTON = document.querySelector("#monthlyButton");

const workHours = document.querySelector("#work-hours");
const prevWorkHours = document.querySelector("#previous-work-hours");

const playHours = document.querySelector("#play-hours");
const prevPlayHours = document.querySelector("#previous-play-hours");

const studyHours = document.querySelector("#study-hours");
const prevStudyHours = document.querySelector("#previous-study-hours");

const exerciseHours = document.querySelector("#exercise-hours");
const prevExerciseHours = document.querySelector("#previous-exercise-hours");

const socialHours = document.querySelector("#social-hours");
const prevSocialHours = document.querySelector("#previous-social-hours");

const selfCareHours = document.querySelector("#selfCare-hours");
const prevSelfCareHours = document.querySelector("#previous-selfCare-hours");

const fetchData = () => {
    fetch("../data/data.json")
        .then((response) => response.json())
        .then((json) => {
            console.log(json[0]);

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

            DAILY_BUTTON.addEventListener("click", () => {
                workHours.innerText = `${work_Daily.current}hrs`;
                prevWorkHours.innerText = `Yesterday - ${work_Daily.previous}hrs`;

                playHours.innerText = `${play_Daily.current}hrs`;
                prevPlayHours.innerText = `Yesterday - ${play_Daily.previous}hrs`;

                studyHours.innerText = `${study_Daily.current}hrs`;
                prevStudyHours.innerText = `Yesterday - ${study_Daily.previous}hrs`;

                exerciseHours.innerText = `${exercise_Daily.current}hrs`;
                prevExerciseHours.innerText = `Yesterday - ${exercise_Daily.previous}hrs`;

                socialHours.innerText = `${social_Daily.current}hrs`;
                prevSocialHours.innerText = `Yesterday - ${social_Daily.previous}hrs`;

                selfCareHours.innerText = `${selfCare_Daily.current}hrs`;
                prevSelfCareHours.innerText = `Yesterday - ${selfCare_Daily.previous}hrs`;
            });

            WEEKLY_BUTTON.addEventListener("click", () => {
                workHours.innerText = `${work_Weekly.current}hrs`;
                prevWorkHours.innerText = `Last Week - ${work_Weekly.previous}hrs`;

                playHours.innerText = `${play_Weekly.current}hrs`;
                prevPlayHours.innerText = `Last Week - ${play_Weekly.previous}hrs`;

                studyHours.innerText = `${study_Weekly.current}hrs`;
                prevStudyHours.innerText = `Last Week - ${study_Weekly.previous}hrs`;

                exerciseHours.innerText = `${exercise_Weekly.current}hrs`;
                prevExerciseHours.innerText = `Last Week - ${exercise_Weekly.previous}hrs`;

                socialHours.innerText = `${social_Weekly.current}hrs`;
                prevSocialHours.innerText = `Last Week - ${social_Weekly.previous}hrs`;

                selfCareHours.innerText = `${selfCare_Weekly.current}hrs`;
                prevSelfCareHours.innerText = `Last Week - ${selfCare_Weekly.previous}hrs`;
            });

            MONTHLY_BUTTON.addEventListener("click", () => {
                workHours.innerText = `${work_Monthly.current}hrs`;
                prevWorkHours.innerText = `Last Month - ${work_Monthly.previous}hrs`;

                playHours.innerText = `${play_Monthly.current}hrs`;
                prevPlayHours.innerText = `Last Month - ${play_Monthly.previous}hrs`;

                studyHours.innerText = `${study_Monthly.current}hrs`;
                prevStudyHours.innerText = `Last Month - ${study_Monthly.previous}hrs`;

                exerciseHours.innerText = `${exercise_Monthly.current}hrs`;
                prevExerciseHours.innerText = `Last Month - ${exercise_Monthly.previous}hrs`;

                socialHours.innerText = `${social_Monthly.current}hrs`;
                prevSocialHours.innerText = `Last Month - ${social_Monthly.previous}hrs`;

                selfCareHours.innerText = `${selfCare_Monthly.current}hrs`;
                prevSelfCareHours.innerText = `Last Month - ${selfCare_Monthly.previous}hrs`;
            });
        });
};

fetchData();

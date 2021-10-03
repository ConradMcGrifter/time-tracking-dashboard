const OUTPUT = document.querySelector(".timeframe-output");

const DAILY_CHECKBOX = document.querySelector("#daily-checkbox");
const WEEKLY_CHECKBOX = document.querySelector("#weekly-checkbox");
const YEARLY_CHECKBOX = document.querySelector("#yearly-checkbox");

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

            console.log(work_Daily.current);
            console.log(work_Daily.previous);

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
        });
};

fetchData();

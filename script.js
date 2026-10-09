 /* =====================================================
   TRAILMATE AI
   HTML + CSS + JavaScript
===================================================== */


/* =====================================================
   APP DATA
===================================================== */

let appData = JSON.parse(
    localStorage.getItem("trailMateData")
) || {

    xp: 0,
    distance: 0,
    discoveries: 0,
    challenges: 0,
    phoneFree: 0,
    streak: 0

};


/* =====================================================
   SAVE DATA
===================================================== */

function saveData() {

    localStorage.setItem(
        "trailMateData",
        JSON.stringify(appData)
    );

}


/* =====================================================
   UPDATE DASHBOARD
===================================================== */

function updateDashboard() {

    document.getElementById("xpValue").textContent =
        appData.xp;

    document.getElementById("currentXP").textContent =
        appData.xp % 100;

    document.getElementById("distanceValue").textContent =
        appData.distance.toFixed(1) + " km";

    document.getElementById("discoveryValue").textContent =
        appData.discoveries;

    document.getElementById("challengeValue").textContent =
        appData.challenges;

    document.getElementById("phoneFreeValue").textContent =
        appData.phoneFree + " min";

    document.getElementById("streakValue").textContent =
        appData.streak;


    /* LEVEL */

    const level =
        Math.floor(appData.xp / 100) + 1;

    document.getElementById("levelValue").textContent =
        level;


    /* PROGRESS */

    const progress =
        appData.xp % 100;

    document.getElementById("progressFill").style.width =
        progress + "%";


    updateAchievements();

    saveData();

}


/* =====================================================
   START ADVENTURE
===================================================== */

function startAdventure() {

    document.querySelector(".main-section").scrollIntoView({
        behavior: "smooth"
    });

    generateChallenge();

}


/* =====================================================
   AI CHALLENGE GENERATOR
===================================================== */

const challenges = [

    {
        title: "Nature Detective",
        text: "Find something around you with three different shades of green. Observe it carefully for 30 seconds.",
        xp: 25
    },

    {
        title: "Sound Hunter",
        text: "Stand quietly for one minute. Try to identify three different natural sounds around you.",
        xp: 30
    },

    {
        title: "Texture Explorer",
        text: "Find three natural objects with completely different textures. Compare how they feel.",
        xp: 25
    },

    {
        title: "Sky Watcher",
        text: "Look at the sky for five minutes. Find a cloud that resembles an object, animal or person.",
        xp: 20
    },

    {
        title: "Tiny World",
        text: "Look closely at the ground and discover something smaller than your hand that you normally ignore.",
        xp: 30
    },

    {
        title: "Color Quest",
        text: "Find five different colors in nature without using anything man-made.",
        xp: 35
    },

    {
        title: "Mindful Walker",
        text: "Walk slowly for five minutes without checking your phone. Focus only on your surroundings.",
        xp: 30
    }

];


function generateChallenge() {

    const challenge =
        challenges[
            Math.floor(
                Math.random() * challenges.length
            )
        ];


    document.getElementById("challengeTitle")
        .textContent = challenge.title;

    document.getElementById("challengeText")
        .textContent = challenge.text;


    const meta =
        document.querySelector(".challenge-meta");

    meta.innerHTML =
        `
        <span>⏱ 10 min</span>
        <span>⭐ +${challenge.xp} XP</span>
        `;


    /* Store current challenge */

    localStorage.setItem(
        "currentChallenge",
        JSON.stringify(challenge)
    );

}


/* =====================================================
   COMPLETE CHALLENGE
===================================================== */

function completeChallenge() {

    const challenge =
        JSON.parse(
            localStorage.getItem("currentChallenge")
        ) || challenges[0];


    appData.xp += challenge.xp;

    appData.challenges++;

    saveData();

    updateDashboard();


    alert(
        `🎉 Mission Complete!\n\n+${challenge.xp} XP earned!`
    );

}


/* =====================================================
   IMAGE UPLOAD
===================================================== */

const imageInput =
    document.getElementById("imageInput");


imageInput.addEventListener(
    "change",
    function(event) {

        const file =
            event.target.files[0];

        if (!file) return;


        const reader =
            new FileReader();


        reader.onload = function(e) {

            const image =
                document.getElementById("previewImage");

            image.src =
                e.target.result;


            document
                .getElementById("uploadArea")
                .classList.add("hidden");


            document
                .getElementById("previewArea")
                .classList.remove("hidden");


            runAIAnalysis(file);

        };


        reader.readAsDataURL(file);

    }
);


/* =====================================================
   AI NATURE ANALYSIS
===================================================== */

/*

    IMPORTANT:

    This function is where the open-source AI model
    can be connected.

    The UI is already prepared.

    For a fully local version, replace this function
    with a browser-compatible open-weight vision model.

*/


async function runAIAnalysis(file) {

    const resultName =
        document.getElementById("resultName");

    const description =
        document.getElementById("resultDescription");

    const confidence =
        document.getElementById("confidenceValue");


    resultName.textContent =
        "AI is analyzing...";

    description.textContent =
        "Examining your outdoor discovery.";

    confidence.textContent =
        "...";


    /*
       DEMO AI

       This creates a local AI-style analysis
       without sending the image anywhere.

       Replace the analysis section with an
       open-weight browser model when deploying
       the full AI version.
    */


    await delay(1800);


    const possibleObjects = [

        {
            name: "Green Leaf",
            description:
                "This appears to be a green leaf. Look at its shape, veins and edges to compare it with other plants nearby.",
            confidence: 91
        },

        {
            name: "Outdoor Plant",
            description:
                "This looks like a plant found in a natural outdoor environment. Try photographing its flowers or leaves for deeper identification.",
            confidence: 86
        },

        {
            name: "Natural Object",
            description:
                "The image contains a natural outdoor object. Explore the surrounding area to find similar objects.",
            confidence: 78
        },

        {
            name: "Flower / Plant",
            description:
                "This appears to be a flowering or leafy plant. Notice its color, shape and surrounding habitat.",
            confidence: 84
        }

    ];


    const result =
        possibleObjects[
            Math.floor(
                Math.random() *
                possibleObjects.length
            )
        ];


    resultName.textContent =
        result.name;

    description.textContent =
        result.description;

    confidence.textContent =
        result.confidence + "%";


    /* Reward discovery */

    appData.discoveries++;

    appData.xp += 15;

    saveData();

    updateDashboard();

}


/* =====================================================
   NEW SCAN
===================================================== */

function newScan() {

    document
        .getElementById("previewArea")
        .classList.add("hidden");


    document
        .getElementById("uploadArea")
        .classList.remove("hidden");


    document.getElementById("imageInput").value =
        "";

}


/* =====================================================
   PHONE DOWN MODE
===================================================== */

let phoneTimer = null;

let remainingSeconds = 600;

let phoneRunning = false;


function togglePhoneMode() {

    const button =
        document.getElementById("phoneBtn");


    if (!phoneRunning) {

        phoneRunning = true;

        remainingSeconds = 600;


        button.textContent =
            "⏹ End Phone Down";


        phoneTimer =
            setInterval(
                updateTimer,
                1000
            );

    }

    else {

        stopPhoneMode();

    }

}


function updateTimer() {

    remainingSeconds--;


    if (remainingSeconds <= 0) {

        stopPhoneMode();

        appData.phoneFree += 10;

        appData.xp += 30;

        updateDashboard();


        alert(
            "🌿 Amazing!\n\nYou completed Phone Down Mode!"
        );

        return;

    }


    displayTimer();

}


function displayTimer() {

    const minutes =
        Math.floor(
            remainingSeconds / 60
        );

    const seconds =
        remainingSeconds % 60;


    document.getElementById("timer")
        .textContent =
        String(minutes).padStart(2, "0")
        + ":" +
        String(seconds).padStart(2, "0");

}


function stopPhoneMode() {

    clearInterval(phoneTimer);

    phoneRunning = false;


    document.getElementById("phoneBtn")
        .textContent =
        "📵 Start Phone Down";


    displayTimer();

}


/* =====================================================
   ACHIEVEMENTS
===================================================== */

function updateAchievements() {

    if (appData.discoveries >= 1) {

        document
            .getElementById("achievement1")
            .classList.remove("locked");

    }


    if (
        appData.distance >= 5 ||
        appData.challenges >= 5
    ) {

        document
            .getElementById("achievement2")
            .classList.remove("locked");

    }


    if (appData.discoveries >= 5) {

        document
            .getElementById("achievement3")
            .classList.remove("locked");

    }


    if (appData.xp >= 500) {

        document
            .getElementById("achievement4")
            .classList.remove("locked");

    }

}


/* =====================================================
   PROFILE
===================================================== */

function showProfile() {

    document
        .getElementById("profileModal")
        .classList.remove("hidden");


    document.getElementById("profileXP")
        .textContent =
        appData.xp;


    document.getElementById("profileDiscoveries")
        .textContent =
        appData.discoveries;


    document.getElementById("profileChallenges")
        .textContent =
        appData.challenges;

}


function closeProfile() {

    document
        .getElementById("profileModal")
        .classList.add("hidden");

}


/* =====================================================
   UTILITY
===================================================== */

function delay(ms) {

    return new Promise(
        resolve => setTimeout(resolve, ms)
    );

}


/* =====================================================
   INITIALIZE
===================================================== */

updateDashboard();

generateChallenge();

displayTimer();
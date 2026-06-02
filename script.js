// =========================
// Welcome Quotes
// =========================

const quotes = [
    "Success is the sum of small efforts repeated day in and day out.",
    "Dream big. Work hard. Stay focused.",
    "Education is the passport to the future.",
    "Believe in yourself and all that you are.",
    "Every accomplishment starts with the decision to try."
];

const quoteElement = document.getElementById("quote");

if (quoteElement) {
    quoteElement.innerText =
        quotes[Math.floor(Math.random() * quotes.length)];
}

// =========================
// Start App
// =========================

function startApp() {
    window.location.href = "calculator.html";
}

// =========================
// Dark Mode
// =========================

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// =========================
// Subject Grade Function
// =========================

function getGrade(mark) {
    if (mark >= 90) return "A+";
    if (mark >= 80) return "A";
    if (mark >= 70) return "B";
    if (mark >= 60) return "C";
    if (mark >= 50) return "D";
    return "F";
}

// =========================
// Calculate Result
// =========================

function calculateResult() {

    let s1 = Number(document.getElementById("sub1").value) || 0;
    let s2 = Number(document.getElementById("sub2").value) || 0;
    let s3 = Number(document.getElementById("sub3").value) || 0;
    let s4 = Number(document.getElementById("sub4").value) || 0;
    let s5 = Number(document.getElementById("sub5").value) || 0;

    let marks = [s1, s2, s3, s4, s5];

    let total = marks.reduce((a, b) => a + b, 0);

    let percentage = total / 5;

    let overallGrade = getGrade(percentage);

    let status =
        marks.every(mark => mark >= 35)
            ? "PASS ✅"
            : "FAIL ❌";

    // Remarks

    let remark = "";

    if (percentage >= 90) {
        remark = "Excellent 🌟";
    } else if (percentage >= 75) {
        remark = "Good 👍";
    } else if (percentage >= 50) {
        remark = "Average 🙂";
    } else {
        remark = "Needs Improvement 📚";
    }

    // Highest & Lowest

    let highest = Math.max(...marks);
    let lowest = Math.min(...marks);

    // Passed Subjects

    let passedCount =
        marks.filter(mark => mark >= 35).length;

    // Rank Prediction

    let rank = "";

    if (percentage >= 90) {
        rank = "Top 10";
    } else if (percentage >= 75) {
        rank = "Top 25";
    } else if (percentage >= 60) {
        rank = "Top 50";
    } else {
        rank = "Below Average";
    }

    // Class Average

    let classAverage = 70;

    let averageResult =
        percentage >= classAverage
            ? "Above Class Average ✅"
            : "Below Class Average ❌";

    // Subject Grades

    let subjectGrades =
        `
        Subject 1 : ${getGrade(s1)} |
        Subject 2 : ${getGrade(s2)} |
        Subject 3 : ${getGrade(s3)} |
        Subject 4 : ${getGrade(s4)} |
        Subject 5 : ${getGrade(s5)}
        `;

    // Display Results

    document.getElementById("total").innerHTML =
        `Total Marks : ${total}`;

    document.getElementById("percentage").innerHTML =
        `Percentage : ${percentage.toFixed(2)}%`;

    document.getElementById("grade").innerHTML =
        `Grade : ${overallGrade}`;

    document.getElementById("remark").innerHTML =
        `Remark : ${remark}`;

    document.getElementById("status").innerHTML =
        `Result : ${status}`;

    document.getElementById("subjectGrades").innerHTML =
        subjectGrades;

    document.getElementById("highest").innerHTML =
        `Highest Mark : ${highest}`;

    document.getElementById("lowest").innerHTML =
        `Lowest Mark : ${lowest}`;

    document.getElementById("passedSubjects").innerHTML =
        `Passed Subjects : ${passedCount}/5`;

    document.getElementById("rank").innerHTML =
        `Predicted Rank : ${rank}`;

    document.getElementById("classAverage").innerHTML =
        averageResult;

    // Progress Bar

    const progressBar =
        document.getElementById("progressBar");

    progressBar.style.width =
        percentage + "%";

    progressBar.innerHTML =
        percentage.toFixed(2) + "%";

    if (percentage >= 90) {
        progressBar.style.background = "green";
    }
    else if (percentage >= 70) {
        progressBar.style.background = "orange";
    }
    else {
        progressBar.style.background = "red";
    }

    // Confetti

    if (
        status.includes("PASS") &&
        typeof confetti === "function"
    ) {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });
    }
}

// =========================
// Reset
// =========================

function resetForm() {

    document
        .querySelectorAll("input")
        .forEach(input => {
            input.value = "";
        });

    const ids = [
        "total",
        "percentage",
        "grade",
        "remark",
        "status",
        "subjectGrades",
        "highest",
        "lowest",
        "passedSubjects",
        "rank",
        "classAverage"
    ];

    ids.forEach(id => {
        document.getElementById(id).innerHTML = "";
    });

    const progressBar =
        document.getElementById("progressBar");

    progressBar.style.width = "0%";
    progressBar.innerHTML = "0%";
}
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];


studentList.forEach(student => {
    student.scores = student.scores.map(score => score + 5);
});


const numExams = studentList[0].scores.length;
const examSum = new Array(numExams).fill(0);
studentList.forEach(student => {
    student.scores.forEach((score, index) => {
        examSum[index] += score;
    });
});
const examAvg = examSum.map(sum => sum / studentList.length);
studentList.forEach(student => {
    const missingScore = examAvg.reduce((acc, cur, index) => {
        if (!student.scores[index]) {
            acc = cur;
        }
        return acc;
    }, 0);
    student.scores.push(missingScore);
});


studentList.forEach(student => {
    const fullName = `${student.lastName}, ${student.firstName}`;
    const updatedScores = student.scores.join(', ');
    console.log(`Full name (last, first): ${fullName}`);
    console.log(`Updated scores are: ${updatedScores}\n`);
});

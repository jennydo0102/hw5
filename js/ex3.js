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

const calculateAverage = (scores) => {
    const sum = scores.reduce((total, score) => total + score);
    return sum / scores.length;
};


const filterByLastName = (list) => {
    return list.filter((student) => student.lastName.charAt(0) === "C");
};

const mapToSelectedProperties = (list) => {
    return list.map((student) => {
        const { firstName, lastName, scores } = student;
        const avgScore = calculateAverage(scores);
        const maxScore = Math.max(...scores);
        const minScore = Math.min(...scores);
        return { firstName, lastName, minScore, maxScore, avgScore };
    });
};


const cLastNameResults = mapToSelectedProperties(filterByLastName(studentList));

console.log(cLastNameResults);

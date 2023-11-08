
const process = require("process")

const motivationalExpressions = [
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The only way to achieve the impossible is to believe it is possible.",
    "It always seems impossible until it's done.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Don't watch the clock; do what it does. Keep going.",
    "You don't have to be great to start, but you have to start to be great.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Start where you are. Use what you have. Do what you can.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Sometimes later becomes never. Do it now.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you are done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths."
];

process.stdout.write("1- Hi\n2-How are you?\n3- Motivate Me\nEnter a Number:");

process.stdin.on("data", (data) => {
    const input = data.toString().trim(); // Convert buffer to string and trim it

    if (input === "1") {
        process.stdout.write("Hello, it is nice to talk with you!\n");
    } else if (input === "2") {
        process.stdout.write("I am fine since you are here\n");
    } else if (input === "3") {
        process.stdout.write(getRandomMotivationalExpression() + "\n");
    } else {
        process.stdout.write("Please enter a valid number (1, 2, or 3):\n");
    }

    process.stdout.write("Enter a Number (or type 'exit' to quit):");
});

function getRandomMotivationalExpression() {
    const index = Math.floor(Math.random() * motivationalExpressions.length);
    return motivationalExpressions[index];
}

// To handle the exit command
process.stdin.on("data", (data) => {
    if (data.toString().trim().toLowerCase() === 'exit') {
        process.stdout.write('Goodbye!\n');
        process.stdin.pause(); // Close the stdin stream
    }
});
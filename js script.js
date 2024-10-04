document.getElementById("submit-btn").addEventListener("click", function() {
    // Get the input value (Date of Birth)
    const dob = document.getElementById("dob").value;
    
    if (dob) {
        const zodiacSign = getZodiacSign(new Date(dob));
        const luckyNumber = getLuckyNumber(new Date(dob));

        // Display the zodiac sign and lucky number
        document.getElementById("zodiac-sign").innerText = zodiacSign;
        document.getElementById("lucky-number").innerText = luckyNumber;
    } else {
        alert("Please enter your date of birth!");
    }
});

// Function to get Zodiac Sign based on date of birth
function getZodiacSign(date) {
    const month = date.getMonth() + 1; // JS months are 0-indexed
    const day = date.getDate();

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";
}

// Function to calculate a "lucky number" based on the date of birth
function getLuckyNumber(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Add up the digits of the day, month, and year
    const sum = day + month + year;

    // Return a single-digit lucky number
    return sum.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

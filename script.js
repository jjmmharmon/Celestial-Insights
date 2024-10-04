function findZodiacAndLuckyNumber() {
    // Get the user's date of birth from the input field
    const dob = document.getElementById('dob').value;

    // Check if the date of birth is entered
    if (!dob) {
        alert("Please enter your date of birth.");
        return;
    }

    // Convert the date of birth into a Date object
    const birthDate = new Date(dob);
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1; // Months are zero-based

    // Function to find the zodiac sign
    const zodiac = getZodiacSign(day, month);
    
    // Function to calculate the lucky number
    const luckyNumber = getLuckyNumber(birthDate);

    // Update the HTML content
    document.getElementById('zodiac').textContent = zodiac;
    document.getElementById('lucky-number').textContent = luckyNumber;
}

function getZodiacSign(day, month) {
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

function getLuckyNumber(birthDate) {
    const digits = birthDate.getFullYear().toString().split('').concat(
        birthDate.getMonth() + 1, birthDate.getDate());

    const sum = digits.reduce((acc, curr) => acc + parseInt(curr), 0);

    // Reduce the sum to a single digit (if needed)
    let luckyNumber = sum;
    while (luckyNumber > 9) {
        luckyNumber = luckyNumber.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    }

    return luckyNumber;
}

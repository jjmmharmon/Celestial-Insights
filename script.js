// Function to determine Zodiac sign and traits
function getZodiacAndTraits(dob) {
    const date = new Date(dob);
    const month = date.getUTCMonth() + 1; // getUTCMonth() is zero-based
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    let zodiacSign = '';
    let luckyNumber = calculateLuckyNumber(month, day, year); // Calculate lucky number
    let element = '';
    let signType = '';
    let planet = '';
    let traits = [];

    // Zodiac sign determination
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        zodiacSign = 'Aquarius';
        element = 'Air';
        signType = 'Masculine';
        planet = 'Uranus';
        traits = ['Unconventional', 'Independent', 'Humanitarian'];
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        zodiacSign = 'Pisces';
        element = 'Water';
        signType = 'Feminine';
        planet = 'Neptune';
        traits = ['Empathetic', 'Artistic', 'Intuitive'];
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        zodiacSign = 'Aries';
        element = 'Fire';
        signType = 'Masculine';
        planet = 'Mars';
        traits = ['Courageous', 'Determined', 'Confident'];
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        zodiacSign = 'Taurus';
        element = 'Earth';
        signType = 'Feminine';
        planet = 'Venus';
        traits = ['Reliable', 'Patient', 'Practical'];
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        zodiacSign = 'Gemini';
        element = 'Air';
        signType = 'Masculine';
        planet = 'Mercury';
        traits = ['Adaptable', 'Outgoing', 'Intelligent'];
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        zodiacSign = 'Cancer';
        element = 'Water';
        signType = 'Feminine';
        planet = 'Moon';
        traits = ['Loyal', 'Sensitive', 'Intuitive'];
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        zodiacSign = 'Leo';
        element = 'Fire';
        signType = 'Masculine';
        planet = 'Sun';
        traits = ['Creative', 'Passionate', 'Generous'];
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        zodiacSign = 'Virgo';
        element = 'Earth';
        signType = 'Feminine';
        planet = 'Mercury';
        traits = ['Analytical', 'Practical', 'Meticulous'];
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        zodiacSign = 'Libra';
        element = 'Air';
        signType = 'Masculine';
        planet = 'Venus';
        traits = ['Charming', 'Diplomatic', 'Fair-minded'];
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        zodiacSign = 'Scorpio';
        element = 'Water';
        signType = 'Feminine';
        planet = 'Pluto';
        traits = ['Resourceful', 'Brave', 'Passionate'];
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        zodiacSign = 'Sagittarius';
        element = 'Fire';
        signType = 'Masculine';
        planet = 'Jupiter';
        traits = ['Generous', 'Idealistic', 'Great sense of humor'];
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        zodiacSign = 'Capricorn';
        element = 'Earth';
        signType = 'Feminine';
        planet = 'Saturn';
        traits = ['Disciplined', 'Responsible', 'Self-control'];
    }

    return { zodiacSign, luckyNumber, element, signType, planet, traits };
}

// Function to calculate lucky number based on birth date
function calculateLuckyNumber(month, day, year) {
    const reducedMonth = month; // Month is already a single digit
    const reducedDay = day.toString().split('').reduce((sum, num) => sum + parseInt(num), 0);
    const reducedYear = year.toString().split('').reduce((sum, num) => sum + parseInt(num), 0);

    // Calculate the total
    let luckyNumber = reducedMonth + reducedDay + reducedYear;

    // Reduce to a single digit if necessary
    while (luckyNumber > 9) {
        luckyNumber = luckyNumber.toString().split('').reduce((sum, num) => sum + parseInt(num), 0);
    }

    return luckyNumber;
}

// Enable button based on input
document.getElementById('dob').addEventListener('input', function() {
    const dob = this.value;
    document.getElementById('find-sign').disabled = !dob; // Enable button if date is entered
});

// Handle button click
document.getElementById('find-sign').addEventListener('click', function() {
    const dob = document.getElementById('dob').value;
    
    if (dob) {
        const result = getZodiacAndTraits(dob);
        document.getElementById('zodiac-sign').textContent = result.zodiacSign;
        document.getElementById('lucky-number').textContent = result.luckyNumber;
        document.getElementById('element').textContent = result.element;
        document.getElementById('sign-type').textContent = result.signType;
        document.getElementById('planet').textContent = result.planet;

        // Display traits
        const traitsList = document.getElementById('traits');
        traitsList.innerHTML = ''; // Clear previous traits
        result.traits.forEach(trait => {
            const li = document.createElement('li');
            li.textContent = trait;
            traitsList.appendChild(li);
        });

        // Show results
        document.getElementById('results').classList.remove('hidden');
    } else {
        alert('Please enter your date of birth!');
    }
});

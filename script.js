// Function to determine Zodiac sign and traits
function getZodiacAndTraits(dob) {
    const date = new Date(dob);
    const month = date.getUTCMonth() + 1; // getUTCMonth() is zero-based
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    const zodiacData = {
        Aquarius: {
            dates: "January 20 – February 18",
            element: "Air",
            signType: "Masculine",
            rulingPlanets: { modern: "Uranus", traditional: "Saturn" },
            traits: { female: ["Unconventional", "Independent", "Humanitarian"], male: ["Visionary", "Intellectual", "Socially Aware"] }
        },
        Pisces: {
            dates: "February 19 – March 20",
            element: "Water",
            signType: "Feminine",
            rulingPlanets: { modern: "Neptune", traditional: "Jupiter" },
            traits: { female: ["Compassionate", "Artistic", "Empathetic"], male: ["Gentle", "Imaginative", "Empathetic"] }
        },
        Aries: {
            dates: "March 21 – April 19",
            element: "Fire",
            signType: "Masculine",
            rulingPlanets: { modern: "Mars" },
            traits: { female: ["Bold", "Independent", "Energetic"], male: ["Assertive", "Competitive", "Passionate"] }
        },
        Taurus: {
            dates: "April 20 – May 20",
            element: "Earth",
            signType: "Feminine",
            rulingPlanets: { modern: "Venus" },
            traits: { female: ["Patient", "Reliable", "Loyal"], male: ["Determined", "Practical", "Sensual"] }
        },
        Gemini: {
            dates: "May 21 – June 20",
            element: "Air",
            signType: "Masculine",
            rulingPlanets: { modern: "Mercury" },
            traits: { female: ["Adaptable", "Intellectual", "Social"], male: ["Curious", "Versatile", "Witty"] }
        },
        Cancer: {
            dates: "June 21 – July 22",
            element: "Water",
            signType: "Feminine",
            rulingPlanets: { modern: "Moon" },
            traits: { female: ["Nurturing", "Emotional", "Intuitive"], male: ["Protective", "Sentimental", "Caring"] }
        },
        Leo: {
            dates: "July 23 – August 22",
            element: "Fire",
            signType: "Masculine",
            rulingPlanets: { modern: "Sun" },
            traits: { female: ["Confident", "Generous", "Dramatic"], male: ["Charismatic", "Ambitious", "Creative"] }
        },
        Virgo: {
            dates: "August 23 – September 22",
            element: "Earth",
            signType: "Feminine",
            rulingPlanets: { modern: "Mercury" },
            traits: { female: ["Analytical", "Practical", "Detail-Oriented"], male: ["Reliable", "Modest", "Perfectionist"] }
        },
        Libra: {
            dates: "September 23 – October 22",
            element: "Air",
            signType: "Masculine",
            rulingPlanets: { modern: "Venus" },
            traits: { female: ["Diplomatic", "Charming", "Idealistic"], male: ["Fair", "Balanced", "Sociable"] }
        },
        Scorpio: {
            dates: "October 23 – November 21",
            element: "Water",
            signType: "Feminine",
            rulingPlanets: { modern: "Pluto", traditional: "Mars" },
            traits: { female: ["Mysterious", "Passionate", "Resourceful"], male: ["Intense", "Loyal", "Strategic"] }
        },
        Sagittarius: {
            dates: "November 22 – December 21",
            element: "Fire",
            signType: "Masculine",
            rulingPlanets: { modern: "Jupiter" },
            traits: { female: ["Adventurous", "Optimistic", "Independent"], male: ["Philosophical", "Energetic", "Generous"] }
        },
        Capricorn: {
            dates: "December 22 – January 19",
            element: "Earth",
            signType: "Feminine",
            rulingPlanets: { modern: "Saturn" },
            traits: { female: ["Ambitious", "Disciplined", "Practical"], male: ["Determined", "Strategic", "Responsible"] }
        },
    };

    let zodiacSign = '';
    let luckyNumber = calculateLuckyNumber(month, day, year);
    let element = '';
    let signType = '';
    let planet = '';
    let traits = [];

    // Zodiac sign determination
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        zodiacSign = "Aquarius";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        zodiacSign = "Pisces";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        zodiacSign = "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        zodiacSign = "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        zodiacSign = "Gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        zodiacSign = "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        zodiacSign = "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        zodiacSign = "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        zodiacSign = "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        zodiacSign = "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        zodiacSign = "Sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        zodiacSign = "Capricorn";
    }

    if (zodiacSign) {
        const signData = zodiacData[zodiacSign];
        element = signData.element;
        signType = signData.signType;
        planet = signData.rulingPlanets.modern; // or traditional based on your preference
        traits = signData.traits.male; // or female based on gender if applicable
    }

    return { zodiacSign, luckyNumber, element, signType, planet, traits };
}

// Lucky number calculation based on DOB
function calculateLuckyNumber(month, day, year) {
    const digits = (month + day + year).toString().split('');
    const total = digits.reduce((acc, digit) => acc + Number(digit), 0);
    return total % 9 === 0 ? 9 : total % 9; // Ensure lucky number is between 1-9
}

// Event listener for button click
document.getElementById('find-sign').addEventListener('click', function () {
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

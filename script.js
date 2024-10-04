// Function to determine Zodiac sign, traits, and lucky number
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
            rulingPlanets: {
                modern: "Uranus",
                traditional: "Saturn"
            },
            traits: {
                female: "Unconventional, independent, humanitarian.",
                male: "Visionary, intellectual, socially aware."
            }
        },
        Pisces: {
            dates: "February 19 – March 20",
            element: "Water",
            signType: "Feminine",
            rulingPlanets: {
                modern: "Neptune",
                traditional: "Jupiter"
            },
            traits: {
                female: "Compassionate, artistic, empathetic.",
                male: "Gentle, imaginative, empathetic."
            }
        },
        Aries: {
            dates: "March 21 – April 19",
            element: "Fire",
            signType: "Masculine",
            rulingPlanet: "Mars",
            traits: {
                female: "Bold, independent, energetic.",
                male: "Assertive, competitive, passionate."
            }
        },
        Taurus: {
            dates: "April 20 – May 20",
            element: "Earth",
            signType: "Feminine",
            rulingPlanet: "Venus",
            traits: {
                female: "Practical, patient, sensual.",
                male: "Steady, reliable, determined."
            }
        },
        Gemini: {
            dates: "May 21 – June 20",
            element: "Air",
            signType: "Masculine",
            rulingPlanet: "Mercury",
            traits: {
                female: "Social, intellectual, adaptable.",
                male: "Communicative, versatile, quick-thinking."
            }
        },
        Cancer: {
            dates: "June 21 – July 22",
            element: "Water",
            signType: "Feminine",
            rulingPlanet: "Moon",
            traits: {
                female: "Nurturing, intuitive, emotionally sensitive.",
                male: "Compassionate, protective, emotionally deep."
            }
        },
        Leo: {
            dates: "July 23 – August 22",
            element: "Fire",
            signType: "Masculine",
            rulingPlanet: "Sun",
            traits: {
                female: "Charismatic, confident, dramatic.",
                male: "Ambitious, proud, strong."
            }
        },
        Virgo: {
            dates: "August 23 – September 22",
            element: "Earth",
            signType: "Feminine",
            rulingPlanet: "Mercury",
            traits: {
                female: "Analytical, organized, detail-oriented.",
                male: "Methodical, responsible, efficient."
            }
        },
        Libra: {
            dates: "September 23 – October 22",
            element: "Air",
            signType: "Masculine",
            rulingPlanet: "Venus",
            traits: {
                female: "Diplomatic, social, charming.",
                male: "Sociable, cooperative, fair-minded."
            }
        },
        Scorpio: {
            dates: "October 23 – November 21",
            element: "Water",
            signType: "Feminine",
            rulingPlanets: {
                modern: "Pluto",
                traditional: "Mars"
            },
            traits: {
                female: "Intense, passionate, mysterious.",
                male: "Intense, driven, secretive."
            }
        },
        Sagittarius: {
            dates: "November 22 – December 21",
            element: "Fire",
            signType: "Masculine",
            rulingPlanet: "Jupiter",
            traits: {
                female: "Adventurous, optimistic, free-spirited.",
                male: "Outgoing, philosophical, adventurous."
            }
        },
        Capricorn: {
            dates: "December 22 – January 19",
            element: "Earth",
            signType: "Feminine",
            rulingPlanet: "Saturn",
            traits: {
                female: "Ambitious, disciplined, practical, goal-oriented.",
                male: "Determined, strategic, responsible."
            }
        }
    };

    let zodiacSign = '';
    let luckyNumber = calculateLuckyNumber(month, day, year); // Calculate lucky number
    let element = '';
    let signType = '';
    let planet = '';
    let traits = [];

    // Zodiac sign determination
    for (const sign in zodiacData) {
        const [startDateStr, endDateStr] = zodiacData[sign].dates.split(" – ");
        const startDate = new Date(year, new Date(startDateStr).getUTCMonth(), parseInt(startDateStr.split(" ")[1]));
        const endDate = new Date(year, new Date(endDateStr).getUTCMonth(), parseInt(endDateStr.split(" ")[1]));

        if ((month === startDate.getUTCMonth() + 1 && day >= startDate.getUTCDate()) ||
            (month === endDate.getUTCMonth() + 1 && day <= endDate.getUTCDate())) {
            zodiacSign = sign;
            element = zodiacData[sign].element;
            signType = zodiacData[sign].signType;
            planet = zodiacData[sign].rulingPlanets.modern; // or traditional if needed
            traits = zodiacData[sign].traits.male; // Choose 'female' or 'male' based on context
            break;
        }
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

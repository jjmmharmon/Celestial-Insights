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
        Aquarius: {
        dates: "January 20 – February 18",
        element: "Air",
        signType: "Masculine",
        rulingPlanets: {
            modern: "Uranus",
            traditional: "Saturn"
        },
        planetTraits: {
            Uranus: "Innovation, rebellion, change, progress.",
            Saturn: "Discipline, structure, responsibility."
        },
        traits: {
            female: "Unconventional, independent, humanitarian.",
            male: "Visionary, intellectual, socially aware."
        },
        compatibility: {
            bestMatches: ["Gemini", "Libra", "Sagittarius", "Aries"],
            possibleMatches: ["Aquarius", "Leo"],
            challengingMatches: ["Taurus", "Scorpio", "Capricorn", "Cancer", "Virgo"]
        }
    },

        traits = ['Unconventional', 'Independent', 'Humanitarian'];
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
       Pisces: {
        dates: "February 19 – March 20",
        element: "Water",
        signType: "Feminine",
        rulingPlanets: {
            modern: "Neptune",
            traditional: "Jupiter"
        },
        planetTraits: {
            Neptune: "Imagination, spirituality, dreams, intuition.",
            Jupiter: "Expansion, wisdom, optimism."
        },
        traits: {
            female: "Compassionate, artistic, empathetic.",
            male: "Gentle, imaginative, empathetic."
        },
        compatibility: {
            bestMatches: ["Cancer", "Scorpio", "Taurus", "Capricorn"],
            possibleMatches: ["Pisces", "Virgo"],
            challengingMatches: ["Gemini", "Sagittarius", "Leo", "Aquarius"]
        }
    },
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
     Aries: {
        dates: "March 21 – April 19",
        element: "Fire",
        signType: "Masculine",
        rulingPlanet: "Mars",
        planetTraits: {
            Mars: "Action, energy, assertiveness, courage, passion."
        },
        traits: {
            female: "Bold, independent, energetic.",
            male: "Assertive, competitive, passionate."
        },
        compatibility: {
            bestMatches: ["Leo", "Sagittarius", "Gemini", "Aquarius"],
            possibleMatches: ["Libra", "Taurus", "Scorpio"],
            challengingMatches: ["Cancer", "Capricorn", "Virgo", "Pisces"]
        }
    },
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
     Taurus: {
        dates: "April 20 – May 20",
        element: "Earth",
        signType: "Feminine",
        rulingPlanet: "Venus",
        planetTraits: {
            Venus: "Love, beauty, harmony, material wealth, comfort."
        },
        traits: {
            female: "Practical, patient, sensual.",
            male: "Steady, reliable, determined."
        },
        compatibility: {
            bestMatches: ["Virgo", "Capricorn", "Cancer", "Pisces"],
            possibleMatches: ["Scorpio", "Taurus", "Libra"],
            challengingMatches: ["Leo", "Aquarius", "Aries", "Sagittarius"]
        }
     },
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
   Gemini: {
        dates: "May 21 – June 20",
        element: "Air",
        signType: "Masculine",
        rulingPlanet: "Mercury",
        planetTraits: {
            Mercury: "Communication, intellect, adaptability, quick thinking."
        },
        traits: {
            female: "Social, intellectual, adaptable.",
            male: "Communicative, versatile, quick-thinking."
        },
        compatibility: {
            bestMatches: ["Libra", "Aquarius", "Aries", "Leo"],
            possibleMatches: ["Sagittarius", "Gemini"],
            challengingMatches: ["Virgo", "Pisces", "Taurus", "Scorpio"]
        }
    },
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    Cancer: {
        dates: "June 21 – July 22",
        element: "Water",
        signType: "Feminine",
        rulingPlanet: "Moon",
        planetTraits: {
            Moon: "Emotions, intuition, nurturing, deep emotional connections."
        },
        traits: {
            female: "Nurturing, intuitive, emotionally sensitive.",
            male: "Compassionate, protective, emotionally deep."
        },
        compatibility: {
            bestMatches: ["Scorpio", "Pisces", "Taurus", "Virgo"],
            possibleMatches: ["Capricorn", "Cancer"],
            challengingMatches: ["Aries", "Libra", "Gemini", "Sagittarius", "Aquarius"]
        }
    },
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    Leo: {
        dates: "July 23 – August 22",
        element: "Fire",
        signType: "Masculine",
        rulingPlanet: "Sun",
        planetTraits: {
            Sun: "Vitality, leadership, creativity, confidence."
        },
        traits: {
            female: "Charismatic, confident, dramatic.",
            male: "Ambitious, proud, strong."
        },
        compatibility: {
            bestMatches: ["Aries", "Sagittarius", "Gemini", "Libra"],
            possibleMatches: ["Leo", "Aquarius"],
            challengingMatches: ["Taurus", "Scorpio", "Capricorn", "Pisces"]
        }
    },
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
   Virgo: {
        dates: "August 23 – September 22",
        element: "Earth",
        signType: "Feminine",
        rulingPlanet: "Mercury",
        planetTraits: {
            Mercury: "Logic, communication, intellect, organization."
        },
        traits: {
            female: "Analytical, organized, detail-oriented.",
            male: "Methodical, responsible, efficient."
        },
        compatibility: {
            bestMatches: ["Taurus", "Capricorn", "Cancer", "Scorpio"],
            possibleMatches: ["Pisces", "Virgo"],
            challengingMatches: ["Gemini", "Sagittarius", "Leo", "Aries", "Aquarius"]
        }
    },
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    Libra: {
        dates: "September 23 – October 22",
        element: "Air",
        signType: "Masculine",
        rulingPlanet: "Venus",
        planetTraits: {
            Venus: "Harmony, love, beauty, balance, diplomacy."
        },
        traits: {
            female: "Diplomatic, social, charming.",
            male: "Sociable, cooperative, fair-minded."
        },
        compatibility: {
            bestMatches: ["Gemini", "Aquarius", "Leo", "Sagittarius"],
            possibleMatches: ["Aries", "Libra"],
            challengingMatches: ["Cancer", "Capricorn", "Taurus", "Scorpio"]
        }
    },
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
   Scorpio: {
        dates: "October 23 – November 21",
        element: "Water",
        signType: "Feminine",
        rulingPlanets: {
            modern: "Pluto",
            traditional: "Mars"
        },
        planetTraits: {
            Pluto: "Transformation, power, intensity, depth.",
            Mars: "Passion, action, drive, assertiveness."
        },
        traits: {
            female: "Intense, passionate, mysterious.",
            male: "Intense, driven, secretive."
        },
        compatibility: {
            bestMatches: ["Cancer", "Pisces", "Virgo", "Capricorn"],
            possibleMatches: ["Scorpio", "Taurus"],
            challengingMatches: ["Leo", "Aquarius", "Aries", "Gemini"]
        }
    },
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    Sagittarius: {
        dates: "November 22 – December 21",
        element: "Fire",
        signType: "Masculine",
        rulingPlanet: "Jupiter",
        planetTraits: {
            Jupiter: "Expansion, optimism, growth, wisdom."
        },
        traits: {
            female: "Adventurous, optimistic, free-spirited.",
            male: "Outgoing, philosophical, adventurous."
        },
        compatibility: {
            bestMatches: ["Leo", "Aries", "Libra", "Aquarius"],
            possibleMatches: ["Sagittarius", "Gemini"],
            challengingMatches: ["Virgo", "Pisces", "Taurus", "Cancer"]
        }
    },
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    Capricorn: {
        dates: "December 22 – January 19",
        element: "Earth",
        signType: "Feminine",
        rulingPlanet: "Saturn",
        planetTraits: {
            Saturn: "Discipline, structure, responsibility, long-term goals."
        },
        traits: {
            female: "Ambitious, disciplined, practical, goal-oriented.",
            male: "Determined, strategic, responsible."
        },
        compatibility: {
            bestMatches: ["Taurus", "Virgo", "Scorpio", "Pisces"],
            possibleMatches: ["Capricorn", "Cancer"],
            challengingMatches: ["Aries", "Libra", "Gemini", "Sagittarius"]
        }
    }
};
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

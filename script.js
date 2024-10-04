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

    // Zodiac signs data
    const zodiacSigns = {
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
        // Add the rest of the zodiac signs similarly...
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

    // Retrieve traits and other information from the zodiacSigns object
    if (zodiacSign) {
        const signData = zodiacSigns[zodiacSign];
        element = signData.element;
        signType = signData.signType;
        planet = signData.rulingPlanets.modern; // Or use traditional if needed
        traits = signData.traits.male; // Change to .female if you want traits for females
    }

    return { zodiacSign, luckyNumber, element, signType, planet, traits };
}

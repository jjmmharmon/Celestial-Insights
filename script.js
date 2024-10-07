document.addEventListener("DOMContentLoaded", function () {
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
                planetTraits: { 
                    Uranus: ["Transformation", "Rebellion", "Innovation"], 
                    Saturn: ["Discipline", "Structure", "Responsibility"] 
                },
                planetImpact: "Uranus gives Aquarius its forward-thinking mindset, while Saturn adds discipline and responsibility.",
                traits: { female: ["Unconventional", "Independent", "Humanitarian"], male: ["Visionary", "Intellectual", "Socially Aware"] }
            },
            Pisces: {
                dates: "February 19 – March 20",
                element: "Water",
                signType: "Feminine",
                rulingPlanets: { modern: "Neptune", traditional: "Jupiter" },
                planetTraits: {
                    Neptune: ["Imagination", "Spirituality", "Dreams", "Intuition"],
                    Jupiter: ["Expansion", "Wisdom", "Optimism"] 
                },
                planetImpact: "Neptune fuels Pisces' imagination and spirituality, while Jupiter brings optimism and philosophical thinking.",
                traits: { female: ["Compassionate", "Artistic", "Empathetic"], male: ["Gentle", "Imaginative", "Empathetic"] }
            },
            Aries: {
                dates: "March 21 – April 19",
                element: "Fire",
                signType: "Masculine",
                rulingPlanets: { modern: "Mars", traditional: "Mars" },
                planetTraits:{
                    Mars: ["Action", "Energy", "Assertiveness", "Courage", "Passion"]
                },
                planetImpact: "Mars gives Aries its boldness, competitiveness, and adventurous nature.",
                traits: { female: ["Bold", "Independent", "Energetic"], male: ["Assertive", "Competitive", "Passionate"] }
            },
            Taurus: {
                dates: "April 20 – May 20",
                element: "Earth",
                signType: "Feminine",
                rulingPlanets: { modern: "Venus", traditional: "Venus" },
                planetTraits:{
                    Venus: ["Love", "Beauty", "Harmony", "Material Wealth", "Comfort"]
                },
                planetImpact: "Venus brings sensuality, stability, and a love for comfort and nature.",
                traits: { female: ["Patient", "Reliable", "Loyal"], male: ["Determined", "Practical", "Sensual"] }
            },
            Gemini: {
                dates: "May 21 – June 20",
                element: "Air",
                signType: "Masculine",
                rulingPlanets: { modern: "Mercury", traditional: "Mercury" },
                planetTraits:{
                    Mercury: ["Communication", "Intellect", "Adaptability", "Quick Thinking"]
                },
                planetImpact: "Mercury fuels Gemini's sharp intellect, wit, and social adaptability.",
                traits: { female: ["Adaptable", "Intellectual", "Social"], male: ["Curious", "Versatile", "Witty"] }
            },
            // Add other zodiac signs here
        };

       let zodiacSign = "";
        let luckyNumber = calculateLuckyNumber(month, day, year);
        let element = "";
        let signType = "";
        let modernPlanet = "";
        let traditionalPlanet = "";
        let planetTraits = {};
        let planetImpact = "";
        let traits = [];

         let zodiacSign = "";
        let luckyNumber = Math.floor(Math.random() * 100) + 1; // Generate random lucky number between 1 and 100
      if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            zodiacSign = "Aquarius";
        } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
            zodiacSign = "Pisces";
        }
        else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
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

        // Fetch zodiac traits and planets
        if (zodiacSign) {
            const signData = zodiacData[zodiacSign];
            element = signData.element;
            signType = signData.signType;
            modernPlanet = signData.rulingPlanets.modern;
            traditionalPlanet = signData.rulingPlanets.traditional;
            planetTraits = signData.planetTraits;
            planetImpact = signData.planetImpact;
            traits = signData.traits.male; // Or female, based on preference
        }

        // Return all data
        return { zodiacSign, luckyNumber, element, signType, modernPlanet, traditionalPlanet, planetTraits, planetImpact, traits };
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
            document.getElementById('modern-planet').textContent = result.modernPlanet;
            document.getElementById('traditional-planet').textContent = result.traditionalPlanet;

            // Display planet traits grouped by planet
            const planetTraitsDiv = document.getElementById('planet-traits');
            planetTraitsDiv.innerHTML = ''; // Clear previous traits

            Object.keys(result.planetTraits).forEach(planet => {
                const planetName = document.createElement('h4');
                planetName.textContent = planet + ":";
                planetTraitsDiv.appendChild(planetName);

                result.planetTraits[planet].forEach(trait => {
                    const li = document.createElement('li');
                    li.textContent = trait;
                    planetTraitsDiv.appendChild(li);
                });
            });

            document.getElementById('planet-impact').textContent = result.planetImpact;

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
});

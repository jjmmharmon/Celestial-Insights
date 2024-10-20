
document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready."); // Check if the DOM is loaded

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
                    Uranus: ["Transformation", "Innovation", "Rebellion", "Vision"],
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
                planetTraits: {
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
                planetTraits: {
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
                planetTraits: {
                    Mercury: ["Communication", "Intellect", "Adaptability", "Quick Thinking"]
                },
                planetImpact: "Mercury fuels Gemini's sharp intellect, wit, and social adaptability.",
                traits: { female: ["Adaptable", "Intellectual", "Social"], male: ["Curious", "Versatile", "Witty"] }
            },
            Cancer: {
                dates: "June 21 – July 22",
                element: "Water",
                signType: "Feminine",
                rulingPlanets: { modern: "Moon", traditional: "Moon" },
                planetTraits: {
                    Moon: ["Emotions", "Intuition", "Deep Emotional Connections"]
                },
                planetImpact: "The Moon governs Cancer's emotional sensitivity, nurturing nature, and strong intuition.",
                traits: { female: ["Nurturing", "Emotional", "Intuitive"], male: ["Protective", "Sentimental", "Caring"] }
            },
            Leo: {
                dates: "July 23 – August 22",
                element: "Fire",
                signType: "Masculine",
                rulingPlanets: { modern: "Sun", traditional: "Sun" },
                planetTraits: {
                    Sun: ["Vitality", "Leadership", "Creativity", "Confidence"]
                },
                planetImpact: "The Sun fuels Leo's charisma, self-confidence, and desire to lead.",
                traits: { female: ["Confident", "Generous", "Dramatic"], male: ["Charismatic", "Ambitious", "Creative"] }
            },
            Virgo: {
                dates: "August 23 – September 22",
                element: "Earth",
                signType: "Feminine",
                rulingPlanets: { modern: "Mercury", traditional: "Mercury" },
                planetTraits: {
                    Mercury: ["Logic", "Communication", "Intellect", "Organization"]
                },
                planetImpact: "Mercury sharpens Virgo's analytical and detail-oriented mindset.",
                traits: { female: ["Analytical", "Practical", "Detail-Oriented"], male: ["Reliable", "Modest", "Perfectionist"] }
            },
            Libra: {
                dates: "September 23 – October 22",
                element: "Air",
                signType: "Masculine",
                rulingPlanets: { modern: "Venus", traditional: "Venus" },
                planetTraits: {
                    Venus: ["Harmony", "Love", "Beauty", "Balance", "Diplomacy"]
                },
                planetImpact: "Venus gives Libra its love for balance, fairness, and harmonious relationships.",
                traits: { female: ["Diplomatic", "Charming", "Idealistic"], male: ["Fair", "Balanced", "Sociable"] }
            },
            Scorpio: {
                dates: "October 23 – November 21",
                element: "Water",
                signType: "Feminine",
                rulingPlanets: { modern: "Pluto", traditional: "Mars" },
                planetTraits: {
                    Pluto: ["Transformation", "Power", "Intensity", "Depth"],
                    Mars: ["Passion", "Action", "Drive", "Assertiveness"]
                },
                planetImpact: "Pluto gives Scorpio depth and intensity, while Mars adds passion and determination.",
                traits: { female: ["Mysterious", "Passionate", "Resourceful"], male: ["Intense", "Loyal", "Strategic"] }
            },
            Sagittarius: {
                dates: "November 22 – December 21",
                element: "Fire",
                signType: "Masculine",
                rulingPlanets: { modern: "Jupiter", traditional: "Jupiter" },
                planetTraits: {
                    Jupiter: ["Expansion", "Optimism", "Growth", "Wisdom"]
                },
                planetImpact: "Jupiter inspires Sagittarius' love for adventure, optimism, and philosophical thinking.",
                traits: { female: ["Adventurous", "Optimistic", "Independent"], male: ["Philosophical", "Energetic", "Generous"] }
            },
            Capricorn: {
                dates: "December 22 – January 19",
                element: "Earth",
                signType: "Feminine",
                rulingPlanets: { modern: "Saturn", traditional: "Saturn" },
                planetTraits: {
                    Saturn: ["Discipline", "Structure", "Responsibility", "Long-Term Goals"]
                },
                planetImpact: "Saturn's influence makes Capricorn disciplined, goal-oriented, and practical.",
                traits: { female: ["Ambitious", "Disciplined", "Practical"], male: ["Determined", "Strategic", "Responsible"] }
            }
        };

        let zodiacSign = '';
        let luckyNumber = calculateLuckyNumber(month, day, year);
        let element = '';
        let signType = '';
        let modernPlanet = '';
        let traditionalPlanet = '';
        let planetTraits = {};
        let planetImpact = "";
        let traits = [];

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

        // Fetch zodiac traits and planets
        if (zodiacSign) {
            const signData = zodiacData[zodiacSign];
            element = signData.element;
            signType = signData.signType;
            modernPlanet = signData.rulingPlanets.modern;
            traditionalPlanet = signData.rulingPlanets.traditional;
            planetTraits = signData.planetTraits;
            planetImpact = signData.planetImpact;
            traits = signData.traits.male; // Or female, based on user choice
        }

return { zodiacSign, luckyNumber, element, signType, modernPlanet, traditionalPlanet, planetTraits, planetImpact, traits };
    }

    function calculateLuckyNumber(month, day, year) {
        const digits = (month + day + year).toString().split('');
        const total = digits.reduce((acc, digit) => acc + Number(digit), 0);
        return total % 9 === 0 ? 9 : total % 9; 
    }

    // Event listener for button click
    document.getElementById('yourButtonId').addEventListener('click', function() {
        const dob = document.getElementById('dobInput').value; // Get date of birth input
        const gender = document.querySelector('input[name="gender"]:checked').value; // Get selected gender

        // Get zodiac and traits based on DOB and gender
        const result = getZodiacAndTraits(dob, gender);
        
        // Output traits
        const traitsList = document.getElementById('traits');
        traitsList.innerHTML = ''; // Clear the list

        if (result.traits) {
            console.log("Traits data:", result.traits); // Log traits to see structure

            const maleTraits = result.traits.male || []; // Fallback to an empty array if undefined
            const femaleTraits = result.traits.female || []; // Fallback to an empty array if undefined

            console.log("Male Traits:", maleTraits); // Log male traits
            console.log("Female Traits:", femaleTraits); // Log female traits

            let selectedTraits = []; // Initialize the selectedTraits variable

            // Determine which traits to display based on gender
            if (gender === 'male') {
                selectedTraits = maleTraits; // Use male traits directly
            } else if (gender === 'female') {
                selectedTraits = femaleTraits; // Use female traits directly
            } else {
                // Combine male and female traits without duplication
                const combinedTraits = combinedTraits([maleTraits, femaleTraits]);
                selectedTraits = Array.from(combinedTraits); // Convert Set to Array
            }

            console.log("Selected Traits:", selectedTraits); // Log selected traits

            // Output selected traits
            if (Array.isArray(selectedTraits) && selectedTraits.length > 0) {
                selectedTraits.forEach(trait => {
                    const li = document.createElement('li');
                    li.textContent = trait;
                    traitsList.appendChild(li);
                });
            } else {
                console.warn("No traits available for the selected gender.");
                const li = document.createElement('li');
                li.textContent = "No traits available.";
                traitsList.appendChild(li);
            }
        } else {
            console.error("No traits data found in result."); // Log an error if traits are missing
        }
    });

});

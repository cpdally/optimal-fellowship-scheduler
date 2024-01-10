/**
 * Generates random availability times for people.
 * @param {number} numberOfPeople - The number of people to generate availability for.
 * @param {number} maxAvailableHours - The maximum number of available hours for each person.
 * @param {number} numberOfTimeSlots - The total number of time slots available.
 * @returns {Object} - An object representing the availability of people.
 */
function generateRandomAvailability(numberOfPeople, maxAvailableHours, numberOfTimeSlots) {
    const peopleTimes = {};

    for (let i = 1; i <= numberOfPeople; i++) {
        const personName = "Person " + i;
        const randomSet = new Set();

        // Generate a random number of available hours for each person
        const availableHours = Math.floor(Math.random() * maxAvailableHours) + 1;

        for (let j = 0; j < availableHours; j++) {
            const randomNumber = Math.floor(Math.random() * numberOfTimeSlots) + 1;
            randomSet.add(randomNumber);
        }

        peopleTimes[personName] = randomSet;
    }

    return peopleTimes;
}

module.exports = {
    generateRandomAvailability,
};

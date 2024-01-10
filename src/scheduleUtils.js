/**
 * Groups people based on the times they are available.
 * @param {Object} peopleTimes - An object representing the availability of people.
 * @returns {Object} - An object with times as keys and an array of people available at that time.
 */
function groupByTimes(peopleTimes) {
    const counts = {};

    // Populate counts object
    for (const person in peopleTimes) {
        const times = peopleTimes[person];
        for (const time of times) {
            if (!counts[time]) {
                counts[time] = [];
            }
            counts[time].push(person);
        }
    }

    return counts;
}

/**
 * Groups people using a greedy algorithm based on their availability times.
 * @param {Object} peopleTimes - An object representing the availability of people.
 * @returns {Object} - An object with times as keys and an array of grouped people at each time.
 */
function greedyGrouping(peopleTimes) {
    const timeGroups = groupByTimes(peopleTimes);
    const groupsResult = {};
    let toGroup = Object.keys(peopleTimes);

    while (toGroup.length > 0) {
        let maxTime = 0;
        let maxTimePeople = [];
        for (const time in timeGroups) {
            if (timeGroups[time].filter(person => toGroup.includes(person)).length > maxTimePeople.length) {
                maxTime = time;
                maxTimePeople = timeGroups[time].filter(person => toGroup.includes(person));
            }
        }

        toGroup = toGroup.filter(person => !maxTimePeople.includes(person));

        groupsResult[maxTime] = maxTimePeople;

        delete timeGroups[maxTime];
    }

    return groupsResult;
}

/**
 * Gets a random element from an array with optional bias.
 * @param {Array} arr - The array from which to choose a random element.
 * @param {number} biasProbability - Bias probability for choosing the last element.
 * @returns {*} - A randomly selected element from the array.
 */
function getRandomElement(arr, biasProbability = 0.9) {
    if (Math.random() < biasProbability) {
        return arr[arr.length - 1];
    } else {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}

/**
 * Groups people using a greedy algorithm with randomness based on their availability times.
 * @param {Object} peopleTimes - An object representing the availability of people.
 * @param {number} randomnessFactor - The factor determining the randomness in the grouping process.
 * @returns {Object} - An object with times as keys and an array of grouped people at each time.
 */
function greedyGroupingWithRandomness(peopleTimes, randomnessFactor = 0.9) {
    const timeGroups = groupByTimes(peopleTimes);
    const groupsResult = {};
    let toGroup = Object.keys(peopleTimes);

    while (toGroup.length > 0) {
        const sortedTimes = Object.keys(timeGroups).sort((timeA, timeB) => {
            const countA = timeGroups[timeA].filter(person => toGroup.includes(person)).length;
            const countB = timeGroups[timeB].filter(person => toGroup.includes(person)).length;
            return countB - countA;
        });

        const bestTime = sortedTimes[0];
        const secondBestTime = sortedTimes[1];
        const secondBestTimes = sortedTimes.filter(time =>
            timeGroups[time].filter(person => toGroup.includes(person)).length === timeGroups[secondBestTime].filter(person => toGroup.includes(person)).length
        );

        const selectedTime = getRandomElement([...secondBestTimes, bestTime], randomnessFactor);
        const selectedTimePeople = timeGroups[selectedTime].filter(person => toGroup.includes(person));

        toGroup = toGroup.filter(person => !selectedTimePeople.includes(person));

        groupsResult[selectedTime] = selectedTimePeople;

        delete timeGroups[selectedTime];
    }

    return groupsResult;
}

/**
 * Runs the greedyGroupingWithRandomness function multiple times to find the optimal schedule with the smallest number of times.
 * @param {Object} peopleTimes - An object representing the availability of people.
 * @param {number} randomnessFactor - The factor determining the randomness in the grouping process.
 * @param {number} iterations - The number of times to run the grouping algorithm.
 * @returns {Object} - The optimal schedule with the smallest number of times.
 */
function findOptimalSchedule(peopleTimes, randomnessFactor = 0.9, iterations = 1000) {
    let minTimes = Infinity;
    let optimalSchedule;

    for (let i = 0; i < iterations; i++) {
        const result = greedyGroupingWithRandomness(peopleTimes, randomnessFactor);
        const totalTimes = Object.keys(result).length;

        if (totalTimes < minTimes) {
            minTimes = totalTimes;
            optimalSchedule = result;
        }
    }

    return optimalSchedule;
}

module.exports = {
    groupByTimes,
    greedyGrouping,
    getRandomElement,
    greedyGroupingWithRandomness,
    findOptimalSchedule,
};
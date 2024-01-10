const { generateRandomAvailability } = require('../data/availabilityGenerator');
const { greedyGrouping, greedyGroupingWithRandomness, findOptimalSchedule } = require('../src/scheduleUtils');

function runBenchmark() {
    // These numbers can be adjusted to test different scenarios
    const numberOfPeople = 75;
    const maxAvailableHours = 84;
    const numberOfTimeSlots = 200;

    // Generate random availability data
    const peopleTimes = generateRandomAvailability(numberOfPeople, maxAvailableHours, numberOfTimeSlots);
    console.log("Generated Random Availability Data:", peopleTimes);

    // Benchmark Greedy Grouping
    const greedyGroupingStartTime = new Date();
    const greedyGroupingResult = greedyGrouping(peopleTimes);
    const greedyGroupingEndTime = new Date();
    const greedyGroupingTime = greedyGroupingEndTime - greedyGroupingStartTime;

    console.log("Greedy Grouping - Number of Groups:", Object.keys(greedyGroupingResult).length);
    console.log("Greedy Grouping Time:", greedyGroupingTime + "ms");
    console.log("Greedy Grouping Result:", greedyGroupingResult);

    // Benchmark Greedy Grouping with Randomness
    const greedyGroupingWithRandomnessStartTime = new Date();
    const greedyGroupingWithRandomnessResult = greedyGroupingWithRandomness(peopleTimes, 0.75);
    const greedyGroupingWithRandomnessEndTime = new Date();
    const greedyGroupingWithRandomnessTime = greedyGroupingWithRandomnessEndTime - greedyGroupingWithRandomnessStartTime;

    console.log("Greedy Grouping with Randomness - Number of Groups:", Object.keys(greedyGroupingWithRandomnessResult).length);
    console.log("Greedy Grouping with Randomness Time:", greedyGroupingWithRandomnessTime + "ms");
    console.log("Greedy Grouping with Randomness Result:", greedyGroupingWithRandomnessResult);

    // Benchmark Optimal Schedule
    const findOptimalScheduleStartTime = new Date();
    const optimalSchedule = findOptimalSchedule(peopleTimes, 0.9, 1000);
    const findOptimalScheduleEndTime = new Date();
    const findOptimalScheduleTime = findOptimalScheduleEndTime - findOptimalScheduleStartTime;

    console.log("Optimal Schedule - Number of Groups:", Object.keys(optimalSchedule).length);
    console.log("Optimal Schedule Time:", findOptimalScheduleTime + "ms");
    console.log("Optimal Schedule Result:", optimalSchedule);
}

runBenchmark();

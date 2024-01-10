# Optimal Fellowship Scheduler 📆

This project was born out of the need to schedule fellowships in an optimal manner for Effective Altruism UW-Madison. Due to data security reasons, no data or CSV parsing is provided, but the algorithmic solutions written in Javascript are shared here along with detailed examples.

## Problem Background 🤔

The challenge originated when attempting to efficiently schedule fellowships. The goal was to find optimal meeting times that minimize the number of needed cohorts given an array of different schedules.

## File Structure 📂

```plaintext
/optimal-fellowship-scheduler
│
├── /data
│   └── availabilityGenerator.js
│
├── /src
│   ├── scheduleUtils.js
│   │
│   └── intractability.md
│
├── /benchmark
│   └── scheduleTest.js
│
├── .gitignore
│
└── README.md
```
## Proof of Intractability 📑
This problem is actually NP-Hard. For those interested in the theoretical aspects, check out my proof of intractability in the intractability.md file.

## Algorithms Implemented 🚀

### 1. Greedy Algorithm
- A greedy approach that works well in most cases but may have limitations in certain edge cases.

### 2. Randomized Helper Algorithm
- A helper method for the optimization algorithm, injecting some randomness to explore alternative directions periodically.

### 3. Optimal Approximation Algorithm
- The optimal algorithm, providing an optimal approximation. It takes a bias factor, running the algorithm with randomness multiple times to find the best schedule.

## Running the Benchmark ✨

To benchmark the algorithms using Node.js, follow these steps:

1. Open your terminal.
2. Navigate to the project directory.
3. Run the following command:

```bash
node benchmark/scheduleTest.js
```

This command will execute the algorithms, display generated group schedules, and output the results, including execution times for each algorithm.

## Usage Examples 📚

```javascript
// Usage examples go here...
// const { generateRandomAvailability } = require('./data/availabilityGenerator');
// const { greedyGrouping, greedyGroupingWithRandomness, findOptimalSchedule } = require('./src/scheduleUtils');

// ... your code snippets ...
```


## Contributing 🛠️
This repository is not actively maintained, but feel free to explore, read the intractability proof, and reuse any algorithms provided.

## Disclaimer 🚫
This project is not intended for active contribution, but rather for sharing insights and algorithms. Good luck with your fellowship scheduling endeavors! 🌐

Note: Replace the code snippets in the "Usage Examples" section with actual examples demonstrating how to use your algorithms, considering the structure and functionalities of your code.
# Proof

## Problem Definitions

1. **Fellowship Scheduling Problem (FSP):** Given a group of people each represented by an array of times that they are available, the goal is to generate the smallest number of compatible groups where a valid group of people shares at least one common available time.

2. **Set Cover Problem (SCP):** Given a universe U of n elements, a collection of subsets of U, S={S1, S2, ..., Sm}, where every subset Si has an associated cost. Find a minimum cost subcollection of S that covers all elements of U.

## Our Goal

Our goal is to prove that the Fellowship Scheduling Problem (FSP) is NP-hard. We do this by showing that the well-known Set Cover Problem (SCP) is a special case of FSP, thus, any solution to FSP would also be a solution to SCP. Therefore, this implies that FSP must be at least as difficult as SCP.

## Reduction

Let's take the universe U in the SCP to be the "people" in the FSP. That is, each person i in the group is equivalent to an element i in U. 

Similarly, each subset in SCP corresponds to a "time slot" in FSP. Meaning each time slot Si represents a subset Si in SCP. Here's an example in python

```python
from collections import defaultdict 

# A group of people each represented by an array of times that they could attend the fellowship
people_times = {"Person 1": [1,2,3],
                "Person 2": [1,2],
                "Person 3": [2,3],
                "Person 4": [3, 4, 5]}

# Retrun a list of lists where the index of the list is the time and the value is a list of people who can attend at that time (Si)
def group_by_times(people_times):
    counts = defaultdict(list)
    for person, times in people_times.items():
        for time in times:
            counts[time].append(person)
    groups = [v for k, v in sorted(counts.items())]
    return groups

print(group_by_times(people_times))
```
```
Output: [['Person 1', 'Person 2'], ['Person 1', 'Person 2', 'Person 3'], ['Person 1', 'Person 3', 'Person 4'], ['Person 4'], ['Person 4']]
```

In FSP, forming a group is the equivalent of choosing a subset Si in SCP. Hence, forming the smallest number of valid groups in FSP is equivalent to finding the minimum cost subcollection of S that covers all elements of U in SCP.

Thus, we've mapped all elements of SCP to FSP. Consequently, if we can solve FSP, we have effectively solved SCP.

## Conclusion:

Since we've shown that SCP, which is known to be NP-Hard, is a special case of FSP, we can conclude that FSP is NP-Hard as well.
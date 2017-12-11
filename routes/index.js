var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send({ title: 'Complementary Pair Solution' });
});

router.post('/compute', (req, res, next) => {
  /**
   * arr: Array of random pair of elements
   * k: number for which need to k-complement in the given array
   */
  const { arr, k } = req.body;

  // initializing variables
  let i = 0;
  const desiredPairs = [];
  let count = 0;

  /* linear iteration on array and maintaining a hashmap 
   - kind of data in JSON to store desired complements for every elements
   in the Array
   - Incrementing the count if found the iteration element in the desired 
   element array
  */
  while (i < arr.length) {
    const comp = k - arr[i];
    if (desiredPairs[comp]) {
      count += desiredPairs[comp].length;
    }

    if (!desiredPairs[arr[i]]) {
      desiredPairs[arr[i]] = [i];
    } else {
      desiredPairs[arr[i]].push(i);
    }

    i += 1;
  }
  return res.send({ solution: count });
})

module.exports = router;
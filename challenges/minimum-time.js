/*
You are given an array time where time[i] denotes the time taken by the ith bus to complete one trip.

Each bus can make multiple trips successively; that is, the next trip can start immediately after completing the current trip. Also, each bus operates independently; that is, the trips of one bus do not influence the trips of any other bus.

You are also given an integer totalTrips, which denotes the number of trips all buses should make in total. Return the minimum time required for all buses to complete at least totalTrips trips.

I: time = [], totalTrips = number
O: minimum number of times it takes to complete at least totalTrips = number
C: none
E: none
*/

var minimumTime = function(time, totalTrips) {

  let total = 0;
  let trip = 1;

  while (total < totalTrips) {
    for (let i = 0; i < time.length; i++) {
      let busTime = time[i];
      if (trip % busTime === 0) {
        total += 1;
      }
    }
    if (total >= totalTrips) {
      return trip;
    }
    trip += 1;
  }

  return -1;
}
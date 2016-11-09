const assert = require('assert');
function weekOrWeekend(day){
  if(day.startsWith('S') === true){
    return 'weekend';
  }
  else {
    return 'week';
  }
}
// after you declared the function
assert.equal(weekOrWeekend('Wednesday'), 'week');
assert.equal(weekOrWeekend('Sunday'), 'weekend');

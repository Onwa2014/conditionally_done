const assert = require('assert');

function fromWhere(regNumber){
  if(regNumber.startsWith('CY') === true){
    return 'Bellville'
  }
  else if(regNumber.startsWith('CA') === true){
    return 'Cape Town'
  }
  else if(regNumber.startsWith('CJ') === true){
    return 'Paarl'
  }
  else {
    return 'Some other place!'
  }

}

assert.equal(fromWhere('CJ 1234'),'Paarl');
assert.equal(fromWhere('ND 67891'),'Some other place!');
assert.equal(fromWhere('CA 662 345'),'Cape Town');

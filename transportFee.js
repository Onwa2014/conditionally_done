const assert = require(assert);
 var transportFee = function(shift){
   if(shift === morning){
     return 'R20'
   }
   else if(shift === afternoon){
     return 'R10'
   }
   else {
     return 'Transport is provided'
   }
 }
assert.equal(transportFee(morning),'R20')
assert.equal(transportFee(night),'Transport is provided' )

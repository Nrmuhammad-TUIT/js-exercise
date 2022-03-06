var numbers = [1,3,0,5,0,7,0];

var arr = [];

function zeroEnd(numbers) {
   for (var num of numbers) {
      if (num % 2 !== 0 ) {
         arr.push();
      }
   }


for (var num of numbers) {
   if (num == 0) {
      arr.push(num)
   }

}

return arr;

}

console.log(zeroEnd(numbers));

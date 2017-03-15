
// spread operator    :calculate('add', 34, 56, 12, 7 );
function calculate(action, ... values){

    var total = 0;
    for( var value of values){
        switch(action){
            case 'add':
               total += value;
               break
            case 'subtract':
                total -= value;
                break;  
        }
    }
    return total;
}



var source = [ 5, 6, 7, 8, ];
var numberSystem = [1, 2, 3, 4, ...source, 9 ];





// destructuring
function swapIt(a, b){
      [a, b] = [b,a];
   return {
         console.log("a is :" +  a + " b is :" + b);
   }  
}
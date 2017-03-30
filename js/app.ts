
// spread operator    :calculate('add', 34, 56, 12, 7 );
function calculate(action, ...values) {

    var total = 0;
    for (var value of values) {
        switch (action) {
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



var source = [5, 6, 7, 8,];
var numberSystem = [1, 2, 3, 4, ...source, 9];

//var big = (x > 10) ? true : false;



// destructuring
function swapIt(a, b) {
    [a, b] = [b, a];
    return

}


//  specifying js types in typescript

function totalLenght(x: (string | any[]), y: (string | any[])): number {
    var total: number = x.length + y.length;


    //to access array methods  
    if (x instanceof Array) {

        x.push('abc');
    }
    

    // to access string methods 

    if( typeof x === 'string'){

      alert( x.toLocaleUpperCase());
    }


    return total;
} 


// interfaces in typescript


interface Todo{

      name: string;
      completed?:boolean;

    //question mark makes the completed property optional
}

interface ITodoService{
    add(todo :Todo):Todo;
    delete(todoId:number):void;
    getAll():Todo[];
    getById(todoId:number):Todo;
   //function getById takes parameter todoId(which is anumber) and returns Todo 
}

 
var todo:Todo = {
    name:"stephen njau"
};


interface jQuery{
     (selector: (string | any)): HTMLElement;
     version: number;
     fn:any;
}

var $ = <jQuery>function(selector){
   // find DOM element
}

$.version =1.12;

var element = $('#container');


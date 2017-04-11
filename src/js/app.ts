
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
       id: number;
      name: (string | any);
       state :  TodoState;

    //question mark makes the completed property optional
}

//enums in typescript

enum TodoState {

    New = 1,
    Active,
    Complete,
    Deleted
}

interface ITodoService{
    add(todo :Todo):Todo;
    delete(todoId:number):void;
    getAll():Todo[];
    getById(todoId:number):Todo;
   //function getById takes parameter todoId(which is anumber) and returns Todo 
}

 
var todo = {
    name:"stephen njau",
    get state(){
        return this._state;
    },
    set state(newState){

        this._state = newState;
    }
};


class TodoStateChanger {

    constructor (private newState: TodoState){

    }
    canChangeState (todo: Todo) : boolean{
         return !!todo;
    }
    changeState ( todo: Todo) : Todo {
          if(this.canChangeState(todo)){
              todo.state = this.newState;
          }
          return todo;
    }


}

class CompleteTodoStateChanger extends TodoStateChanger{
       
        constructor (){
            super(TodoState.complete);
        }
        canChangeState (todo: Todo) : boolean{
            return super.canChangeState(todo) && (

                todo.state == TodoState.Active ||
                todo.state == TodoState.Deleted
            )
        }


}


//  class defination 

class TodoServices implements ITodoService{
           
       private static _lastId : number = 0;


       get nextId() {

           return TodoServices._lastId +=1;
       }
       constructor(private todos: Todo[]){

       }
       
       add(todo: Todo){
           todo.id = this.nextId;
           this.todos.push(todo);

           return todo;
       }


       delete(todoId: number) : void{
             var toDelete = this.getById(todoId);

             var deletedIndex = this.todos.indexOf(toDelete);

             this.todos.splice(deletedIndex, 1);
            

       }
        getAll():Todo[]{
             var clone = JSON.stringify(this.todos)
             return JSON.parse(clone);
        }

      getById(todoId: number): Todo{
              var filtered = 
                   this.todos.filter( x => x.id == todoId );
                //  filter through all Todos(array of todo items) and return and array of todos where the id matches ;

             if(filtered.length) {
                 return filtered[0];
             }     
             return null;
      }
     
}












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


$.fn.todo - function(todo?:Todo): Todo{
    if(todo){

    }else{
        return $(this).data('todo');
    }

}

//default and optional parameters

function buildName(firstName:string, lastName = "Kiiru", ...otherNames:string[]){
       return firstName + " " +  otherNames.join(" ") + lastName;

}




//  inheritance Class Animal and class Snake

class Animal {

       name: string; //name property
     constructor(theName : string){
            this.name = theName;
     }
     move( distanceInMeters: number= 0){

         console.log(`${this.name} moved ${distanceInMeters}m.`);
              }

}
  
//  snake extends Animals class
  class snake extends Animal{
        
        constructor(name:string){
            super(name);
        }
        move(distanceInMeters = 5){

            console.log("Slithering ...");
            super.move(distanceInMeters);
        }

  }

  class dog extends snake{
       constructor(name:string){
               super(name);
       }
       move(distanceInMeters = 10){
           console.log("running ...");
           super.move(distanceInMeters);
       }
  }




     






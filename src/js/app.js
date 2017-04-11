var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// spread operator    :calculate('add', 34, 56, 12, 7 );
function calculate(action) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value = values_1[_a];
        switch (action) {
            case 'add':
                total += value;
                break;
            case 'subtract':
                total -= value;
                break;
        }
    }
    return total;
}
var source = [5, 6, 7, 8,];
var numberSystem = [1, 2, 3, 4].concat(source, [9]);
//var big = (x > 10) ? true : false;
// destructuring
function swapIt(a, b) {
    _a = [b, a], a = _a[0], b = _a[1];
    return;
    var _a;
}
//  specifying js types in typescript
function totalLenght(x, y) {
    var total = x.length + y.length;
    //to access array methods  
    if (x instanceof Array) {
        x.push('abc');
    }
    // to access string methods 
    if (typeof x === 'string') {
        alert(x.toLocaleUpperCase());
    }
    return total;
}
//enums in typescript
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
var todo = {
    name: "stephen njau",
    get state() {
        return this._state;
    },
    set state(newState) {
        this._state = newState;
    }
};
var TodoStateChanger = (function () {
    function TodoStateChanger(newState) {
        this.newState = newState;
    }
    TodoStateChanger.prototype.canChangeState = function (todo) {
        return !!todo;
    };
    TodoStateChanger.prototype.changeState = function (todo) {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    };
    return TodoStateChanger;
}());
var CompleteTodoStateChanger = (function (_super) {
    __extends(CompleteTodoStateChanger, _super);
    function CompleteTodoStateChanger() {
        return _super.call(this, TodoState.complete) || this;
    }
    CompleteTodoStateChanger.prototype.canChangeState = function (todo) {
        return _super.prototype.canChangeState.call(this, todo) && (todo.state == TodoState.Active ||
            todo.state == TodoState.Deleted);
    };
    return CompleteTodoStateChanger;
}(TodoStateChanger));
//  class defination 
var TodoServices = (function () {
    function TodoServices(todos) {
        this.todos = todos;
    }
    Object.defineProperty(TodoServices.prototype, "nextId", {
        get: function () {
            return TodoServices._lastId += 1;
        },
        enumerable: true,
        configurable: true
    });
    TodoServices.prototype.add = function (todo) {
        todo.id = this.nextId;
        this.todos.push(todo);
        return todo;
    };
    TodoServices.prototype["delete"] = function (todoId) {
        var toDelete = this.getById(todoId);
        var deletedIndex = this.todos.indexOf(toDelete);
        this.todos.splice(deletedIndex, 1);
    };
    TodoServices.prototype.getAll = function () {
        var clone = JSON.stringify(this.todos);
        return JSON.parse(clone);
    };
    TodoServices.prototype.getById = function (todoId) {
        var filtered = this.todos.filter(function (x) { return x.id == todoId; });
        //  filter through all Todos(array of todo items) and return and array of todos where the id matches ;
        if (filtered.length) {
            return filtered[0];
        }
        return null;
    };
    return TodoServices;
}());
TodoServices._lastId = 0;
var $ = function (selector) {
    // find DOM element
};
$.version = 1.12;
var element = $('#container');
$.fn.todo - function (todo) {
    if (todo) {
    }
    else {
        return $(this).data('todo');
    }
};
//default and optional parameters
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Kiiru"; }
    var otherNames = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherNames[_i - 2] = arguments[_i];
    }
    return firstName + " " + otherNames.join(" ") + lastName;
}
//  inheritance Class Animal and class Snake
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
//  snake extends Animals class
var snake = (function (_super) {
    __extends(snake, _super);
    function snake(name) {
        return _super.call(this, name) || this;
    }
    snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering ...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return snake;
}(Animal));
var dog = (function (_super) {
    __extends(dog, _super);
    function dog(name) {
        return _super.call(this, name) || this;
    }
    dog.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 10; }
        console.log("running ...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return dog;
}(snake));

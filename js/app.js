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
// destructuring
function swapIt(a, b) {
    _a = [b, a], a = _a[0], b = _a[1];
    return {
        console: .log("a is :" + a + " b is :" + b)
    };
    var _a;
}

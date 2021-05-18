// declaration
function add(x: number, y: number, z?: number) {
    if (typeof z === 'number'){
        return x + y + z;
    } else {
        return x + y;
    }
}

let result = add(2, 3, 4);

// expression
const add2 = function(x: number, y: number, z: number = 10) {
    if (typeof z === 'number'){
        return x + y + z;
    } else {
        return x + y;
    }
}

const add3: (x: number, y: number, z: number) => number = add;

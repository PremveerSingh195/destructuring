function swapvalue(x,y) {
    [x,y] = [y,x]

    return [x,y]
}

let a = 10;
let b = 7;

[a,b] = swapvalue(a,b)

console.log(a,b);
function minmax(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)

    const findingminmax = {
        minimum : min,
        maximum : max
    } 

    return findingminmax;
}

const array = [4,8,2,54,324,435,856,34,6897,243,25,465,7,6]

const object = minmax(array)

console.log(object);
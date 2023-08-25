function uniqueitems(arr) {
    const myset = new Set(arr);
    

    return myset;
}


const listOfarray = [23, 65, 76,23 ,76 ,49 ,91 ,56, 39 ,52]

const newset = uniqueitems(listOfarray)

console.log(newset);
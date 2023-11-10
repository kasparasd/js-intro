const skaiciai = [10,2,8,4,6];


const vidurkis = skaiciai.reduce((acc, curr) => acc + curr)/skaiciai.length;

// console.log(vidurkis);



function mediana(arr){
    const sort = arr.sort((a,b)=>a-b)
    console.log(sort);

    // console.log(sort[sort.length/2]);
    // console.log(sort[sort.length/2-1]);
    if(sort.length % 3 !== 0){
        return sort[Math.floor(sort.length/2)]
    }
    else {
        return (sort[sort.length/2] + sort[sort.length/2-1])/2
    }
}

console.log(mediana([10,2,8,4,6,7]));
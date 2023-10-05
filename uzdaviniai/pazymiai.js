function marksAverage(marks){

    if(!Array.isArray(marks)){
        return 'Error: duok masyva';
    }

    if(marks.length<1){
        return 'Error: tuscias masyvas'
    }

    let sum = 0;
    let marksCorrect = 0;
    for (let i = 0; i < marks.length; i++) {
        if (typeof marks[i] !== 'number' 
            || marks[i] % 1 !==0
            || marks[i]>10 
            || marks[i]<1 
            ){
            continue;
    }
        sum += marks[i];
        marksCorrect++
    }
    
    const avg = sum/marksCorrect;
    return marksCorrect ? avg : 'Neiskaityta';
}
console.log(marksAverage([]))
console.log(marksAverage('ne masyvas'))
console.log(marksAverage(['a','b','1']))
// console.log(marksAverage([-10,NaN, Infinity, -Infinity,-2,10,2,3.14,8,2.727,0,80,99,120, 4,6, '', 'lo', false,null,undefined]));


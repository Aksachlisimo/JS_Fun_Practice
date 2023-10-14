const identity = (x) => {
    return x;
}

const addb = (a,b) => {
    return a+b;
}

const subb = (a,b) => {
    return a - b ;
}

const mulb = (a,b) => {
    return a * b;
}

const minb = (a,b) => {
    if ( a < b) {
        return a
       }   else {
            return b;
        }
}

const maxb = (a,b) => {
    if(a > b){
        return a;
    } else {
        return b;
    }
}


const addRecurse = (...nums) => {

 return nums.reduce((a, b)=> a + b);  // reduce is used to sum all the numbers in an array
}

const mulRecurse = (...nums) => nums.reduce((a,b) => a - b);

const minRecurse = (...nums) => nums.reduce((a,b) => a<b ? a:b);
// this will take two arguments and compare them using conditional statements then it returns whichever one of those values are lesser

const maxRecurse = (...nums) => nums.reduce((a,b)=> a >b ? a :b );

const not = func => (arg) => 
!(func(arg));

//code test

// const isLarger = (number) => number > 7 ;

// const test = not(isLarger);

// console.log(isLarger(5));


// a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result

  const acc = (func,initial) => {
        const accumulate = (n) => {
            if (n<=0) {
                return initial;
            } else {
                return func(accumulate(n -1));
            }
        }
    return accumulate;

  }

  const accPartial = (func, start, end) => {
        if (start >= end ) {
            return start;
    } else {
        return func(end);
    }
  }
  return accumulate;

























module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb,
    add,
    sub,
    mul,
    min,
    max,
    addRecurse,
    mulRecurse,
    minRecurse,
    maxRecurse,
    not,
    acc,
    accPartial,
    accRecurse,
    fill,
    fillRecurse,
    set,
    identityf,
    addf,
    liftf,
    pure,
    curryb,
    curry,
    inc,
    twiceUnary,
    doubl,
    square,
    twice,
    reverseb,
    reverse,
    composeuTwo,
    composeu,
    composeb,
    composeTwo,
    compose,
    limitb,
    limit,
    genFrom,
    genTo,
    genFromTo,
    elementGen,
    element,
    collect,
    filter,
    filterTail,
    concatTwo,
    concat,
    concatTail,
    gensymf,
    gensymff,
    fibonaccif,
    counter,
    revocableb,
    revocable,
    extract,
    m,
    addmTwo,
    addm,
    liftmbM,
    liftmb,
    liftm,
    exp,
    expn,
    addg,
    liftg,
    arrayg,
    continuizeu,
    continuize,
    vector,
    exploitVector,
    vectorSafe,
    pubsub,
    mapRecurse,
    filterRecurse,
};
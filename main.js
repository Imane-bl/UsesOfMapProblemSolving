//probelm solving practice map 
let swappinCases="elZERo";//inverse upper->lower/lower->upper
let n=invertnmbr=[1,-10,-20,15,100,-30];//+ - inverse the signe of numbrs
let ib="Elz123er4o";//elimnate numbers


1//
// we sholde return array thats why we use split
//and the join for join our caracthere
// the idea that if the elment is capital we ruturn  element in lower case
// else  in uppercase
let sw=swappinCases
.split("")
.map(function(elm){
    //cond? true :false
return elm === elm.toUpperCase() ? elm.toLowerCase() : elm.toUpperCase();

}).join("");//bcs its array so  we join it
console.log(sw);

//Arrow function version 
let swaf =swappinCases
.split("")
.map((elm) => (elm === elm.toUpperCase() ? elm.toLowerCase() : elm.toUpperCase()))
.join("");
console.log(swaf);

//----------------------------------------------------------------------------



2//the idea is just when we have negative elm with negative one it
// give us a positive one 
let inb=invertnmbr.map(function(elm){
return -elm// - - = +
//athor solution elm > 0 ? elm : elm< 0 ? -elm : '';
});
console.log(inb);
//Arrow function version 
let inbaf=invertnmbr.map((elm)=> -elm);
    console.log(inbaf);


//----------------------------------------------------------------------------

3//
let ignorenmbr= ib.split("").map(function(elm){
return isNaN(parseInt(elm)) ?  elm: '';
}).join("");
console.log(ignorenmbr);
//Arrow function version 

let ignorenmbraf= ib.split("").map((elm)=> isNaN(parseInt(elm)) ?  elm: '').join("");
    console.log(ignorenmbraf);

//----------------------------------------------------------------------------

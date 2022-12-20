/*
let a=[800,500,600,700,1200,1000,1300,550]

function price(a){
    return (a>500&&1000>=a)
}
document.write(a.filter(price))
*/

let price=[800,500,600,700,1200,1000,1300,550,700]
console.log(price)
let result=price.filter(function(prices){
    return prices>=500 && prices<=1000;
});
console.log(result);
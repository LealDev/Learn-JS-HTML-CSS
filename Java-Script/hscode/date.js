let agora = new Date();

console.log(agora.getDate(), (agora.getMonth()+1), agora.getFullYear());

let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}]

carros.forEach(function(value, index){
    console.log(index, value)
});

carros.forEach(index => {
    let agora = new Date();
    
    console.log(agora.getDate(), (agora.getMonth()+1), agora.getFullYear());
    
    let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}]
});
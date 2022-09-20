let calc = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
}

let resultado = calc(5, 2,"*");
console.log(resultado);
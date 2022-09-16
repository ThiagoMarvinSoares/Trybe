const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

//array in crescent order

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => { 
  const sortOddsEvens = array.sort((a, b) => a - b);
  return sortOddsEvens
}
const result = sortOddsAndEvens(oddsAndEvens);
console.log(result);

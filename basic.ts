function add(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
) {
  let result = n1 + n2;
  if (showResult) {
    console.log(resultPhrase + result);
  }
  return n1 + n2;
}

const printResult = true;
const resultPhrase = "The result is: ";

add(1, 2, printResult, resultPhrase);

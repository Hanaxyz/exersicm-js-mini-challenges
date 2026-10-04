// @ts-check


export function cardTypeCheck(stack, card) {
  let count = 0;

  stack.forEach((currentCard) => {
    if (currentCard === card) {
      count++;
    }
  });

  return count;
}

export function determineOddEvenCards(stack, type) {
  let count = 0;

  stack.forEach((card) => {
    if (type) {
      if (card % 2 === 0) {
        count++;
      }
    } else {
      if (card % 2 !== 0) {
        count++;
      }
    }
  });

  return count;
}
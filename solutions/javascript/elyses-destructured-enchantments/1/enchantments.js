/// <reference path="./global.d.ts" />
// @ts-check

export function getFirstCard(deck) {
  const [a,b,c]=deck;
 return  a;
  
}


export function getSecondCard(deck) {
  const [a,b,c]=deck;
  return b;
}


export function swapTwoCards(deck) {

  const [a,b]=deck;
  return [b,a];
  
}


export function shiftThreeCardsAround(deck) {
   const [a,b,c]=deck;
  return [b,c,a];
   
}


export function pickNamedPile(piles) {
  return piles.chosen;
 
}

export function swapNamedPile({ chosen, disregarded }) {
  return { chosen: disregarded, disregarded: chosen };
}

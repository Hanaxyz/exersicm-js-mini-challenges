
export function getListOfWagons(...everythingElse) {
  return everythingElse;
}


export function fixListOfWagons(ids) {
const [p1,p2,...rest]=ids;
  return [...rest,p1,p2];
}


export function correctListOfWagons(ids, missingWagons) {
  const[first, ...rest]=ids;
  return [first,...missingWagons,...rest];

}

export function extendRouteInformation(information, additional) {
  return {...information,...additional}
  
}


export function separateTimeOfArrival(information) {
 const { timeOfArrival, ...rest } = information;
return [timeOfArrival, rest];
  
}

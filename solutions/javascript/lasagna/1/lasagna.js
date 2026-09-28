
// Good luck preparing some lasagna!

export const PREPARATION_MINUTES_PER_LAYER = 2;

   export const EXPECTED_MINUTES_IN_OVEN =40;




export function remainingMinutesInOven(actualMinutesInOven) {
 const Rtime= EXPECTED_MINUTES_IN_OVEN-actualMinutesInOven;
  return Rtime;
}


export function preparationTimeInMinutes(numberOfLayers) {
 const  PrepMins= numberOfLayers*PREPARATION_MINUTES_PER_LAYER;
  return PrepMins;
}


export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  const total=preparationTimeInMinutes(numberOfLayers) +actualMinutesInOven;
  return total ;
  
}

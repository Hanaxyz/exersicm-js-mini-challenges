
// Now help Annalyn free her best friend!

export const knightIsAwake = true;
export const archerIsAwake = true;
export const prisonerIsAwake = true;
export const petDogIsPresent = true;


export function canExecuteFastAttack(knightIsAwake) {
  if (!knightIsAwake){return  true;}

  else{ return false;}
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if(knightIsAwake ||archerIsAwake || prisonerIsAwake){return true;} 
  // at least (or)
   else{ return false;}
  
}


export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if(!archerIsAwake && prisonerIsAwake){return true;}
  else{ return false;}
}


export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
 if((!knightIsAwake && !archerIsAwake && prisonerIsAwake)||( petDogIsPresent &&!archerIsAwake)){return true;}
   else{ return false;}
}

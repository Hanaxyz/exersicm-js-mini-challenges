
//
// Good luck with that door policy!


export function frontDoorResponse(line) {
    const FirstLetter=line.slice(0,1);

    return FirstLetter ;
     
}


export function frontDoorPassword(word) {
  const lowC=word.toLowerCase().slice(1);
  const firstLetter=word[0].toUpperCase();
  return firstLetter+lowC;
}


export function backDoorResponse(line) {

  const lastLetter=line.trim().split(/\s/).at(-1).at(-1);
  return lastLetter
    
    
  
  
  
}


export function backDoorPassword(word) {
    
    
    const last=word.slice(0,1).toUpperCase()+word.slice(1)+','+' please';
     
    return last;
   
}

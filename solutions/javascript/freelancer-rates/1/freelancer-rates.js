
//
// Get those rates calculated!


export function dayRate(ratePerHour) {
  const drate=ratePerHour*8;
  return drate;
}

export function daysInBudget(budget, ratePerHour) {
  const numOfHours=budget/ratePerHour;
  const numOfdays=Math.floor(numOfHours/8);
  return numOfdays;
  
  
  
}


export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {

  const months=Math.floor(numDays/22);
  const days=numDays%22;
  const monthsPrice=months*22*dayRate(ratePerHour)*(1-discount);
  
  const daysPrice=days*dayRate(ratePerHour);
  const total=Math.ceil(monthsPrice+daysPrice);
  return total;
  
 
  
  
  
}

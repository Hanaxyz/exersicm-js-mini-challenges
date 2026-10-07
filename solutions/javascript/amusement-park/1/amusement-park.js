/// <reference path="./global.d.ts" />
// @ts-check


export function createVisitor(name, age, ticketId) {
  return {
    name: name,
    age: age,
    ticketId: ticketId
  };
}

export function revokeTicket(visitor) {
   visitor.ticketId=null;
  return visitor;
}


export function ticketStatus(tickets, ticketId) {
  const state=tickets[ticketId];
  if(state===undefined){
    return 'unknown ticket id';
  }
  else if(state===null){return 'not sold';}
  else{return `sold to ${state}`;}
  
}

export function simpleTicketStatus(tickets, ticketId) {
    const visitorName = tickets[ticketId];
    if (visitorName === null || visitorName === undefined){return 'invalid ticket !!!';
  }
  else{return visitorName};
}


export function gtcVersion(visitor) {
 return visitor.gtc?. version;
  
  
}

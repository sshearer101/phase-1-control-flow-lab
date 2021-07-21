function scuberGreetingForFeet(number){

  if (number <= 400) {
    return 'This one is on me!'
  }
  else if (number < 2500 & number > 2000) {
    return 'I will gladly take your thirty bucks.'
   }
   else {
    return 'No can do.'
   }
 }

function ternaryCheckCity(city){
  const newYork = city == 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return newYork
}

function switchOnCharmFromTip(money){
  let tipMoney;

  switch (money) {
    case "generous":
      tipMoney = "Thank you so much."
      break;
    case "not as generous":
      tipMoney = "Thank you."
      break;
    default:
      tipMoney = "Bye."
      
  }
  return tipMoney
}


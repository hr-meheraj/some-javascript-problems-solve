// Problem : 1 =>
function anaToVori(ana) {
const vori = ana / 16;
return vori;
}
anaToVori(48);
// Problem : 2 =>
function pandaCost(singaraAmount, somuchaAmount, zilapiAmount) {
const singaraPrice = 7;
const somuchaPrice = 10;
const zilapiPrice = 15;
const singaraTotal = singaraPrice * Math.abs(singaraAmount);
const somuchaTotal = somuchaPrice * Math.abs(somuchaAmount);
const zilapiTotal = zilapiPrice * Math.abs(zilapiAmount);
const totalCost = singaraTotal + somuchaTotal + zilapiTotal;
return totalCost;
}
//console.log(pandaCost(-5,3,8));
pandaCost();
// Problem : 3 =>
function picnicBudget(peopleAmountNumber) {
const peopleAmount = Math.abs(peopleAmountNumber);
let total = 0;
if (peopleAmount <= 100) {
total += peopleAmount * 5000;
} else if (peopleAmount > 100 && peopleAmount <= 200) {
total += 100 * 5000;
total += (peopleAmount - 100) * 4000;
} else {
const firstHundred = 100 * 5000;
const SecondHundred = 100 * 4000;
total += firstHundred + SecondHundred;
total += (peopleAmount - 200) * 3000;
}
return total;
}
//console.log(picnicBudget(-234))
picnicBudget(232);
// Problem : 4 =>
function oddFriend(friends) {
for (let friend in friends ) {
const friendStrLength = friends[friend].length;
if (friendStrLength % 2 == !0) {
return friends[friend];
}
}
}
//console.log(oddFriend(["Jhankar","Habib","Mahbub","Meheraj","Examiner"]));
oddFriend();

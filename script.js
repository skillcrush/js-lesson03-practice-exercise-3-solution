var chocolate = Number(
  prompt("How many chocolate pieces would you like? Choose 0 to 10.")
);
var leftoverChocolate = 10 - chocolate;

if (leftoverChocolate === 10) {
  alert("You didn't want any chocolate?");
} else if (leftoverChocolate >= 6) {
  alert(
    `There are ${leftoverChocolate} pieces of chocolate left. Still have lots!!`
  );
} else if (leftoverChocolate >= 1) {
  alert(`There's ${leftoverChocolate} pieces of chocolate left. Getting low!`);
} else {
  alert("You ate all the chocolate. Yum!");
}

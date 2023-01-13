// TODO: Handle user input of initial bill value
// TODO: Handle user selection of the gratuity, both default and custom values
// TODO: Handle user input of number of people to split the bill between
// TODO: Handle calculation of tip per person and total bill per person
// TODO: Handle resetting the calculator
// TODO: Handle appropriate styling for gratuities
// -> If a pre-set gratuity is selected, it should appear active.
// -> If no a pre-set gratuity is selected, or the user is providing a custom tip,
//    the buttons should NOT have appear active
// TODO: Handle appropriate styling for reset btn
// -> If there has been no value calculated, the reset btn should not work
// -> If the tips have been calculated, the reset btn should work

// Note: The elements needed have been queried for you here
// ** Query elements
const bill = document.getElementById('bill');
const gratuityBtn = document.querySelectorAll('.gratuity');
const customGratuity = document.getElementById('custom-gratuity');
const people = document.getElementById('people');
const splitTip = document.getElementById('split-tip');
const splitTotal = document.getElementById('split-total');
const resetBtn = document.getElementById('reset');

// ** Your work goes below here
customGratuity.addEventListener('input', customTipValue);
people.addEventListener('input', peopleValue);
resetBtn.addEventListener('click', handleReset);
bill.addEventListener('click', billAmount);

splitTip.innerHTML = '$' + (0.0).toFixed(2);
splitTotal.innerHTML = '$' + (0.0).toFixed(2);


let billValue = 0;
let peopleValue = 1;
let tipValue = 0.15;



function  billAmount(){
if(bill.value.includes(',')){
  bill.value.replace(',','.')
}
billValue = parseFloat(bill.value);
calculateAmount()
console.log(billValue);
}


gratuityBtn.forEach(gratuity => {
  gratuity.addEventListener('click',handleClick);
});

function handleClick(event){
  gratuityBtn.forEach(gratuity => {
    gratuity.classList.remove('active');
    if(event.target.innerHTML === gratuity.innerHTML){
      gratuity.classList.add('active');
      tipValue = parseFloat(gratuity.innerHTML)/100
      console.log(tipValue);

    }
    custom-gratuity.value === '';
    calculateAmount()
}
}

 function calculateAmount(){
  if(peopleValue >= 1) {
    let tipAmount = billValue * tipValue / peopleValue;
    let total = billValue * (tipAmount + 1) / peopleValue;

    splitTip.innerHTML = '$' + tipAmount.toFixed(2);
    splitTotal.innerHTML = '$' + total.toFixed(2);
  }
 }

 function customTipValue(){
  tipValue = parseFloat(custom-gratuity.value/100);
  gratuityBtn.forEach(gratuity => {
gratuity.classlist.remove('active');
  })
  if(custom-gratuity.value !== 0){
    calculateAmount();
  }
  console.log(tipValue);
}


  function handleReset(){
    bill.value = 0.0;
    billAmount();

    gratuityBtn[2].click();
    people.value = 1;
    setPeopleValue();
  }



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
let billValue = 0;
let peopleValue = 1;
let tipValue = 0.15;

bill.addEventListener{'input',validateBill};

function validateBill(){
if(InputDeviceInfo.value.includes(',')){
  input.value.replace(',','.')
}
billValue = parseFloat(input.value);
calculate()
console.log(billValue);
}
customGratuity.addEventListener('input', customGratuity);
people.addEventListener('input', peopleValue);
resetBtn.addEventListener('click', handleReset);

gratuityBtn.forEach(btn => {
  btn.addEventListener('click',handleClick);
});

function handleClick(event){
  gratuityBtn.forEach(btn => {
    btn.classList.remove('active');
    if(event.target.innerHTML === btn.innerHTML){
      btn.classList.add('active');
      tipValue = parseFloat(btn.innerHTML)/100
      console.log(tipValue);

    })
    custom-gratuity.value='';
    calculate()
}
function customTipValue(){
  tipValue = parseFloat(custom-gratuity.value/100);
  button.forEach(btn => {
btn.classlist.remove('active');
  })
  if(custom-gratuity.value !== 0){
    calculate();
  }
  console.log(tipValue);
}






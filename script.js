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
bill.value = '';
customGratuity.value = '';
people.value = parseFloat('1');
let tipPercent = parseFloat('15');
let seperateAmount = parseFloat('');
let tip = parseFloat('').toFixed(2);
let price = parseFloat('').toFixed(2);
let total = parseFloat('').toFixed(2);

gratuityBtn.forEach((button) => {
  button.addEventListener('click', (event) => {
    gratuityBtn.forEach((btn) => {
      btn.classList.remove('active');
      button.classList.add('active');
      customGratuity.value = '';
      if (button.classList.contains('active')) {
        tipPercent = button.value;
        getValues();
        updateDisplay();
      }
    });
    resetBtn.disabled = false;
  });
});

function getValues() {
  price = bill.value / people.value;
  tip = price * (tipPercent / 100);
  total = price + tip;
  splitTotal =
}

function updateDisplay() {
  splitTip.innerHTML = parseFloat(tip).toFixed(2);
  splitPrice.innerHTML = parseFloat(price).toFixed(2);
  splitTotal.innerHTML = parseFloat(total).toFixed(2);
}

bill.addEventListener('change', (event) => {
  bill.value = parseFloat(bill.value).toFixed(2);
  getValues();
});

people.addEventListener('change', (event) => {
  people.value = people.value;
  getValues();
});

customGratuity.addEventListener('click', (event) => {
  gratuityBtn.forEach((tipBtn) => {
    tipBtn.classList.remove('active');
  });
});

customGratuity.addEventListener('change', (event) => {
  tipPercent = customGratuity.value;
  getValues();
  updateDisplay();
});

window.addEventListener('change', (event) => {
  resetBtn.disabled = false;
  getValues();
  updateDisplay();
});

resetBtn.addEventListener('click', (event) => {
  if (resetBtn.disabled === false) {
    bill.value = '';
    customGratuity.value = '';
    people.value = '1';
    splitTip.innerHTML = '$ 0.00';
    splitPrice.innerHTML = '$ 0.00';
    splitTotal.innerHTML = '$ 0.00';
    tipPercent = '15';
    gratuityBtn.forEach((tipButton) => {
      tipButton.classList.remove('active');
    });
    gratuityBtn[2].classList.add('active');
    resetBtn.disabled = true;
  }
});

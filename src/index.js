// prepare document selectors
const form = document.getElementById("tip-form");
const bill = document.getElementById("bill-amount");
const tip = document.getElementById("tip-amount");
const final = document.getElementById("final-tip");

// input event listener
form.addEventListener("submit", getOutputValues);

// get bill + tip
function getOutputValues(e) {
  e.preventDefault();
  const bill_amt = Number(bill.value);
  const tip_pct = Number(tip.value);

  // calculate total
  const total = bill_amt * (1 + tip_pct);

  // determine output
  // check for edge cases (blank, non-numerals)
  let output;
  if (!total || tip_pct <= 0 || bill_amt <= 0)
    output =
      "Please check if all your inputs are correct (non-negative, numerals, filled, etc.)";
  else output = `Your Final Tip: ${total.toFixed(2)}`;

  // output onto HTML
  final.innerHTML = output;

  // reset calculator
  bill.value = null;
  tip.value = null;
}

// Tip Splitter: computes the tip, the total and each person's share.

/**
 * Split a bill between people, including a tip.
 * @param {number} bill - bill amount before tip
 * @param {number} tipPercent - tip as a percentage (10 = 10%)
 * @param {number} people - number of people sharing (at least 1)
 * @returns {{tip: number, total: number, perPerson: number}}
 */
function splitBill(bill, tipPercent, people) {
  if (bill < 0 || tipPercent < 0 || people < 1) {
    throw new Error("Bill and tip must be >= 0 and people >= 1");
  }
  const tip = bill * (tipPercent / 100);
  const total = bill + tip;
  console.log("splitBill", { bill, tipPercent, people, total });
  return { tip, total, perPerson: total / people };
}

/**
 * Round an amount up to the next multiple of `step` (e.g. 437 -> 440 with step 10).
 * Handy when friends pay in cash and nobody has coins.
 * @param {number} amount
 * @param {number} [step=10]
 * @returns {number}
 */
function roundUpTo(amount, step = 10) {
  return Math.ceil(amount / step) * step;
}

/** Format a number as Indian rupees, e.g. 440 -> "₹440.00". */
function formatRupees(amount) {
  return "₹" + amount.toFixed(2);
}

document.getElementById("tip-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const bill = Number(document.getElementById("bill").value);
  const tipPercent = Number(document.getElementById("tip").value);
  const people = Number(document.getElementById("people").value);
  const roundUp = document.getElementById("round-up").checked;
  const result = document.getElementById("result");

  try {
    const { tip, total, perPerson: exact } = splitBill(bill, tipPercent, people);
    const perPerson = roundUp ? roundUpTo(exact) : exact;
    result.innerHTML =
      `Tip: ${formatRupees(tip)}<br>` +
      `Total: ${formatRupees(total)}<br>` +
      `Each person pays: <strong>${formatRupees(perPerson)}</strong>`;
  } catch (err) {
    result.textContent = err.message;
  }
});

// Reset: restore the default values and clear the result.
document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("tip-form").reset();
  document.getElementById("result").textContent = "";
});

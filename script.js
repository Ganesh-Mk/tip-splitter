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
  return { tip, total, perPerson: total / people };
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
  const result = document.getElementById("result");

  try {
    const { tip, total, perPerson } = splitBill(bill, tipPercent, people);
    result.innerHTML =
      `Tip: ${formatRupees(tip)}<br>` +
      `Total: ${formatRupees(total)}<br>` +
      `Each person pays: <strong>${formatRupees(perPerson)}</strong>`;
  } catch (err) {
    result.textContent = err.message;
  }
});

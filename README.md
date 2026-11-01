# Tip Splitter

A tiny static web page that splits a restaurant bill and tip between friends.
It's a test project for Docify: connect this repo, push a change, and watch the docs update.

## Run it

No build step. Open `index.html` in a browser.

## Files

| File | What it does |
|---|---|
| `index.html` | The form: bill amount, tip %, number of people |
| `styles.css` | Card layout and styling |
| `script.js` | `splitBill()` does the maths; `roundUpTo()` rounds a share up; `formatRupees()` formats the result |

## Example

A bill of ₹1200 with a 10% tip, split between 3 people, comes to ₹440.00 each.

## Rounding

Shares are shown to 2 decimal places (paise). The last person may pay a paisa more or less when the total does not split evenly.

## Round up

Tick **Round each share up to the next ₹10** to make cash payments easy: ₹437 becomes ₹440.

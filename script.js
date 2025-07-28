function calculateChange() {
  const bill = Number(document.getElementById('bill-amount').value);
  const cash = Number(document.getElementById('cash-given').value);
  const message = document.getElementById('message');
  const changeOutput = document.getElementById('change-output');
  const changeTable = document.getElementById('change-table');

  message.innerText = "";
  changeOutput.innerHTML = "";
  changeTable.classList.add('hidden');

  if (bill <= 0 || cash <= 0) {
    message.innerText = "Please enter valid amounts.";
    return;
  }

  if (cash < bill) {
    message.innerText = "Cash given is less than the bill amount!";
    return;
  }

  let change = cash - bill;
  const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

  denominations.forEach(denom => {
    const noteCount = Math.floor(change / denom);
    if (noteCount > 0) {
      const row = `<tr><td>₹${denom}</td><td>${noteCount}</td></tr>`;
      changeOutput.innerHTML += row;
      change = change % denom;
    }
  });

  if (cash === bill) {
    message.innerText = "No change needed.";
  } else {
    changeTable.classList.remove('hidden');
  }
}

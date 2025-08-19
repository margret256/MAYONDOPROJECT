
  // Function to calculate total cost
  function calculateTotalCost(quantity, unitPrice) {
    const transportFee = 5000;
    let subTotal = quantity * unitPrice;
    return subTotal + transportFee;
  }

  // Handle form submission
  document.getElementById('stockForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values
    let productName = document.getElementById('productName').value;
    let quantity = parseInt(document.getElementById('quantity').value);
    let price = parseInt(document.getElementById('price').value);

    // Calculate total with transport fee
    let total = calculateTotalCost(quantity, price);

    // Insert new row into table
    let table = document.getElementById('productTable');
    let newRow = table.insertRow(-1);

    newRow.insertCell(0).innerHTML = productName;
    newRow.insertCell(1).innerHTML = quantity;
    newRow.insertCell(2).innerHTML = price.toLocaleString() + " UGX";
    newRow.insertCell(3).innerHTML = total.toLocaleString() + " UGX";

    // Show success message
    document.getElementById('message').innerText = productName + " added successfully!";

    // Reset form
    document.getElementById('stockForm').reset();
  });

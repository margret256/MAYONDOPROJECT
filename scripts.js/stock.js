  
    const quantityInput = document.getElementById('quantity');
    const priceInput = document.getElementById('pricePerItem');
    const transportInput = document.getElementById('transport');
    const totalDisplay = document.getElementById('totalDisplay');
    const salesTableBody = document.querySelector('#salesTable tbody');

    function updateTotal() {
      const qty = parseInt(quantityInput.value) || 0;
      const price = parseFloat(priceInput.value) || 0;
      let total = qty * price;
      if (transportInput.value === 'yes') total *= 1.05;
      totalDisplay.textContent = `UGX ${total.toLocaleString()}`;
    }

    quantityInput.addEventListener('input', updateTotal);
    priceInput.addEventListener('input', updateTotal);
    transportInput.addEventListener('change', updateTotal);

    document.getElementById('salesForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const sale = {
        customerName: document.getElementById('customerName').value,
        productName: document.getElementById('productName').value,
        productType: document.getElementById('productType').value,
        quantity: document.getElementById('quantity').value,
        pricePerItem: document.getElementById('pricePerItem').value,
        transport: document.getElementById('transport').value,
        paymentType: document.getElementById('paymentType').value,
        salesAgent: document.getElementById('salesAgent').value,
        saleDate: document.getElementById('saleDate').value
      };

      let total = parseInt(sale.quantity) * parseFloat(sale.pricePerItem);
      if (sale.transport === 'yes') total *= 1.05;
      sale.totalPrice = total;

      let allSales = JSON.parse(localStorage.getItem('mwfSales')) || [];
      allSales.push(sale);
      localStorage.setItem('mwfSales', JSON.stringify(allSales));

      alert('Sale recorded successfully!');
      this.reset();
      updateTotal();
      displaySales();
    });

    function displaySales() {
      const sales = JSON.parse(localStorage.getItem('mwfSales')) || [];
      salesTableBody.innerHTML = '';

      sales.forEach(sale => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${sale.customerName}</td>
          <td>${sale.productName}</td>
          <td>${sale.productType}</td>
          <td>${sale.quantity}</td>
          <td>UGX ${parseInt(sale.totalPrice).toLocaleString()}</td>
          <td>${sale.paymentType}</td>
          <td>${sale.saleDate}</td>
        `;
        salesTableBody.appendChild(row);
      });
    }

    window.onload = displaySales;
  
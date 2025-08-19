  
    document.getElementById('stockForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const stockData = {
        productName: document.getElementById('productName').value,
        productType: document.getElementById('productType').value,
        costPrice: document.getElementById('costPrice').value,
        sellingPrice: document.getElementById('sellingPrice').value,
        quantity: document.getElementById('quantity').value,
        supplierName: document.getElementById('supplierName').value,
        quality: document.getElementById('quality').value,
        color: document.getElementById('color').value,
        measurements: document.getElementById('measurements').value,
        dateAdded: document.getElementById('dateAdded').value
      };

      // Get existing stock data from localStorage
      let existingStock = JSON.parse(localStorage.getItem('mwfStock')) || [];

      // Add new item
      existingStock.push(stockData);

      // Save back to localStorage
      localStorage.setItem('mwfStock', JSON.stringify(existingStock));

      alert('Product added to stock!');
      this.reset();
    });
  
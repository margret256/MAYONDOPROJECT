
     const customerTables = [
       { name: "Customer 1", product: "6-Seater Sofa", quantity: 1, cost: "UGX 950,000" },
       { name: "Customer 2", product: "Dining Table", quantity: 2, cost: "UGX 1,200,000" },
       { name: "Customer 3", product: "Wardrobe", quantity: 1, cost: "UGX 700,000" },
       { name: "Customer 4", product: "Coffee Table", quantity: 3, cost: "UGX 300,000" },
       { name: "Customer 5", product: "Single Bed", quantity: 2, cost: "UGX 800,000" },
       { name: "Customer 6", product: "Office Desk", quantity: 1, cost: "UGX 600,000" },
       { name: "Customer 7", product: "Bookshelf", quantity: 4, cost: "UGX 1,000,000" },
       { name: "Customer 8", product: "Shoe Rack", quantity: 2, cost: "UGX 250,000" }
     ];
 
     customerTables.forEach((item, index) => {
       document.write(`
         <h3>${item.name}</h3>
         <table class="product-table">
           <thead>
             <tr>
               <th>Product Type</th>
               <th>Quantity</th>
               <th>Cost</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>${item.product}</td>
               <td>${item.quantity}</td>
               <td>${item.cost}</td>
             </tr>
           </tbody>
         </table>
       `);
     });
   
 
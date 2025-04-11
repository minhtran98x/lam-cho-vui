const express = require("express");

const router = express.Router(); // Create a new router instance

// routes/admin.js
router.get("/add-product", (req, res) => {
  res.send(`
      <form id="product-form">
        <input type="text" name="title" id="title-input" />
        <button type="submit">Add Product</button>
      </form>
  
      <script>
        document.getElementById("product-form").addEventListener("submit", async function (e) {
          e.preventDefault(); // prevent default form submission
  
          const title = document.getElementById("title-input").value;
  
          const response = await fetch('/admin/product', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
          });
  
          const data = await response.json();
          console.log("Server response:", data);
          alert("✅ Product sent: " + data.data.title);
        });
      </script>
    `);
});

router.post("/product", (req, res) => {
  console.log("POST /admin/product", req.body);
  res.json({ message: "Product received", data: req.body });
});

module.exports = router; // Export the router instance

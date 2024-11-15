const id = new URLSearchParams(window.location.search).get("id");
const url = id
  ? `https://striveschool-api.herokuapp.com/api/product/${id}`
  : "https://striveschool-api.herokuapp.com/api/product/";
const method = id ? "PUT" : "POST";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWU4NzhhZDEyOTAwMTU4NzZjNjAiLCJpYXQiOjE3MzE2NjU1NTMsImV4cCI6MTczMjg3NTE1M30.wWySxZitja9gHHTIOwKDsZzK8g8gvsGLVou6A092fgI";

const handleSubmit = (e) => {
  e.preventDefault();

  const newProduct = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("image").value,
    price: document.getElementById("prezzo").value
  };

  fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify(newProduct)
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Errore nella richiesta: ${response.statusText}`);
      }
    })
    .then((newProduct) => {
      console.log(newProduct);
      form.reset();
    })
    .catch((error) => {
      console.error("Errore:", error);
    });
};

window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");

  form.onsubmit = handleSubmit;
  resetBtn.onclick = function () {
    form.reset();
  };
});

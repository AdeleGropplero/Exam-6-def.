const url = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWU4NzhhZDEyOTAwMTU4NzZjNjAiLCJpYXQiOjE3MzE2NjU1NTMsImV4cCI6MTczMjg3NTE1M30.wWySxZitja9gHHTIOwKDsZzK8g8gvsGLVou6A092fgI";

const handleSubmit = function (e) {
  e.preventDefault();

  const product = {
    name: form.elements.name.value,
    description: form.elements.description.value,
    brand: form.elements.brand.value,
    imageUrl: form.elements.img.value,
    price: form.elements.price.value
  };

  fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  })
    .then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(".ok = false");
      }
    })
    .then((product) => {
      console.log(product);

      form.reset();
    })
    .catch((error) => {
      console.error("Errore:", error);
    });
};

window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.onsubmit = handleSubmit;
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* const id = new URLSearchParams(window.location.search).get("id");
const url = id
  ? `https://striveschool-api.herokuapp.com/api/product/${id}`
  : "https://striveschool-api.herokuapp.com/api/product/";
const method = id ? "PUT" : "POST";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWU4NzhhZDEyOTAwMTU4NzZjNjAiLCJpYXQiOjE3MzE2NjU1NTMsImV4cCI6MTczMjg3NTE1M30.wWySxZitja9gHHTIOwKDsZzK8g8gvsGLVou6A092fgI";

const handleSubmit = (e) => {
  e.preventDefault();

  const product = {
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
    body: JSON.stringify(product)
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
 */

const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWU4NzhhZDEyOTAwMTU4NzZjNjAiLCJpYXQiOjE3MzE2NjU1NTMsImV4cCI6MTczMjg3NTE1M30.wWySxZitja9gHHTIOwKDsZzK8g8gvsGLVou6A092fgI";
const id = new URLSearchParams(window.location.search).get("id");
const url = id
  ? `https://striveschool-api.herokuapp.com/api/product/${id}`
  : "https://striveschool-api.herokuapp.com/api/product/";
const method = id ? "PUT" : "POST";

const handleSubmit = function (e) {
  e.preventDefault();

  const product = {
    name: form.elements.name.value,
    description: form.elements.description.value,
    /* longDescription: form.elements.longDescription.value,  qui ho provato ad aggiungere una proprietà che si vedsse solo nella pagina dei details ma non ce l'ho fatta*/
    brand: form.elements.brand.value,
    imageUrl: form.elements.img.value,
    price: form.elements.price.value
  };

  fetch(url, {
    method,
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

const fillModify = (product) => {
  form.elements.name.value = product.name;
  form.elements.description.value = product.description;
  /*  form.elements.longDescription.value = product.longDescription; */
  form.elements.brand.value = product.brand;
  form.elements.img.value = product.imageUrl;
  form.elements.price.value = product.price;
};

/* const fillModifyDetail = () => {
  document.getElementById("longDescription").value;
}; */

window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");

  form.onsubmit = handleSubmit;

  form.onsubmit = handleSubmit;
  resetBtn.onclick = function () {
    form.reset();
  };

  if (id) {
    const h1 = document.querySelector("h1");
    h1.innerText = "BackOffice - Modifica";

    saveBtn.innerText = "Modifica";
    saveBtn.onclick = () => {
      window.location.href = "/homepage.html";
    };

    fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Non siamo riusciti a recuperare i dati");
        }
      })
      .then((product) => {
        console.log(product);
        fillModify(product);
        /* fillModifyDetail(); */
      })
      .catch((err) => {
        console.error("Errore nel recupero del prodotto:", err);
      });
  }
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

const url = "https://striveschool-api.herokuapp.com/api/product/";

const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWU4NzhhZDEyOTAwMTU4NzZjNjAiLCJpYXQiOjE3MzE2NjU1NTMsImV4cCI6MTczMjg3NTE1M30.wWySxZitja9gHHTIOwKDsZzK8g8gvsGLVou6A092fgI";

const retriveProducts = () => {
  fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          "Non abbiamo recuperato i dati. Errore:",
          response.statusText
        );
      }
    })
    .then((products) => {
      console.log(products);

      products.forEach((product) => {
        const row = document.getElementById("card-row");

        const col = document.createElement("div");
        col.className = "col g-4 ";

        const card = document.createElement("div");
        card.className = "card h-100";
        /* card.style */

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = product.imageUrl;
        img.alt = product.name;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = product.name;

        const brand = document.createElement("p");
        brand.className = "card-text";
        brand.innerText = `Brand: ${product.brand}`;

        const price = document.createElement("p");
        price.className = "card-text";
        price.innerText = `Price: $ ${product.price}`;

        const description = document.createElement("p");
        description.className = "card-text";
        description.innerText = product.description;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger";
        deleteBtn.innerText = "Delete";

        const modifyBtn = document.createElement("a");
        modifyBtn.className = "btn btn-secondary";
        modifyBtn.innerText = "modifica";

        row.appendChild(col);
        col.appendChild(card);
        card.append(img, cardBody);
        cardBody.append(
          cardTitle,
          brand,
          price,
          description,
          deleteBtn,
          modifyBtn
        );
      });
    })
    .catch((err) => console.log(err));
};

window.addEventListener("DOMContentLoaded", function () {
  retriveProducts();
});

/* const id = new URLSearchParams(window.location.search).get("_id");
const url = id
  ? `https://striveschool-api.herokuapp.com/api/product/${id}`
  : "https://striveschool-api.herokuapp.com/api/product/";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWU4NzhhZDEyOTAwMTU4NzZjNjAiLCJpYXQiOjE3MzE2NjU1NTMsImV4cCI6MTczMjg3NTE1M30.wWySxZitja9gHHTIOwKDsZzK8g8gvsGLVou6A092fgI";

const getProductFromApi = function () {
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Errore nella richiesta: ${response.statusText}`);
      }
    })
    .then((products) => {
      console.log("Prodotti ricevuti:", products);
      // Creare le card per ogni prodotto
      products.forEach((product) => createProductCard(product));
    })
    .catch((error) => {
      console.error("Errore:", error);
    });
};

const createProductCard = function (newProduct) {
  const row = document.getElementById("cardsRow");

  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = newProduct.imageUrl;
  image.alt = newProduct.name;
  image.className = "card-img-top";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const name = document.createElement("h5");
  name.className = "card-title";
  name.innerText = newProduct.name;

  const description = document.createElement("p");
  description.className = "card-text";
  description.innerText = newProduct.description;

  const brand = document.createElement("p");
  brand.className = "card-text";
  brand.innerText = `Brand: ${newProduct.brand}`;

  const price = document.createElement("p");
  price.className = "card-text";
  price.innerText = `Price: $${newProduct.price}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger";
  deleteBtn.innerText = "Elimina prodotto";
  deleteBtn.dataset.id = newProduct._id;

  const modifyBtn = document.createElement("a");
  modifyBtn.className = "btn btn-warning";
  modifyBtn.innerText = "modifica";
  /* window.location.href = `backoffice.html?id=${newProduct._id}`; */
/*  
  col.appendChild(card);
  row.appendChild(col);
  card.appendChild(image);
  card.appendChild(cardBody);
  cardBody.appendChild(name);
  cardBody.appendChild(description);
  cardBody.appendChild(brand);
  cardBody.appendChild(price);
  cardBody.appendChild(deleteBtn);
  cardBody.appendChild(modifyBtn);

  deleteBtn.onclick = (e) => {
    const hasConfirmed = confirm("Sei sicuro di voler eliminare il prodotto?");

    if (hasConfirmed) {
      const id = e.target.dataset.id; // Recupera l'id dal data attribute
      const URL = `https://striveschool-api.herokuapp.com/api/product/${id}`;

      fetch(URL, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Errore nella cancellazione");
          }
        })
        .then((deletedProduct) => {
          alert(`Prodotto eliminato`);
          col.remove();
        })
        .catch((err) => console.log(err));
    }
  };
};

window.addEventListener("DOMContentLoaded", function () {
  getProductFromApi();
});
 */

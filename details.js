const id = new URLSearchParams(window.location.search).get("id");
const url = `https://striveschool-api.herokuapp.com/api/product/${id}`;
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWU4NzhhZDEyOTAwMTU4NzZjNjAiLCJpYXQiOjE3MzE2NjU1NTMsImV4cCI6MTczMjg3NTE1M30.wWySxZitja9gHHTIOwKDsZzK8g8gvsGLVou6A092fgI";

const getDescription = () => {
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
        throw new Error(".ok = false");
      }
    })
    .then((detail) => {
      console.log(detail);

      const row = document.getElementById("details-row");

      const col = document.createElement("div");
      col.className = "col g-4 ";

      const card = document.createElement("div");
      card.className = "card h-100";

      const linkDetails = document.createElement("a");
      linkDetails.href = `./details.html?id=${detail._id}`;

      const img = document.createElement("img");
      img.className = "card-img-top";
      img.src = detail.imageUrl;
      img.alt = detail.name;

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.innerText = detail.name;

      const brand = document.createElement("p");
      brand.className = "card-text";
      brand.innerText = `Brand: ${detail.brand}`;

      const price = document.createElement("p");
      price.className = "card-text";
      price.innerText = `Price: $ ${detail.price}`;

      const description = document.createElement("p");
      description.className = "card-text";
      description.innerText = detail.description;

      /*       const longDescription = document.createElement("p");
      description.className = "card-text";
      description.innerText = detail.longDescription; */

      const modifyBtn = document.createElement("a");
      modifyBtn.className = "btn btn-secondary";
      modifyBtn.innerText = "modifica";

      row.appendChild(col);
      col.appendChild(card);
      card.append(linkDetails, cardBody);
      linkDetails.appendChild(img);
      cardBody.append(
        cardTitle,
        brand,
        price,
        description,
        /* longDescription, */
        modifyBtn
      );

      modifyBtn.onclick = () => {
        console.log(detail._id);
        modifyBtn.href = `./backoffice.html?id=${detail._id}`;
      };
    });
};

window.addEventListener("DOMContentLoaded", function () {
  getDescription();
});

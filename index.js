const url = "https://api.pexels.com/v1/search?query=tuning";

let container = document.querySelector(".container");

const fetchImg = () =>
  fetch(url, {
    headers: {
      Authorization: "uBscJgR5eVpNNLMT35cCsW1jmNIT9ubZV3wlX458JKnNJxPeWTkiNNHT",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      container.innerHTML = data.photos
        .map((photo) => {
          return `<div class="col-4">
      <div class="card">
      <img src="${photo.src.medium}" class="card-img-top" alt="${"immagine"}">
      <div class="card-body">
      <h4>${photo.photographer}</h4>
        <p class="card-text">${photo.alt}</p>
      </div>
    </div>
    </div>`;
        })
        .join("");
    })
    .catch((err) => console.error(err));

fetchImg();

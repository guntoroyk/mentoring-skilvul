const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = (username) => {};

elFormUsername.onsubmit = (e) => {
  e.preventDefault();

  elCard.classList.remove("d-none");
  elCardImg.src = "https://via.placeholder.com/150";
};

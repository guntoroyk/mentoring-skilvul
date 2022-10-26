const form = document.querySelector("form");

const IMGBBKey = "1291f4ebb9e5737346f47cd3039e80da";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const uploadElement = document.getElementById("file");

  const file = uploadElement.files[0];

  const payload = new FormData();
  payload.append("key", IMGBBKey);
  payload.append("image", file);

  // fetch("https://api.imgbb.com/1/upload", {
  //   method: "POST",
  //   body: payload,
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log("data", data))
  //   .catch((err) => console.log("error", err));

  try {
    const res = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: payload,
    });

    const data = await res.json();

    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
});

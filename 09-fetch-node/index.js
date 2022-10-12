import fetch from "node-fetch";

const GITHUB_TOKEN = "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";

// const getGitHubUser = async (username) => {
//   try {
//     if (username === "") {
//       return null;
//     }

//     const result = await fetch(`https://api.github.com/users/${username}`);
//     const data = await result.json();

//     if (data.message) {
//       return data.message;
//     }

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

const getGitHubUser = (username) => {
  // return fetch(`https://api.github.com/users/${username}`)
  //   .then((result) => result.json())
  //   .then((data) => {
  //     if (data.message) {
  //       return Promise.resolve(data.message);
  //     } else {
  //       return Promise.resolve(data);
  //     }
  //   })
  //   .catch((error) => {
  //     console.log("error", error);
  //     return Promise.reject(error);
  //   });

  if (username === "") {
    return Promise.resolve(null);
  }

  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.message) {
          resolve(data.message);
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        console.log("error", error);
        reject(error);
      });
  });
};
const printGitHubUser = async () => {
  const mojombo = await getGitHubUser("guntoroyk");
  const orange = await getGitHubUser("");
  const rudiTabuti = await getGitHubUser("rudi.tabuti");

  console.log(mojombo); // Object
  console.log(orange); /// null
  console.log(rudiTabuti); // Not Found
};

printGitHubUser();

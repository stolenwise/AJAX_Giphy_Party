console.log("Let's get this party started!");
const button = document.getElementById("button");
const search = document.getElementById("search");
const clear = document.getElementById("clear");
console.log("first one");

// element ID for the button
//get handler on the ID for the click event
// callAPI();
button.addEventListener("click", async (event) => {
  event.preventDefault(); // Prevents form submission
  let obj = await callAPI();
  showImages(obj);
});
console.log("hello");
clear.addEventListener("click", () => {
  const gifContainer = document.getElementById("gifContainer");
  gifContainer.innerHTML = ""; //Clears all the Gifs
  console.log("cleared");
});

//get the text input, get the element ID for the search text, get the innerText value
function getSearchText(obj) {
  console.log("getsearch");
  let result = obj.value;
  console.log(result);
  return result;
}
//call the API Giphy using something in the Axios library
async function callAPI() {
  console.log("callAPI");
  let searchText = getSearchText(search);
  let response = await axios.get(
    "http://api.giphy.com/v1/gifs/search?q=" +
      encodeURIComponent(searchText) +
      "&api_key=uux3IXO4XEeOTPwuObXvrvA2veU31dvB"
  );

  console.log("callAPI resp=", response);
  //     $("#card").html(response.data);
  //   }
  return response;
}

function showImages(response) {
  const gifContainer = document.getElementById("gifContainer"); // Assuming you have a container div for the GIFs
  gifContainer.innerHTML = ""; // Clear previous results

  response.data.data.forEach((gif) => {
    const img = document.createElement("img");
    img.src = gif.images.fixed_height.url; // Use a fixed height URL
    gifContainer.appendChild(img);
  });
}
//how do i use this axios library and to call the API?
//then figure out where in the API call do i put my damn search text
//the API is going return something (hopefully a gif)
//and figure out how to have that display on page

/* show ajax result directly in card box */

// async function getCard() {
//   let response = await axios.get(
//     "http://api.giphy.com/v1/gifs/search?q=" +
//       input +
//       "&api_key=uux3IXO4XEeOTPwuObXvrvA2veU31dvB"
//   );

//   console.log("getCard resp=", response);
//   $("#card").html(response.data);
// }

// $("#card-btn").on("click", getCard);

//what about a rnadom GIF? function button

// API key: uux3IXO4XEeOTPwuObXvrvA2veU31dvB

// For help:
//https://developers.giphy.com/docs/api/endpoint#search

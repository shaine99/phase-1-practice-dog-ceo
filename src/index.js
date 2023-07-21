console.log("%c HI", "color: firebrick");
//fetch request to our url

document.addEventListener("DOMContentLoaded", () => {
  // on page load, fetches the images using the url above ⬆️
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const dogImgDivContainer = document.getElementById("dog-image-container");
  let dogBreedUl = document.getElementById("dog-breeds");

  fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
      for (let url in data.message) {
        let dogImg = document.createElement("img");
        dogImg.src = data.message[url];

        dogImgDivContainer.appendChild(dogImg);
      }
    });

  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
      //get me the list of breeds
      //how do I get each breed individually?
      let crazyObj = data["message"];
      let breedArray = Object.keys(crazyObj);
      for (let breed in breedArray) {
        let breedLi = document.createElement("li");
        breedLi.innerText = breedArray[breed];
        breedLi.addEventListener("click", () => {
          breedLi.style.color = "red";
        });
        dogBreedUl.appendChild(breedLi);
      }
    });
});






    
    
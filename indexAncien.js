fetch('photographersData.json')

  .then((response) => {
    return response.json()
  })

  .then((data) => {
    console.log(data);

    for (let i=0; i < data.photographers.length; i++){
      let photographerData = data.photographers[i];

      let portrait = photographerData.portrait;
      document.querySelector(".photographerId").innerHTML = 
      `<img src = img/Photographers-ID-Photos/${portrait}>`;

      let name = photographerData.name;
      document.querySelector("h2").innerHTML =name;

      let city = photographerData.city;
      let country = photographerData.country;
      document.querySelector(".place").innerHTML = `${city}, ${country}`;

      let tagline = photographerData.tagline;
      document.querySelector(".phrase").innerHTML = tagline;

      let price = photographerData.price;
      document.querySelector(".price").innerHTML = `${price}€/jour`;

      photographerData.tags.forEach((element) =>{
        document.getElementById("tagList").innerHTML += `<li class="filtreTag"> ${element} </li>`;
      })
    }
  })








  .catch((err) => {
     
    // Do something for an error here
    /*
    data.photographers.forEach((element) =>{
      name += `<h2> ${element.name} </h2>`
      place += `<p> ${element.name} </p>`
      document.querySelector(".place").innerHTML=place;
    }) */
  })
  

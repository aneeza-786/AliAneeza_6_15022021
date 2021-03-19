fetch('photographersData.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data);
    // Work with JSON data here
    let photographer = data.photographers[5];
    let portrait = photographer.portrait;
    document.querySelector(".photographerId").innerHTML = portrait ;
    let name = photographer.name;
    document.querySelector("h2").innerHTML = name;
    let city = photographer.city;
    let country = photographer.country;
    document.querySelector(".place").innerHTML = `${city}, ${country}`;
    let tagline = photographer.tagline;
    document.querySelector(".phrase").innerHTML = tagline;
    let price = photographer.price;
    document.querySelector(".price").innerHTML = `${price}€/jour`;
    photographer.tags.forEach((element) =>{
      document.querySelector("#tagList").innerHTML += `<li class="filtreTag"> ${element} </li>`;
    })
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
  

fetch('photographersData.json')

  .then((response) => {
    return response.json()
  })

  .then((data) => {
    console.log(data);

   data.photographers.forEach((photographer)=> {
    let casePhotographe = document.querySelector('.casePhotographe');
    casePhotographe.innerHTML += `
    <div class="photographerId"><img src=img/Photographers-ID-Photos/${photographer.portrait}></div>
    <h2>${photographer.name}</h2>
    <p class="place">${photographer.city}, ${photographer.country}</p>
    <p class="phrase">${photographer.tagline}</p>
    <p class="price">${photographer.price}€/jour</p>
    <ul id="tagList"></ul>
    `


    /*let photographerData = data.photographers[0];
    photographerData.tags.forEach((tags) => {
      document.getElementById("tagList").innerHTML +=
      `<li class="filtreTag">${tags}</li>`
    });*/
    
  })
 })

 



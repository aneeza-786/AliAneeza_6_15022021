fetch('photographersData.json')

.then((response) => {
  return response.json()
})

.then((data) => {
console.log(data);

  for (let i = 0; i < data.photographers.length; i++) {
    let photographer = data.photographers[i];
    let allPhotographers = document.getElementById('allPhotographers');
    allPhotographers.innerHTML += `
    <section class="casePhotographe">
      <div class="photographerId">
        <img src=img/Photographers-ID-Photos/${photographer.portrait}>
      </div>
      <h2>${photographer.name}</h2>
      <p class="place">${photographer.city}, ${photographer.country}</p>
      <p class="phrase">${photographer.tagline}</p>
      <p class="price">${photographer.price}€/jour</p>
      <ul id="tagList${photographer.id}"></ul>
    </section>`
  
    photographer.tags.map((tags) => {
      document.getElementById("tagList" + photographer.id).innerHTML +=
      `<li class="filtreTag">${tags}</li>`
    });

  }
  
  document.getElementById("travelTag").addEventListener("click", function () {
    const photographerArray = data.photographers;
    const travelPhotographerArray = photographerArray.filter(travelPhotographer => 
    travelPhotographer.tags.includes("travel"));
    console.log(travelPhotographerArray);
    //document.getElementById("allPhotographers").innerHTML = travelPhotographerArray;
    return travelPhotographerArray;
  })

  document.getElementById("artTag").addEventListener("click", function () {
    const photographerArray = data.photographers;
    const artPhotographerArray = photographerArray.filter(artPhotographer => 
    artPhotographer.tags.includes("art"));
    console.log(artPhotographerArray);
  })
  
})



 



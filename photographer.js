fetch('photographersData.json')

  .then((response) => {
    return response.json()
  })

  .then((data) => {
    console.log(data);

    let photographerData = data.photographers[4];
    let descriptionPic = document.querySelector('.descriptionPic');
    descriptionPic.innerHTML += `
    <div class="description">
      <h2>${photographerData.name}</h2>
      <p class="place">${photographerData.city}, ${photographerData.country}</p>
      <p class="phrase phrase2">${photographerData.tagline}</p>
      <ul id="tagList"></ul>
    </div>
    <div class="photographerId2">
      <img src="img/Photographers-ID-Photos/${photographerData.portrait}">
    </div>
    `;

    photographerData.tags.forEach((tags) => {
      document.getElementById("tagList").innerHTML +=
      `<li class="filtreTag">${tags}</li>`
    });
 })


/*
    <div class="description">
        <h2>Mimi Keel</h2>
        <h5 class="place">London, UK</h5>
        <span class="phrase phrase2">Voir le beau dans le quotidien</span>
        <ul>
            <li class="filtreTag">#portrait</li>
            <li class="filtreTag">#events</li>
            <li class="filtreTag">#travel</li>
            <li class="filtreTag">#animals</li>
        </ul>
    </div>
    <img class="photographerId2" src="img/Photographers-ID-Photos/MimiKeel.jpg" alt="photoMimiKeel"> */
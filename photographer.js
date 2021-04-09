async function init (idPhotographer) {
const photographer = await fetch('photographersData.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.photographers.length; i++) {
      if (data.photographers[i].id == idPhotographer) {
        let photographerData = data.photographers[i];
        let descriptionPic = document.querySelector('.descriptionAndPic');
        descriptionPic.innerHTML = `
        <div class="description">
          <h2>${photographerData.name}</h2>
          <p class="place">${photographerData.city}, ${photographerData.country}</p>
          <p class="phrase phrase2">${photographerData.tagline}</p>
          <ul id="tagList"></ul>
        </div>
        <div class="photographerId2">
          <img src="img/Photographers-ID-Photos/${photographerData.portrait}">
        </div>`;
        

        photographerData.tags.forEach((tags) => {
          document.getElementById("tagList").innerHTML +=
          `<li class="filtreTag">${tags}</li>`
        });
        

        data.media.forEach((media)=>{
          if (media.photographerId == idPhotographer) {
            document.querySelector(".photoGallery").innerHTML +=
            `<div class="mediaBlock">
              <img src="img/${media.photographerId}/${media.image}">
              <footer class= mediaFooter>
                <p class="mediaTitle">${media.title}</p>
                <div class= "mediaPriceAndLikes">
                  <p class="mediaPrice">${media.price} €</p>
                  <p class="mediaLikes">${media.likes} ❤</p>
                </div>
              </footer>
            </div>`
            console.log(media.image)
          };
        })

        document.querySelector(".contactBtn").addEventListener("click",displayForm)
        function displayForm() {
          document.querySelector(".contactForm").innerHTML=`
          <div class="formHeader">
            <h1>Contactez-moi</h1>
            <button class="closeBtn" title="Close form" type="button">
              <span>x</span>
            </button>
          </div>
          <div class="formData">
            <label for="firstname">Prénom</label>
            <input type="text" id="firstname" name="firstname"/>
            <label for="surname">Nom</label>
            <input type="text" id="surname" name="surname"/>
            <label for="mail">Mail</label>
            <input type="text" id="mail" name="mail"/>
            <label for="message">Votre message :</label>
            <input type="text" id="message" name="message"/>
          </div>
          <input class="submitBtn" type="submit" value="Envoyer"/>
          `
          document.querySelector(".contactForm").style.display = "block";
        }


        document.querySelector(".closeBtn").addEventListener("click",closeForm)
        function closeForm() {
          document.querySelector(".contactForm").style.display = "none";
        }


      }
    }
  })
}
init(243);

    








  /*fetch('photographersData.json')

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

    for (let i = 0; i < data.media.length; i++) {
    if (data.media[i].photographerId == data.photographers.id){
      document.getElementsByClassName("photoGallery").innerHTML =
      `<div><img src="img/${data.media[i].image}"></div>`;
      console.log(data.media[i].image)
    }
  }

  })*/

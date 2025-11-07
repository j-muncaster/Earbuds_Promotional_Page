(() => {
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      image: "images/letter-e.png",
      title: "Gold Plated Logo",
      text: "A signature mark of elegance - this gold-plated emblem adds a touch of luxury while symbolizing exceptional craftsmanship."
    },
    {
      image: "images/airpods.png",
      title: "Durable Plastic Casing",
      text: "Built to last. The high-grade polymer shell protects your earbuds from daily wear, ensuring lasting performance and style."
    },
    {
      image: "images/half-circle.png",
      title: "Comfortable Silicone Ear Piece",
      text: "Designed for all-day comfort. The soft, ergonomic silicone tips provide a secure fit and gentle seal for immersive listening."
    },
    {
      image: "images/audio-waves.png",
      title: "Superior Sound Quality",
      text: "Engineered for clarity and depth - experience rich bass, crisp highs, and perfectly balanced sound with every beat."
    }
  ]

//functions

  function loadInfo() {
    infoBoxes.forEach((infoBox, index)=>{
      // console.log(index+1);
      let selected = document.querySelector(`#hotspot-${index+1}`);
      console.log(selected);

      const imageElement = document.createElement('img');
      imageElement.src = infoBox.image;

      const titleElement = document.createElement('h2');
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement('p');
      textElement.textContent = infoBox.text;

      selected.appendChild(imageElement);
      selected.appendChild(titleElement);
      selected.appendChild(textElement);

    });
  }
  loadInfo();

   function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 0 });
  }
  
 hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();
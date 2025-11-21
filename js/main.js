(() => {

  // Hamburger Menu
  const menu = document.querySelector("#menu");
    const hamburger = document.querySelector("#hamburger");
    const closeButton = document.querySelector("#close");
    const menuLinks = document.querySelectorAll("#menu nav ul li a");

    function toggleMenu() {
        menu.classList.toggle("open");
    }

    closeButton.addEventListener("click", toggleMenu);
    
    menuLinks.forEach(link=>{
        link.addEventListener("click", toggleMenu);
    })
    hamburger.addEventListener("click", toggleMenu);

  
  // AR Viewer 
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      image: "images/letter-e.png",
      title: "Gold Plated Logo",
      text: "A signature mark of elegance - this gold-plated emblem adds a touch of luxury while symbolizing exceptional craftsmanship."
    },
    {
      image: "images/casing.png",
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


// Scrub | Scroll Sequence
console.log("IIFE Called");

    const canvas = document.querySelector("#scroll-view");
    const context = canvas.getContext("2d");

    canvas.width= 1920;
    canvas.height = 1080;

    const frameCount = 131; 
    const images = [];
    const buds = {
        frame: 0
    }

    for (let i=0; i<frameCount; i++) {
        const img = new Image();
        img.src = `images/scrolling_sequence/earbuds_${(i+1).toString().padStart(4, '0')}.webp`;
        images.push(img);
    }
    console.log(images);

    gsap.to(buds, {
        frame: 131,
        snap: "frame",
        scrollTrigger: {
            trigger: "#scroll-view",
            pin: true,
            scrub: 1,
            start: "top top",
            markers: false
        },
        onUpdate: render
    })

    images[0].addEventListener("load", render);

    function render() {
        //console.log(buds.frame);
        //console.log(images[buds.frame]);
        context.clearRect(0,0, canvas.width, canvas.height);
        context.drawImage(images[buds.frame], 0, 0);
    }

// Xray Slider

const divisor = document.querySelector("#divide");
    const slider = document.querySelector("#slider");

    function moveDivide() {
        // console.log(slider.value);
        divisor.style.width = `${slider.value}%`;
    }

    function resetSlider() {
        slider.value = 50;
    }

    slider.addEventListener("input", moveDivide);
    window.addEventListener("load", resetSlider);
    
// Scroll To Animation
  gsap.registerPlugin(ScrollToPlugin);
    
    const navLinks = document.querySelectorAll("#main-header nav ul li a");

    function scrollLink(event) {
        // console.log("scroll link function called");
        event.preventDefault();
        // console.log(event.currentTarget.hash);
        let selected = event.currentTarget.hash;
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {
                y: `${selected}`,
                offsetY: 100,
                ease: "power1.out"
            }
        })
    }

    navLinks.forEach((navLink)=>{
        navLink.addEventListener("click", scrollLink);
    })

})();
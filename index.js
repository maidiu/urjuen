const about = document.getElementById('about')
const art = document.getElementById('art')
const out = document.getElementById('out')
const shop = document.getElementById('shop')
const request = document.getElementById('request')
const support = document.getElementById('support')
const invisibles = [art, out, about, shop, request, support]
const buttonContainer = document.getElementById('button-container')
const menuContainer = document.getElementById('menu-container')
const fwl = document.getElementById('fwl')
const fnl = document.getElementById('froggo-and-logo')
const textContainer = document.getElementById('text-container')
const texts = [...document.querySelectorAll('.text')]
const textDivs = document.querySelectorAll('div.text')
const main = document.getElementById('main')
const iglogo = document.getElementById('ig-logo')
const indicator = document.querySelector('.indicator')
const both = document.getElementById('both')

const galleries = [
    ["/images/plop/plop1.png", "/images/plop/plop2.png", "/images/plop/plop3.png", "/images/plop/plop4.png", "/images/plop/plop5.png", ],
    ["/images/tunnels/tunnels1.webp", "/images/tunnels/tunnels2.webp", "/images/tunnels/tunnels3.webp", "/images/tunnels/tunnels4.webp", "/images/tunnels/tunnels5.webp", "/images/tunnels/tunnels6.webp", "/images/tunnels/tunnels7.webp", ],
    ["/images/miller/miller1.webp", "/images/miller/miller2.webp", "/images/miller/miller3.webp", "/images/miller/miller4.webp", "/images/miller/miller5.webp", "/images/miller/miller6.webp", "/images/miller/miller7.webp", "/images/miller/miller8.webp", ]
];


let isScreenBig;
let textContMargin;
let menuContPadding;

function screenSize() {
    if (window.innerWidth > 600) {
        isScreenBig = true;
        textContMargin = 40;
        menuContPadding = 7
        
    } else {
        isScreenBig = false;
        textContMargin = 45
        menuContPadding = 7
    }
}

screenSize();



const buttons = document.querySelectorAll('button')


/*menu.addEventListener('click', ()=> {
if (buttonContainer.style.display = 'block') {
    buttonContainer.style.display = 'none'
    }
})*/

let menuClicked = 0

if (!isScreenBig) {
    menu.addEventListener('click', ()=> {
        if (menuClicked === 0) {
            buttonContainer.style.display = 'block'
            both.style.zIndex = '1000'
            both.style.justifyContent = 'space-between'
            //fnl.style.position = 'fixed'
            textContainer.style.display = 'flex'
            menuClicked = 1;
        } else {
            buttonContainer.style.display = 'none'
            menuClicked = 0;
        }
    })
}

/*if(isScreenBig) {
    menu.style.display = 'none'
    invisibles.forEach(invisible => {
        class
    })
}
    /*menu.addEventListener('click', () => {
        if (menuClicked === 0) {
            buttonContainer.style.display = 'flex'
            main.style.justifyContent = 'space-between'
            
            textContainer.style.display = 'flex'
            menuClicked = 1;
            menu.classList.add('hidden')
            const totalWidth = Array.from(buttonContainer.children).reduce((total, button) => total + button.offsetWidth + 10, 0);
            menuContainer.style.width = `${totalWidth}px`
        } else {
            buttonContainer.style.display = 'none'
            menuClicked = 0;
        }
    })*/


invisibles.forEach((invisible) => {
    invisible.addEventListener('click', () => {
        const buttonText = invisible.innerText.toLowerCase(); // Convert button text to lowercase
        textDivs.forEach((div) => {
            if (div.dataset.name === buttonText) { // Check if data-name matches button text
                div.classList.remove('hidden'); // Remove hidden class
                both.classList.toggle('open');
                
            } else {
                div.classList.add('hidden'); // Add hidden class to other divs
                
            }
        });
    if (!isScreenBig) {buttonContainer.style.display = 'none'}
    menuClicked = 0;
    });
});

window.addEventListener('scroll', function() {
    var logoContainer = document.getElementById('ig-logo-container');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        logoContainer.style.display = 'flex'; // Show the logo when scrolled to the bottom
    } else {
        logoContainer.style.display = 'none'; // Hide the logo otherwise
    }
});


const menuHeight = menuContainer.offsetHeight; // Get the height of the menu for spacing calculation
const mainAfter = main.offsetHeight - menuHeight
// Show the menu when scrolling down, making it fixed at the top after the logo disappears
if(!isScreenBig) {
    window.addEventListener('scroll', () => {
  const logoBottom = fnl.getBoundingClientRect().bottom;


  // If the logo is out of view, fix the menu at the top
  if (logoBottom <= 0) {
    //menuContainer.style.position = 'fixed';
    //menuContainer.style.top = '0'; // Fix the menu at the top
    //menuContainer.style.width = '100%'; // Make sure it stretches the full width
    menuContainer.classList.add('fixed')
    textContainer.style.marginTop = `${textContMargin + menuHeight}px`
    //menuContainer.style.paddingBottom = '0'
  } else {
    menuContainer.classList.remove('fixed')
    menuContainer.style.top = '0';
    textContainer.style.marginTop = `${textContMargin}px`
    //menuContainer.style.paddingBottom = `${menuContPadding}px`
  }
})}

if (isScreenBig) {
    window.addEventListener('scroll', () => {
        const logoBottom = fnl.getBoundingClientRect().bottom;
        console.log(logoBottom)
        if (logoBottom <= 0) {
            menuContainer.classList.add('fixed')
            textContainer.style.marginTop = `${textContMargin + menuHeight}px`
            main.style.height = `${mainAfter}px`;

        } else {
            menuContainer.classList.remove('fixed')
            menuContainer.style.top = '0';
            textContainer.style.marginTop = `${textContMargin}px`
            main.style.height = ''
    }
})}

let isButtonContainerVisible = false;

menu.addEventListener('click', () => {
    isButtonContainerVisible = !isButtonContainerVisible;
    if (isButtonContainerVisible) {
      both.classList.toggle('open');
      //menu.classList.toggle('open')
    } else {
      both.classList.toggle('open');
      //menu.classList.toggle('open')
    }
  });


  let currentSlide = 0;
  let currentGallery = 0

  function openLightbox(galleryIndex) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImages = document.getElementById("lightboxImages");

    // Set current gallery and reset current slide
    currentGallery = galleryIndex;
    currentSlide = 0;

    // Clear existing lightbox content
    lightboxImages.innerHTML = "";

    // Populate lightbox with images from the selected gallery
    galleries[galleryIndex].forEach((src, i) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Gallery ${galleryIndex + 1} Image ${i + 1}`;
        if (i === 0) img.classList.add("active"); // Show the first image by default
        lightboxImages.appendChild(img);
    });

    // Show the lightbox
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeSlide(direction) {
    const lightboxImages = document.getElementById("lightboxImages").children;
    lightboxImages[currentSlide].classList.remove("active");

    // Update the current slide index
    currentSlide += direction;

    // Wrap around the slides
    if (currentSlide >= lightboxImages.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = lightboxImages.length - 1;

    // Show the new active slide
    lightboxImages[currentSlide].classList.add("active");
}




// Add a click event listener to the lightbox
lightbox.addEventListener("click", (event) => {
    // Ensure the click is not on the image, navigation buttons, or close button
    if (
        event.target === lightbox // Clicked on the background
    ) {
        closeLightbox();
    }
});





  /* If the menu is to be shown after a certain scroll, set the display here
  if (window.scrollY > 100) { // You can adjust the scroll distance here
    menu.style.display = 'block'; // Show menu when scroll passes a certain point
  } else {
    menu.style.display = 'none'; // Hide the menu again
  }
});*/







/*if (bigScreen) {
    document.addEventListener('DOMContentLoaded', () => {
        invisibles.forEach((invisible) => {
            invisible.classList.add('hidden')
        })
    })
}*/


/*document.addEventListener('DOMContentLoaded', () => {
    console.log('1: still working')
    invisibles.forEach((invisible) => {
        if (invisible.classList.contains('hidden')) {
            invisible.classList.remove('hidden');
            invisible.classList.add('open-buttons');
           
            
        } else {
            invisible.classList.add('hidden');
            invisible.classList.remove('open-buttons');
            
    }
        // Ensure the menu is scrolled to show the first button
        function ensureFirstButtonVisible() {
          menu.scrollLeft = 0;
        }
      
        // Snap to the next button on scroll
        function snapToButton() {
          const buttons = Array.from(buttonContainer.children);
          const buttonWidth = buttons[0].offsetWidth + 10; // Width of button + margin
          const scrollPosition = Math.round(buttonContainer.scrollLeft / buttonWidth) * buttonWidth;
          buttonContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }
      
        // Show indicator if needed
        function showIndicator() {
          const isScrollable = buttonContainer.scrollWidth > buttonContainer.clientWidth;
          indicator.style.display = isScrollable ? 'block' : 'none';
        }
      
        // Handle indicator click to scroll right
        function scrollMenu() {
          const buttons = Array.from(buttonContainer.children);
          const buttonWidth = buttons[0].offsetWidth + 10; // Width of button + margin
          buttonContainer.scrollBy({ left: buttonWidth, behavior: 'smooth' });
        }
      
        // Initial setup
        ensureFirstButtonVisible();
        showIndicator();
      
        // Show/hide indicator on resize
        window.addEventListener('resize', showIndicator);
      
        // Snap to button when scrolling ends
        buttonContainer.addEventListener('scroll', function () {
          clearTimeout(buttonContainer.scrollTimeout);
          buttonContainer.scrollTimeout = setTimeout(snapToButton, 100);
        });
      
        // Scroll menu when indicator is clicked
        indicator.addEventListener('click', scrollMenu);
    })    
})*/



/*invisibles.forEach((invisible) => {
    invisible.addEventListener('click', (event) => {
        invisibles.forEach((invisible) => {
            invisible.classList.add('hidden')
        })})
})*/

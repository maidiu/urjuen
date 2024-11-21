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
const swipeIndicator = document.querySelector('.swipe-indicator');

const galleries = [
    ["images/plop/plop1.png", "images/plop/plop2.png", "images/plop/plop3.png", "images/plop/plop4.png", "images/plop/plop5.png", ],
    ["images/tunnels/tunnels1.webp", "images/tunnels/tunnels2.webp", "images/tunnels/tunnels3.webp", "images/tunnels/tunnels4.webp", "images/tunnels/tunnels5.webp", "images/tunnels/tunnels6.webp", "images/tunnels/tunnels7.webp", ],
    ["images/miller/miller1.webp", "images/miller/miller2.webp", "images/miller/miller3.webp", "images/miller/miller4.webp", "images/miller/miller5.webp", "images/miller/miller6.webp", "images/miller/miller7.webp", "images/miller/miller8.webp", ],
    ['images/buthamas/buthamas1.webp', 'images/buthamas/buthamas2.webp', 'images/buthamas/buthamas3.webp', 'images/buthamas/buthamas4.webp', 'images/buthamas/buthamas5.webp', 'images/buthamas/buthamas6.webp', 'images/buthamas/buthamas7.webp', 'images/buthamas/buthamas8.webp', 'images/buthamas/buthamas9.webp', ]
];


let isScreenBig;
let textContMargin;
let menuContPadding;

function updateScreenSize() {
    isScreenBig = window.innerWidth > 600;
}

function marginsPadding() {
    if (isScreenBig) {
        textContMargin = 40;
        menuContPadding = 7
        
    } else {
        textContMargin = 45
        menuContPadding = 7
    }
}

window.addEventListener("resize", () => {
    updateScreenSize
    marginsPadding
});

updateScreenSize();
marginsPadding();



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
    lightboxImages.innerHTML = "";
    galleries[galleryIndex].forEach((src, i) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Gallery ${galleryIndex + 1} Image ${i + 1}`;


    if (isScreenBig && i === 0) {
        img.classList.add("active");} // Show the first image by default
        lightboxImages.appendChild(img);
        if (swipeIndicator) {
            swipeIndicator.style.display = "block"; // Make it visible
        }
    });

    if (!isScreenBig) {
        lightboxImages.style.display = 'flex'
        lightboxImages.scrollLeft = 0;
    } 

    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function showSlide(index) {
    const lightboxImages = document.getElementById("lightboxImages").children;
    if (index < 0) index = lightboxImages.length - 1; // Wrap around to last image
    if (index >= lightboxImages.length) index = 0; // Wrap around to first image

    // Update current slide index
    currentSlide = index;

    // Show only the current slide
    Array.from(lightboxImages).forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

document.querySelectorAll(".thumbnail").forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => openLightbox(index));
});

document.querySelector(".prev").addEventListener("click", (e) => {changeSlide(-1);})
document.querySelector(".next").addEventListener("click", (e) => {changeSlide(1);})


lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {closeLightbox();}
});

function hideSwipeIndicator() {
    if (swipeIndicator) {
        swipeIndicator.style.display = 'none'; // Hide the arrow
    }
}

lightboxImages.addEventListener('scroll', hideSwipeIndicator);
lightboxImages.addEventListener('touchstart', hideSwipeIndicator);
lightboxImages.addEventListener('touchmove', hideSwipeIndicator);


/*if (window.matchMedia('max-width: 599').matches) {
    let currentSlide = 0;
let startX = 0; // Start position of the swipe
let currentX = 0; // Current position during swipe
let isSwiping = false; // Tracks if a swipe is happening

const lightbox = document.getElementById("lightbox");
const lightboxImages = document.getElementById("lightboxImages");

// Array of galleries (example setup)
const galleries = [
    ["gallery1_image1.jpg", "gallery1_image2.jpg", "gallery1_image3.jpg"],
    ["gallery2_image1.jpg", "gallery2_image2.jpg", "gallery2_image3.jpg"],
    ["gallery3_image1.jpg", "gallery3_image2.jpg", "gallery3_image3.jpg"]
];

function openLightbox(galleryIndex) {
    currentSlide = 0;

    // Clear existing lightbox content
    lightboxImages.innerHTML = "";

    // Add images for the selected gallery
    galleries[galleryIndex].forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        lightboxImages.appendChild(img);
    });

    // Set the width dynamically for all images
    lightboxImages.style.transform = `translateX(0)`; // Reset to the first image
    lightbox.style.display = "flex";

    // Add event listeners for touch gestures
    lightbox.addEventListener("touchstart", handleTouchStart, { passive: true });
    lightbox.addEventListener("touchmove", handleTouchMove, { passive: true });
    lightbox.addEventListener("touchend", handleTouchEnd, { passive: true });
}

function closeLightbox() {
    lightbox.style.display = "none";
    lightbox.removeEventListener("touchstart", handleTouchStart);
    lightbox.removeEventListener("touchmove", handleTouchMove);
    lightbox.removeEventListener("touchend", handleTouchEnd);
}

function handleTouchStart(event) {
    isSwiping = true;
    startX = event.touches[0].clientX; // Starting X position of the swipe
    currentX = startX; // Initialize currentX
}

function handleTouchMove(event) {
    if (!isSwiping) return;

    currentX = event.touches[0].clientX; // Update the current position
    const deltaX = currentX - startX;

    // Translate the container dynamically based on swipe movement
    lightboxImages.style.transform = `translateX(calc(${(-100 * currentSlide)}% + ${deltaX}px))`;
}

function handleTouchEnd() {
    if (!isSwiping) return;

    const deltaX = currentX - startX;
    isSwiping = false;

    // Determine if the swipe was strong enough to move to the next/previous slide
    if (deltaX > 50 && currentSlide > 0) {
        // Swipe right (previous slide)
        currentSlide--;
    } else if (deltaX < -50 && currentSlide < galleries[0].length - 1) {
        // Swipe left (next slide)
        currentSlide++;
    }

    // Snap to the current slide
    lightboxImages.style.transition = "transform 0.3s ease";
    lightboxImages.style.transform = `translateX(-${100 * currentSlide}%)`;

    // Reset swipe data
    setTimeout(() => {
        lightboxImages.style.transition = ""; // Remove transition after snap
    }, 300);
}

}





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

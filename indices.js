const about = document.getElementById('about')
const art = document.getElementById('art')
const out = document.getElementById('out')
const shop = document.getElementById('shop')
const request = document.getElementById('request')
const support = document.getElementById('support')
const invisibles = [art, out, about, shop, request, support]
const buttonContainer = document.getElementById('button-container')
const fwl = document.getElementById('fwl')
const fnl = document.getElementById('froggo-and-logo')
const textContainer = document.getElementById('text-container')
const texts = [...document.querySelectorAll('.text')]
const textDivs = document.querySelectorAll('div.text')
const main = document.getElementById('main')
const iglogo = document.getElementById('ig-logo')
const indicator = document.querySelector('.indicator')

document.addEventListener('DOMContentLoaded', () => {
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
})





const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
    console.log('clicked', event.target)})
})



menu.addEventListener('click', ()=> {
    invisibles.forEach((invisible) => {
        fwl.src = 'getlaywhite.png'
        invisible.classList.remove('hidden')
        invisible.classList.add('open-buttons')
    })
    menu.classList.add('hidden')
    buttonContainer.classList.add('page-open')
    console.log('menu clicked')
    main.style.justifyContent = 'space-between'
    fnl.style.position = 'fixed'
    buttonContainer.style.position = 'fixed'
    buttonContainer.style.bottom = '0'
    texts[0].classList.remove('hidden')
    textContainer.style.display = 'flex'
    //indicator.style.display = 'flex'

    if (window.innerWidth < 800) {
        fnl.style.height = '15vh'
        fnl.style.width = 'auto';
        fnl.style.backgroundColor = "#2a0655"
    } else if (window.innerWidth > 799) {
        fwl.style.height = "19vh"
        fwl.style.width = 'auto'
        
    }
    iglogo.style.display = "flex"
})

invisibles.forEach((invisible) => {
    invisible.addEventListener('click', () => {
        const buttonText = invisible.innerText.toLowerCase(); // Convert button text to lowercase
        textDivs.forEach((div) => {
            if (div.dataset.name === buttonText) { // Check if data-name matches button text
                div.classList.remove('hidden'); // Remove hidden class
            } else {
                div.classList.add('hidden'); // Add hidden class to other divs
            }
        });
    });
});






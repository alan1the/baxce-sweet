

document.addEventListener("DOMContentLoaded", function() {

    function handlesColorChange(listClass) {
        const divs = document.querySelectorAll(`.${listClass} .img-cont`);


        divs[0].classList.add('active');


        divs.forEach(div => {
            div.addEventListener('click', function() {
    
                divs.forEach(d => d.classList.remove('active'));
                
                this.classList.add('active');
            });
        });
    }
     

    handlesColorChange('first-slider');
    handlesColorChange('second-slider');
    handlesColorChange('third-slider')
});


//toggle visibility function
function toggleVisibility(elementsToShow, elementsToHide) {
    elementsToShow.forEach(el => el.classList.remove('display'));
    elementsToHide.forEach(el => el.classList.add('display'));
  }
  
        //toggle for sweets menu

  document.getElementById('first').addEventListener('click', () => {
    const secondSlider = document.getElementById('secondSlider');
    const thirdSlider = document.getElementById('thirdSlider');
    const milkshakeMenu = document.getElementById('milkshakeMenu');
    const normaldrinkMenu = document.getElementById('normaldrinkMenu');
    const crepeMenu = document.getElementById('crepeMenu');
    const containercakes = document.getElementById('containercakes');
    const mojitoMenu = document.getElementById('mojitoMenu');

    toggleVisibility([secondSlider, crepeMenu, MenuContainer], [thirdSlider, milkshakeMenu, normaldrinkMenu, containercakes, mojitoMenu]);
  });


        //toggle for drinks menu
    
    document.getElementById('second').addEventListener('click', () => {
        const secondSlider = document.getElementById('secondSlider');
        const thirdSlider = document.getElementById('thirdSlider');

        //SWEET MUNUS 
        const crepeMenu = document.getElementById('crepeMenu');
        const waffleMenu = document.getElementById('waffleMenu');
        const pancakeMenu = document.getElementById('pancakeMenu');
        const icecreammenu = document.getElementById('icecreammenu');
        const milkshakeMenu = document.getElementById('milkshakeMenu');
        const containercakes = document.getElementById('containercakes');

        //HIDE SWEET MENUS AND SHOW DRINKS AND MILKSHAKE
        
        toggleVisibility([thirdSlider, milkshakeMenu, MenuContainer], [secondSlider, crepeMenu, waffleMenu, pancakeMenu, icecreammenu, containercakes]);
      });

      //show cakes menu

      document.getElementById('third').addEventListener('click', () => {
        const secondSlider = document.getElementById('secondSlider');
        const thirdSlider = document.getElementById('thirdSlider');
        const cakesMenu = document.getElementById('cakesMenu');
        const containercakes = document.getElementById('containercakes');
        const MenuContainer = document.getElementById('MenuContainer');
        const bakalvaMenu = document.getElementById('bakalvaMenu');
        const hookahMenu = document.getElementById('hookahMenu');

        toggleVisibility([cakesMenu, containercakes], [secondSlider, thirdSlider, MenuContainer, bakalvaMenu, hookahMenu]);
      })

      //show Baklava menu

      document.getElementById('fourth').addEventListener('click', () => {
        const secondSlider = document.getElementById('secondSlider');
        const thirdSlider = document.getElementById('thirdSlider');
        const bakalvaMenu = document.getElementById('bakalvaMenu');
        const containercakes = document.getElementById('containercakes');
        const MenuContainer = document.getElementById('MenuContainer');
        const cakesMenu = document.getElementById('cakesMenu');
        const hookahMenu = document.getElementById('hookahMenu');


        toggleVisibility([bakalvaMenu, containercakes], [secondSlider, thirdSlider, MenuContainer, cakesMenu, hookahMenu]);
      });

      //show Hookah menu

      document.getElementById('fifth').addEventListener('click', () => {
        const secondSlider = document.getElementById('secondSlider');
        const thirdSlider = document.getElementById('thirdSlider');
        const cakesMenu = document.getElementById('cakesMenu');
        const hookahMenu = document.getElementById('hookahMenu');
        const bakalvaMenu = document.getElementById('bakalvaMenu');


        toggleVisibility([hookahMenu, containercakes], [secondSlider, thirdSlider, MenuContainer, cakesMenu, bakalvaMenu]);
      });

  //toggle visibility for crepe waffle panckae and icecream

function toggleVis(elementsToShow, elementsToHide) {
    elementsToShow.forEach(el => el.classList.remove('display'));
    elementsToHide.forEach(el => el.classList.add('display'));
  }
  
    //toggle visibility for crepe

    document.getElementById('crepe').addEventListener('click', () => {
        const crepeMenu = document.getElementById('crepeMenu');
        const waffleMenu = document.getElementById('waffleMenu');
        const pancakeMenu = document.getElementById('pancakeMenu');
        const icecreammenu = document.getElementById('icecreammenu');
        toggleVis([crepeMenu], [waffleMenu, pancakeMenu, icecreammenu]);
      });
    
      //toggle visibility for waffle
    
      document.getElementById('waffle').addEventListener('click', () => {
        const crepeMenu = document.getElementById('crepeMenu');
        const waffleMenu = document.getElementById('waffleMenu');
        const pancakeMenu = document.getElementById('pancakeMenu');
        const icecreammenu = document.getElementById('icecreammenu');
        toggleVis([waffleMenu], [crepeMenu, pancakeMenu, icecreammenu]);
      });
    
      //toggle visibility for pancake
    
      document.getElementById('pancake').addEventListener('click', () => {
        const crepeMenu = document.getElementById('crepeMenu');
        const waffleMenu = document.getElementById('waffleMenu');
        const pancakeMenu = document.getElementById('pancakeMenu');
        const icecreammenu = document.getElementById('icecreammenu');
        toggleVis([pancakeMenu], [waffleMenu, crepeMenu, icecreammenu]);
      });
    
      //toggle visibility for icecream
      
      document.getElementById('icecream').addEventListener('click', () => {
        const crepeMenu = document.getElementById('crepeMenu');
        const waffleMenu = document.getElementById('waffleMenu');
        const pancakeMenu = document.getElementById('pancakeMenu');
        const icecreammenu = document.getElementById('icecreammenu');
        toggleVis([icecreammenu], [waffleMenu, pancakeMenu, crepeMenu]);
      });

      //TOGGLE VISISIBILITY FOR DRINKS AND MILKSHAKE AND HIDE SWEET MENUS

      document.getElementById('icecream').addEventListener('click', () => {
        const crepeMenu = document.getElementById('crepeMenu');
        const waffleMenu = document.getElementById('waffleMenu');
        const pancakeMenu = document.getElementById('pancakeMenu');
        const icecreammenu = document.getElementById('icecreammenu');
        toggleVis([icecreammenu], [waffleMenu, pancakeMenu, crepeMenu]);
      });

      //togglevisibility for milkshake

      document.getElementById('milkshake').addEventListener('click', () => {

        const milkshakeMenu = document.getElementById('milkshakeMenu');
        const normaldrinkMenu = document.getElementById('normaldrinkMenu');
        const naturaldrinksMenu = document.getElementById('naturaldrinksMenu');
        const hotandcoldMenu = document.getElementById('hotandcoldMenu');
        const mojitoMenu = document.getElementById('mojitoMenu');

        toggleVis([milkshakeMenu], [normaldrinkMenu, naturaldrinksMenu, hotandcoldMenu, mojitoMenu]);
      });

      //toggle visibility for normaldrinks

      document.getElementById('normaldrink').addEventListener('click', () => {

        const milkshakeMenu = document.getElementById('milkshakeMenu');
        const normaldrinkMenu = document.getElementById('normaldrinkMenu');
        const naturaldrinksMenu = document.getElementById('naturaldrinksMenu');
        const hotandcoldMenu = document.getElementById('hotandcoldMenu');
        const mojitoMenu = document.getElementById('mojitoMenu');

        toggleVis([normaldrinkMenu], [milkshakeMenu, naturaldrinksMenu, hotandcoldMenu, mojitoMenu]);

      });

      //toggle visibility for naturaldrink

      document.getElementById('naturaldrink').addEventListener('click', () => {

        const milkshakeMenu = document.getElementById('milkshakeMenu');
        const naturaldrinksMenu = document.getElementById('naturaldrinksMenu');
        const normaldrinkMenu = document.getElementById('normaldrinkMenu');
        const hotandcoldMenu = document.getElementById('hotandcoldMenu');
        const mojitoMenu = document.getElementById('mojitoMenu');

        toggleVis([naturaldrinksMenu], [normaldrinkMenu, milkshakeMenu, hotandcoldMenu, mojitoMenu]);

      });

      //toggle visibility for hot and cold drinks

      document.getElementById('HotCold').addEventListener('click', () => {

        const milkshakeMenu = document.getElementById('milkshakeMenu');
        const naturaldrinksMenu = document.getElementById('naturaldrinksMenu');
        const normaldrinkMenu = document.getElementById('normaldrinkMenu');
        const hotandcoldMenu = document.getElementById('hotandcoldMenu');
        const mojitoMenu = document.getElementById('mojitoMenu');

        toggleVis([hotandcoldMenu], [normaldrinkMenu, milkshakeMenu, naturaldrinksMenu, mojitoMenu]);

      });

      //toggle visibility for Mojito

      document.getElementById('Mojito').addEventListener('click', () => {

        const milkshakeMenu = document.getElementById('milkshakeMenu');
        const naturaldrinksMenu = document.getElementById('naturaldrinksMenu');
        const normaldrinkMenu = document.getElementById('normaldrinkMenu');
        const hotandcoldMenu = document.getElementById('hotandcoldMenu');
        const mojitoMenu = document.getElementById('mojitoMenu');

        toggleVis([mojitoMenu], [normaldrinkMenu, milkshakeMenu, naturaldrinksMenu, hotandcoldMenu]);

      });



//toggle visibility for drinks
function toggle(elementsToShow, elementsToHide) {
    elementsToShow.forEach(el => el.classList.remove('hidden'));
    elementsToHide.forEach(el => el.classList.add('hidden'));
  }
  

  //animation for hamburger menu
  const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen){
    menuBtn.classList.add('open');
    menuOpen = true;
  }else{
    menuBtn.classList.remove('open');
    menuOpen = false;
  }

});


// Select all elements you want to animate
const scrollTexts = document.querySelectorAll('.scroll-text');

function isElementInViewport(el, threshold = -100) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= -threshold &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + threshold &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  scrollTexts.forEach((scrollText) => {
    if (isElementInViewport(scrollText, -100)) {
      scrollText.classList.add('visible');
    } else {
      scrollText.classList.remove('visible');
    }
  });
}

// Attach scroll event listener to the window
window.addEventListener('scroll', handleScroll);


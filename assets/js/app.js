const navSlide = () =>{
    const burgerMenu = document.querySelector('.fa-bars');
    const nav = document.querySelector('.nav-links');

    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle Nav
    burgerMenu.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //Burger-menu animation
        
        burgerMenu.classList.toggle('fa-rotate-90');
        burgerMenu.classList.toggle('.spacing');

        
    });


    
}

navSlide();
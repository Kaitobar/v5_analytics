//PARTE DEL SCROLL DEL HEADER

window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if(scroll < 20){
        header.classList.remove('nav_mod');
    }

}

//HEADER MENU RESPONSIVE

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
body = document.getElementById("main");
nav = document.getElementById("nav");

function mostrar_menu(){
    
    menu.classList.toggle('move_content');
    body.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}


window.addEventListener("resize", function(){

    if(window.innerWidth > 760){
        menu.classList.remove('move_content');
    body.classList.remove('move_content');
    nav.classList.remove('move_nav');
    }

})

//PARTE DE EL CARRUSEL 

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
        draggable: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  breakpoint: 450,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  breakpoint: 800,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			}
		]
	});
});
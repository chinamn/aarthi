function G(i) { return document.getElementById(i) }
function Q(i, p) { let a = p ? p : document; return a.querySelector(i) }
 /* function mobileNew(){
    if(document.getElementById('main').style.display == 'blog'){
      document.getElementById('main').style.display == 'none';
    }else{
       document.getElementById('main').style.display == 'blog';
    }
  }
 
  G("bor").onclick = function(){
    G('main').classList.toggle('active');
   G('bor').classList.toggle('fa-bars');
  };
Q(".nav-toggle").onclick =>({
  G("nav").classList.toggle("collapsed");
  G("nav").classList.toggle("fa-bars");
  G("nav").classList.toggle("fa-times");
});*/


G('country_slide').innerHTML = `<div class="splide__track"><ul class="splide__list" >${ar.join('')}</ul></div>`;
new Splide( '.splide1',{
    type : 'loop',perPage: 3,pagination:false,autoplay:true,
    rewind:true,rewindSpeed:4000,perMove:1,
    breakpoints:{
      900:{perPage:2},
      600:{perPage:1},
    
    }
  } ).mount();



G("nav").onclick = function(){
  G("nav").classList.toggle('active');
  G('bor').classList.toggle('fa-bars');
  G('bor').classList.toggle('fa-times');
}
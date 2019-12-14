const menu = document.querySelector('.btn-open');
const close = document.querySelector('.btn-close');
const nav = document.querySelector('nav .blog-menu');
const navLinks = nav.querySelector('.blog-menu .nav-item');
const body = document.querySelector('body');


menu.addEventListener('click', (e)=>{
    console.log('open');
    nav.classList.toggle('nav-active');
    body.classList.toggle('modal-open');
    // menu.classList.toggle('btn-close');
    // menu.style.display = 'none';
})
close.addEventListener('click', ()=>{
    // menu.style.display = 'block';
    // nav.style.display = 'none';
    // console.log('close');
})




console.log(menu);
console.log(nav);
console.log(body);
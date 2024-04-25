let meniu = document.getElementById("meniu");
        
function closeMeniu()
 {
    meniu.style.right = "-100%";
 }
function openMeniu(){
    meniu.style.right = "0";
}


//   SLIDER

let items1 = document.querySelectorAll('.slider1 .list .item');
let thumbnails1 = document.querySelectorAll('.thumbnail1 .item');
console.log(items1);
console.log(thumbnails1);

function showSlider1(itemActive){
    console.log(itemActive);
    let thumbnailActiveOld = document.querySelector('.thumbnail1 .item.active');
   let itemActiveOld = document.querySelector('.slider1 .list .active');
  
  
   itemActiveOld.classList.remove('active');
   thumbnailActiveOld.classList.remove('active');

   items1[itemActive].classList.add('active');
   thumbnails1[itemActive].classList.add('active');
}

thumbnails1.forEach((thumbnail, index) =>{
    thumbnail.addEventListener('click', () => {
        showSlider1(index);
    }) 
    })
    

// END  SLIDER

let items2 = document.querySelectorAll('.slider2 .list .item');
let thumbnails2 = document.querySelectorAll('.thumbnail2 .item');


function showSlider2(itemActive){
    let thumbnailActiveOld = document.querySelector('.thumbnail2 .item.active');
    
   let itemActiveOld = document.querySelector('.slider2 .list .active');
  
  
   itemActiveOld.classList.remove('active');
   thumbnailActiveOld.classList.remove('active');

   items2[itemActive].classList.add('active');
   thumbnails2[itemActive].classList.add('active');

}

thumbnails2.forEach((thumbnail, index) =>{
    thumbnail.addEventListener('click', () => {
        showSlider2(index);
    }) 
    })
    



    let items3 = document.querySelectorAll('.slider3 .list .item');
    let thumbnails3 = document.querySelectorAll('.thumbnail3 .item');


function showSlider3(itemActive){
    let thumbnailActiveOld = document.querySelector('.thumbnail3 .item.active');
   
   let itemActiveOld = document.querySelector('.slider3 .list .active');
   
  
   itemActiveOld.classList.remove('active');
   thumbnailActiveOld.classList.remove('active');

   items3[itemActive].classList.add('active');
   thumbnails3[itemActive].classList.add('active');

}

thumbnails3.forEach((thumbnail, index) =>{
    thumbnail.addEventListener('click', () => {
        showSlider3(index);
    }) 
    })
    



    let items4 = document.querySelectorAll('.slider4 .list .item');
    let thumbnails4 = document.querySelectorAll('.thumbnail4 .item');


function showSlider4(itemActive){
    let thumbnailActiveOld = document.querySelector('.thumbnail4 .item.active');
   
   let itemActiveOld = document.querySelector('.slider4 .list .active');

  
   itemActiveOld.classList.remove('active');
   thumbnailActiveOld.classList.remove('active');

   items4[itemActive].classList.add('active');
   thumbnails4[itemActive].classList.add('active');

}

thumbnails4.forEach((thumbnail, index) =>{
    thumbnail.addEventListener('click', () => {
        showSlider4(index);
    }) 
    })
    



    let items5 = document.querySelectorAll('.slider5 .list .item');
    let thumbnails5 = document.querySelectorAll('.thumbnail5 .item');


function showSlider5(itemActive){
    let thumbnailActiveOld = document.querySelector('.thumbnail5 .item.active');

   let itemActiveOld = document.querySelector('.slider5 .list .active');
   console.log(itemActiveOld); 
   itemActiveOld.classList.remove('active');
   thumbnailActiveOld.classList.remove('active');

   items5[itemActive].classList.add('active');
   thumbnails5[itemActive].classList.add('active');

}

thumbnails5.forEach((thumbnail, index) =>{
    thumbnail.addEventListener('click', () => {
        showSlider5(index);
    }) 
    })
    



    let items6 = document.querySelectorAll('.slider6 .list .item');
    let thumbnails6 = document.querySelectorAll('.thumbnail6 .item');


function showSlider6(itemActive){
    let thumbnailActiveOld = document.querySelector('.thumbnail6 .item.active');
    
   let itemActiveOld = document.querySelector('.slider6 .list .active');
   
  
   itemActiveOld.classList.remove('active');
   thumbnailActiveOld.classList.remove('active');

   items6[itemActive].classList.add('active');
   thumbnails6[itemActive].classList.add('active');

}

thumbnails6.forEach((thumbnail, index) =>{
    thumbnail.addEventListener('click', () => {
        showSlider6(index);
    }) 
    })


    let items7 = document.querySelectorAll('.slider7 .list .item');
    let thumbnails7 = document.querySelectorAll('.thumbnail7 .item');


function showSlider7(itemActive){
    let thumbnailActiveOld = document.querySelector('.thumbnail7 .item.active');
    
   let itemActiveOld = document.querySelector('.slider7 .list .active');
   
  
   itemActiveOld.classList.remove('active');
   thumbnailActiveOld.classList.remove('active');

   items7[itemActive].classList.add('active');
   thumbnails7[itemActive].classList.add('active');

}

thumbnails7.forEach((thumbnail, index) =>{
    thumbnail.addEventListener('click', () => {
        showSlider7(index);
    }) 
    })
    
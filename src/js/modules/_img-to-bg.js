
// как должен быть написан блок
// <div class="img-to-bg">
//   <picture>
//     <source type="image/webp" srcset="img/image.webp">
//     <img src="img/image.jpg" alt="">
//   </picture>
// </div>

// оригинальная функция
// function imgToBG(){
//   let imgToBG=document.querySelectorAll(".img-to-bg");
//   for (var i = 0; i < imgToBG.length; i++) {
//     if(imgToBG[i].querySelector('img')){
//       imgToBG[i].style.backgroundImage = 'url('+imgToBG[i].querySelector('img').getAttribute('src')+')';
//     }
//   }
// }

// imgToBG();


// для webp
function imgToBbWebp(){
  let imgToBG=document.querySelectorAll(".img-to-bg");
  for (var i = 0; i < imgToBG.length; i++) {

    if(imgToBG[i].querySelector('source')){
      imgToBG[i].style.backgroundImage = 'url('+imgToBG[i].querySelector('source').getAttribute('srcset')+')';
    }

  }
}

// для остальных типов изображений
function imgToBb(){
  let imgToBG=document.querySelectorAll(".img-to-bg");
  for (var i = 0; i < imgToBG.length; i++) {

    if(imgToBG[i].querySelector('img')){
      imgToBG[i].style.backgroundImage = 'url('+imgToBG[i].querySelector('img').getAttribute('src')+')';
    }

  }
}


Modernizr.on('webp', function (result) {
  if (result) {
    // если браузер поддерживает webp
    imgToBbWebp()
  }
  else {
    // если браузер не поддерживает webp
    imgToBb()
  }
});
